import { ArrowRightIcon, DownloadCloudIcon, PlusIcon, UsersIcon } from 'lucide-react'

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarRail
} from '@/components/ui/sidebar'

import { SteamLogo } from '../../../../../public/images/SteamLogo'

import { NavMain } from './components/NavMain/NavMain'
import { NavSec } from './components/NavSec/NavSec'
import { SIDEBAR_DATA } from './constants/data'

export const AppSidebar = () => {
	return (
		<Sidebar>
			<SidebarHeader className='p-4 pt-0'>
				<div className='flex items-center'>
					<SteamLogo
						className='fill-white text-white'
						width={80}
						height={80}
					/>
					<h1 className='-ml-2 text-2xl font-bold text-white'>STEAM</h1>
				</div>
				<div className='bg-muted-foreground/20 -mt-2 h-[2px] w-full' />
			</SidebarHeader>
			<SidebarContent className='-mt-1 p-4 pt-0'>
				<NavMain items={SIDEBAR_DATA.navMain} />
				<div className='bg-muted-foreground/20 mt-2 h-[2px] w-full' />
				<NavSec items={SIDEBAR_DATA.navSec} />
				<div className='bg-muted-foreground/20 mt-1 h-[2px] w-full' />
			</SidebarContent>
			<SidebarRail />
			<SidebarFooter className='p-4'>
				<div className='flex flex-col gap-4'>
					<div className='border-muted-foreground/50 flex h-13 items-center justify-between rounded-md border px-3'>
						<div className='flex items-center gap-2'>
							<UsersIcon
								size={16}
								className='text-[#2f99e6]'
								fill='#2f99e6'
							/>
							<p className='text-center text-xs font-semibold text-white'>Friends & Chat</p>
						</div>
						<div className='flex items-center gap-1'>
							<p className='text-xs font-semibold tracking-tight text-[#2f99e6]'>12 online</p>
							<ArrowRightIcon
								className='text-zinc-600'
								size={18}
							/>
						</div>
					</div>
					<div className='flex items-center justify-between gap-2'>
						<div className='bg-muted-foreground/15 h-26 flex-1 flex-col place-content-center rounded-md p-2'>
							<div className='bg-ring/30 mx-auto flex size-7.5 items-center justify-center rounded-full'>
								<PlusIcon size={20} />
							</div>
							<div className='mt-2'>
								<p className='text-center text-[13px] font-bold text-white uppercase'>Add A Game</p>
								<p className='text-center text-xs font-semibold text-[#2f99e6]'>Activate</p>
							</div>
						</div>
						<div className='bg-muted-foreground/15 h-26 flex-1 flex-col place-content-center rounded-md p-2'>
							<div className='bg-ring/30 mx-auto flex size-7.5 items-center justify-center rounded-full'>
								<DownloadCloudIcon size={20} />
							</div>
							<div className='mt-2'>
								<p className='text-center text-[13px] font-bold text-white uppercase'>Downloads</p>
								<p className='text-center text-xs font-semibold text-[#2f99e6]'>Manage</p>
							</div>
						</div>
					</div>
				</div>
			</SidebarFooter>
		</Sidebar>
	)
}
