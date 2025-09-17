import type { Metadata } from 'next'
import { Geist } from 'next/font/google'

import { SidebarInset, SidebarProvider } from '@/components/ui'

import { Header } from './(private)/(components)/Header/Header'
import { AppSidebar } from './(private)/(components)/Sidebar/Sidebar'
import './globals.css'
import { QueryProvider } from '@/shared/providers'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Steam Clone',
	description: 'Steam Clone'
}

interface RootLayoutProps {
	children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} antialiased`}
				suppressHydrationWarning
			>
				<QueryProvider>
					<SidebarProvider>
						<AppSidebar />
						<SidebarInset>
							<main className='bg-[#111317] px-6 py-2'>
								<Header />
								{children}
							</main>
						</SidebarInset>
					</SidebarProvider>
				</QueryProvider>
			</body>
		</html>
	)
}

export default RootLayout
