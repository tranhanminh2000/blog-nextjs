import { Inter } from 'next/font/google'
import '../../public/bootstrap/css/bootstrap.min.css'
import '../../public/css/clean-blog.min.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Blog-nextjs</title>
        <script src="/jquery/jquery.min.js"></script>
        <script src="/bootstrap/js/bootstrap.min.js"></script>
        <script defer src="/js/jqBootstrapValidation.js"></script>
        <script defer src="/js/clean-blog.min.js"></script>
        <script defer src="/js/contact_me.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
