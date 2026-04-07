import '@/app/globals.scss'
import "bootstrap-icons/font/bootstrap-icons.css"
import StyledComponentsRegistry from '@/lib/AntdRegistry'


export const metadata = {
  title: 'Setapat Designer',
  description: 'setapat systems designer dashboard',
}

import { ConfigProvider, type ThemeConfig } from 'antd';
import Navbar from '../(home)/Navbar';

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
      <body className="bg-gray-100">
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
