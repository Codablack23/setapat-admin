import '@/app/globals.scss'
import "bootstrap-icons/font/bootstrap-icons.css"
import Navbar from './Navbar'
import StyledComponentsRegistry from '@/lib/AntdRegistry'

import { ConfigProvider, type ThemeConfig } from 'antd';
import AuthCheck from './components/AuthCheck'
import { AuthContextProvider } from '@/context';
import SideBar from './components/Sidebar';
import MainLayout from './components/MainLayout';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#52c41a',
  },
};

export const metadata = {
  title: 'Setapat Admin',
  description: 'Setapat Systems Admin dashboard',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <ConfigProvider theme={theme}>
         <AuthContextProvider>
          <MainLayout>
            {children}
          </MainLayout>
         </AuthContextProvider>
        </ConfigProvider>
      </body>
    </html>
  )
}
