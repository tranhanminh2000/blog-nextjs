import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script defer src="/jquery/jquery.min.js"></script>
        <script defer src="/bootstrap/js/bootstrap.min.js"></script>
        <script defer src="/js/jqBootstrapValidation.js"></script>
        <script defer src="/js/clean-blog.min.js"></script>
        <script defer src="/js/contact_me.js"></script>
      </Head>
      <body>
        <Main />
      </body>
      <NextScript />
    </Html>
  )
}
