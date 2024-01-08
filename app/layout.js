import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/src/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hatyai Primary Care Conference',
  description: 'ประชุมวิชาการประจำปี เวชศาสตร์ครอบครัวโรงพยาบาลหาดใหญ่',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar />
      {children}
      </body>
    </html>
  )
}
