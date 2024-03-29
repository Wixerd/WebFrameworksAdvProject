import type { AppProps } from 'next/app'
import '../scss/styles.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
