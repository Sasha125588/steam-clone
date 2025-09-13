import Link from 'next/link'

import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem
} from '@/components/ui'

import type { SidebarNavigation } from '../../constants/data'

interface NavSecProps {
	items: SidebarNavigation[]
}

export const NavSec = ({ items }: NavSecProps) => {
	return (
		<SidebarGroup className='overflow-hidden'>
			<SidebarGroupLabel className='text-[13px]'>BROWSE BY GENRE</SidebarGroupLabel>
			<SidebarMenu className='mt-2 -ml-4 grid w-60 grid-cols-2 gap-x-0'>
				{items.map(item => (
					<SidebarMenuItem key={item.title}>
						<SidebarMenuButton
							variant='ghost'
							asChild
							size='sm+'
							className='w-full justify-start'
						>
							<Link href={item.url}>
								<item.icon />
								{item.title}
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	)
}
