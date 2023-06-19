import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "../../public/bootstrap/css/bootstrap.min.css"
import "../../public/css/clean-blog.min.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
