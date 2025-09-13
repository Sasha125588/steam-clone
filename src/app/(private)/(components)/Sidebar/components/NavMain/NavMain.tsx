import Link from 'next/link'

import { SidebarGroup, SidebarMenu, SidebarMenuItem } from '@/components/ui'
import { SidebarMenuButton } from '@/components/ui'

import type { SidebarNavigation } from '../../constants/data'

import { cn } from '@/shared/helpers'

interface NavMainProps {
	items: SidebarNavigation[]
}

export const NavMain = ({ items }: NavMainProps) => {
	return (
		<SidebarMenu className='space-y-1'>
			{items.map(item => (
				<SidebarMenuItem key={item.title}>
					<SidebarMenuButton
						size='md'
						asChild
					>
						<Link
							className={cn(
								'text-muted-foreground/60 gap-3 text-xl font-semibold',
								item.url === '/' && 'text-background'
							)}
							href={item.url}
						>
							<div>
								<item.icon />
							</div>
							{item.title}
						</Link>
					</SidebarMenuButton>
				</SidebarMenuItem>
			))}
		</SidebarMenu>
	)
}
