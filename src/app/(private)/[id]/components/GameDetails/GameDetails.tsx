import type { Game } from '@generated/api'
import { Gamepad2Icon, StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface GameDetailsProps {
	game: Game
}

export const GameDetails = ({ game }: GameDetailsProps) => {
	return (
		<div className='relative rounded-sm text-white'>
			<Image
				src={game.background_image_additional ?? game.background_image}
				alt={game.name}
				width={1920}
				height={1080}
				className='absolute inset-0 rounded-sm object-cover'
			/>
			<div className='absolute inset-0 rounded-sm bg-gradient-to-b from-black/20 via-black/96 to-black' />
			<div className='relative z-10 mx-8 max-w-7xl py-8'>
				<div className='mb-10 flex items-center justify-between text-sm text-zinc-400'>
					<div className='rounded border border-zinc-700/50 bg-black/60 px-5 py-3.5 font-medium tracking-tight shadow-xl backdrop-blur-md'>
						<span>All Games</span>
						<span className='mx-2'>&gt;</span>
						<span>Adventure Games</span>
						<span className='mx-2'>&gt;</span>
						<span>WB Games Franchise</span>
						<span className='mx-2'>&gt;</span>
						<span>{game.name}</span>
					</div>
					<button className='hover:black/60 rounded border border-zinc-700/50 bg-black/60 px-4.5 py-3.5 font-semibold tracking-tight text-white shadow-lg backdrop-blur-md transition-colors'>
						Community Hub
					</button>
				</div>
				<div className='mb-2 flex gap-10'>
					<Image
						src={game.background_image}
						alt={game.name}
						width={240}
						height={400}
						className='h-90 rounded-lg object-cover'
					/>

					<div className='mb-6 flex-1'>
						<div className='mb-10'>
							<div className='flex items-center gap-1'>
								<StarIcon
									fill='yellow'
									stroke='yellow'
									size={18}
								/>
								<p className='font-semibold'>{game.rating}</p>
							</div>
							<h1 className='text-6xl font-bold'>{game.name}</h1>
						</div>

						<div className='mb-4 flex w-fit items-center gap-2 rounded-full border-[1.5px] border-white/70 bg-black/40 px-4 py-2.5 text-[13px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/50'>
							<Gamepad2Icon
								size={18}
								className='text-white'
							/>
							About this game
						</div>

						<p className='text-base leading-relaxed text-white'>
							{game.description_raw.slice(0, 730)}...
						</p>
					</div>
				</div>
				<div className='flex'>
					<div className='w-3/4'>
						<div className='mb-6'>
							<div className='mb-2 text-sm text-gray-400'>
								Popular user-defined tags for this product:
							</div>

							{/* Теги */}
							<div className='flex flex-wrap gap-2'>
								{game.tags?.map(tag => (
									<span
										key={tag.id}
										className='cursor-pointer rounded-sm bg-[#0d304a] px-3 py-1.5 text-xs font-semibold tracking-tight text-[#209ff4] transition-colors hover:bg-[#203950] hover:text-white'
									>
										{tag.name}
									</span>
								))}
							</div>
						</div>
						<div className='mt-8'>
							<h3 className='mb-4 text-xl font-medium'>Available on</h3>
							<div className='flex flex-wrap gap-3'>
								{game.stores.map(({ store }) => (
									<Link
										href={'https://www.' + store.domain}
										key={store.id}
										target='_blank'
										className='rounded bg-[#0f0f0f] px-4 py-2 text-sm text-white transition-colors hover:bg-[#66c0f4]'
									>
										{store.name}
									</Link>
								))}
							</div>
						</div>
					</div>
					{/* Рейтинги */}
					<div className='h-full w-1/4 space-y-6'>
						<div>
							<h1 className='mb-3 text-2xl font-bold'>{game.name}</h1>
							<p className='text-sm text-zinc-300'>{game.description_raw?.slice(0, 150)}...</p>
						</div>

						<div className='space-y-2'>
							<div className='flex items-center gap-2 text-sm text-zinc-400'>
								<span>ALL REVIEWS:</span>
								<span>No user reviews</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-zinc-400'>
								<span>RELEASE DATE:</span>
								<span>
									{new Date(game.released).toLocaleDateString('en-US', {
										day: 'numeric',
										month: 'short',
										year: 'numeric'
									})}
								</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-zinc-400'>
								<span>DEVELOPER:</span>
								<span className='text-[#4c83ff] hover:text-white'>
									{game.developers?.[0]?.name}
								</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-zinc-400'>
								<span>PUBLISHER:</span>
								<span className='text-[#4c83ff] hover:text-white'>
									{game.publishers?.[0]?.name}
								</span>
							</div>
						</div>

						<div>
							<p className='mb-2 text-sm text-zinc-400'>
								Popular user-defined tags for this product:
							</p>
							<div className='flex flex-wrap gap-2'>
								{game.tags?.slice(0, 5).map(tag => (
									<span
										key={tag.id}
										className='cursor-pointer rounded bg-[#0d304a] px-2 py-1 text-xs text-[#4c83ff] transition-colors hover:bg-[#203950] hover:text-white'
									>
										{tag.name}
									</span>
								))}
							</div>
						</div>

						<h3 className='mb-4 text-xl font-medium'>Ratings</h3>
						<div className='flex gap-2'>
							<div className='relative h-auto w-8 overflow-hidden rounded-sm'>
								{game.ratings
									.sort((a, b) => b.percent - a.percent)
									.map((rating, index, arr) => {
										const previousHeights = arr
											.slice(0, index)
											.reduce((sum, r) => sum + r.percent, 0)

										const getGradient = (title: string) => {
											switch (title) {
												case 'exceptional':
													return 'bg-gradient-to-r from-[#4c9229] to-[#8bcc50]'
												case 'recommended':
													return 'bg-gradient-to-r from-[#2d5bb9] to-[#4c83ff]'
												case 'meh':
													return 'bg-gradient-to-r from-[#b85f15] to-[#ff9c41]'
												case 'skip':
													return 'bg-gradient-to-r from-[#b31515] to-[#ff4141]'
												default:
													return 'bg-gradient-to-r from-gray-600 to-gray-400'
											}
										}

										return (
											<div
												key={rating.id}
												className={`absolute w-full ${getGradient(rating.title)}`}
												style={{
													height: `${rating.percent}%`,
													top: `${previousHeights}%`
												}}
											/>
										)
									})}
							</div>
							<div className='flex flex-col gap-10'>
								{game.ratings
									.sort((a, b) => b.percent - a.percent)
									.map(rating => (
										<div
											key={rating.id}
											className='flex items-center gap-2'
										>
											<div
												className={`h-2 w-2 rounded-full ${
													rating.title === 'exceptional'
														? 'bg-[#8bcc50]'
														: rating.title === 'recommended'
															? 'bg-[#4c83ff]'
															: rating.title === 'meh'
																? 'bg-[#ff9c41]'
																: 'bg-[#ff4141]'
												}`}
											/>
											<span className='text-sm capitalize'>{rating.title}</span>
											<span className='text-sm text-gray-400'>({rating.count},</span>
											<span className='text-sm text-gray-400'>{rating.percent}%)</span>
										</div>
									))}
							</div>
						</div>
					</div>
				</div>

				{/* Магазины */}

				{/* Галерея */}
				<div className='mt-12 grid grid-cols-3 gap-4'>
					{/* Видео с кнопкой Play */}
					<div className='relative aspect-video overflow-hidden rounded-lg'>
						<Image
							src={game.background_image}
							alt='Video thumbnail'
							fill
							className='object-cover'
						/>
						<div className='absolute inset-0 flex items-center justify-center bg-black/50'>
							<svg
								className='h-16 w-16 text-white'
								viewBox='0 0 24 24'
								fill='currentColor'
							>
								<path d='M8 5v14l11-7z' />
							</svg>
						</div>
						<div className='absolute right-0 bottom-0 left-0 p-4 text-white'>
							<div className='text-sm'>Be the Witch or Wizard You Want to be</div>
							<div className='mt-1 text-xs text-gray-400'>Wednesday, February 1, 2023</div>
						</div>
					</div>

					{/* Скриншоты */}
					<div className='relative aspect-video overflow-hidden rounded-lg'>
						<Image
							src={game.background_image_additional || game.background_image}
							alt='Explore an Open World'
							fill
							className='object-cover'
						/>
						<div className='absolute right-0 bottom-0 left-0 p-4'>
							<div className='text-sm text-white'>Explore an Open World</div>
						</div>
					</div>

					<div className='relative aspect-video overflow-hidden rounded-lg'>
						<Image
							src={game.background_image}
							alt='Experience a New Wizarding Adventure'
							fill
							className='object-cover'
						/>
						<div className='absolute right-0 bottom-0 left-0 p-4'>
							<div className='text-sm text-white'>Experience a New Wizarding Adventure</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
