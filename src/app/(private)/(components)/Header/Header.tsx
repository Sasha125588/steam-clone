'use client'

import { ArrowLeftIcon, ArrowRightIcon, LayoutGridIcon, PlusIcon, SearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const Header = () => {
	return (
		<header className='mb-6 px-4 md:px-6'>
			<div className='flex h-16 items-center justify-between gap-5'>
				{/* Left side */}
				<div className='flex items-center gap-2'>
					<div className='rounded-full bg-[#292b2f] p-[10px]'>
						<ArrowLeftIcon size={20} />
					</div>
					<div className='rounded-full bg-[#292b2f] p-[10px]'>
						<ArrowRightIcon size={20} />
					</div>
				</div>
				<div className='relative flex-1'>
					<Input
						className='peer h-10 w-full max-w-xs ps-10 pe-2'
						placeholder='Search...'
						type='search'
					/>
					<div className='text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-4 peer-disabled:opacity-50'>
						<SearchIcon size={18} />
					</div>
				</div>
				{/* Right side */}
				<div className='flex items-center gap-4'>
					{/* Test mode */}
					<div className='inline-flex items-center gap-2 max-md:hidden'>
						<Label className='text-sm font-medium'>Test mode</Label>
					</div>
					<div className='flex items-center gap-2'>
						{/* Layout button */}
						<Button
							size='icon'
							variant='ghost'
							className='text-muted-foreground size-8 rounded-full shadow-none'
							aria-label='Open layout menu'
						>
							<LayoutGridIcon
								size={16}
								aria-hidden='true'
							/>
						</Button>
					</div>
					{/* Add button */}
					<Button
						className='size-8 rounded-full'
						size='icon'
						aria-label='Add new item'
					>
						<PlusIcon
							size={16}
							aria-hidden='true'
						/>
					</Button>
				</div>
			</div>
		</header>
	)
}
