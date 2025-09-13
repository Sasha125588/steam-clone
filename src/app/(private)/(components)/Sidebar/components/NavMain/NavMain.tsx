import Link from 'next/link'

import { SidebarMenu, SidebarMenuItem } from '@/components/ui'
import { SidebarMenuButton } from '@/components/ui'

import type { SidebarNavigation } from '../../constants/data'

import { cn } from '@/shared/helpers'

interface NavMainProps {
	items: SidebarNavigation[]
}

export const NavMain = ({ items }: NavMainProps) => {
	return (
		<SidebarMenu>
			{items.map(item => (
				<SidebarMenuItem key={item.title}>
					<SidebarMenuButton
						size='lg'
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
