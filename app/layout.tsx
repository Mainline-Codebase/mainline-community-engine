import './globals.css'
import { Inter } from 'next/font/google'
import { classNames } from './utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mainline Community Engine',
  description: 'mce.vercel.app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-gray-900">
      <body className={classNames(inter.className, 'h-full')}>
        {children}
      </body>
    </html>
  )
}
