import { Layout } from '@/components/layout'
import { Theme } from '@/styled/base'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { withTRPC } from "@trpc/next"
import { AppRouter } from '../server/router'
import superjson from "superjson"



function MyApp({ Component, pageProps }: AppProps) {

  return(
    <ThemeProvider theme={ Theme }>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
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