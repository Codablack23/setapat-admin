import './globals.scss'
import "bootstrap-icons/font/bootstrap-icons.css"
import Navbar from './Navbar'
import Footer from './Footer'
import StyledComponentsRegistry from '@/lib/AntdRegistry'


export const metadata = {
  title: 'Setapat Designer',
  description: 'setapat systems designer dashboard',
}

import { ConfigProvider, type ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#52c41a',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <ConfigProvider theme={theme}>
        <Navbar/>
        <main className="main-container h-[100%] relative">
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </main>
        </ConfigProvider>
      </body>
    </html>
  )
}
