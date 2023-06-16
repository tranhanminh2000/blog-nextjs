import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Blog-nextjs</title>
        <script src="../../jquery/jquery.min.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
