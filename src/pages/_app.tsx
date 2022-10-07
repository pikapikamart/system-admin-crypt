import { Layout } from '@/components/layout'
import { Theme } from '@/styled/base'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { withTRPC } from "@trpc/next"
import { AppRouter } from '../server/router'
import superjson from "superjson"
import { SessionProvider } from 'next-auth/react'
import { store } from "../client/store"
import { Provider } from 'react-redux'



function MyApp({ Component, pageProps }: AppProps) {

  return(
    <Provider store={ store }>
      <SessionProvider session={ pageProps.session }>
        <ThemeProvider theme={ Theme }>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </Provider>
  )
}

const trpc = withTRPC<AppRouter>({
  config({ ctx }) {
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc';

    return {
      url,
      transformer: superjson,
      headers: {
        "x-ssr": "1"
      }
    }
  },
  ssr: true
})(MyApp)


export default trpc;