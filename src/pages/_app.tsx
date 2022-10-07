import { Layout } from '@/components/layout'
import { Theme } from '@/styled/base'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'


function MyApp({ Component, pageProps }: AppProps) {

  return(
    <ThemeProvider theme={ Theme }>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
