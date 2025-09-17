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
			<SidebarGroupLabel className='text-[11px]'>BROWSE BY GENRE</SidebarGroupLabel>
			<SidebarMenu className='mt-1 grid w-max grid-cols-2 gap-x-4'>
				{items.map(item => (
					<SidebarMenuItem key={item.title}>
						<SidebarMenuButton
							variant='ghost'
							asChild
							size='sm+'
						>
							<Link href={item.url}>{item.title}</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	)
}
