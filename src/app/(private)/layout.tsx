import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui'

import '../globals.css'

import { AppSidebar } from './(components)/Sidebar/Sidebar'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
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
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				suppressHydrationWarning
			>
				<SidebarProvider>
					<AppSidebar />
					<SidebarInset className='bg-[#111317]'>
						<main>
							<SidebarTrigger />
							{children}
						</main>
					</SidebarInset>
				</SidebarProvider>
			</body>
		</html>
	)
}

export default RootLayout
