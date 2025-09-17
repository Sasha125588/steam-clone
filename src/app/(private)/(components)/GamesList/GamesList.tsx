import type { Game } from '@generated/api'
import { BookTextIcon, ListPlusIcon, PlusIcon, TrendingUpIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { getPlatformIconUrl } from '@/shared/helpers/getPlatformIconUrl'
import { getRandomPrice } from '@/shared/helpers/getRandomPrice'

interface GamesListProps {
	games: Game[]
	gameDetails: Game
}

export const GamesList = ({ games, gameDetails }: GamesListProps) => {
	return (
		<div className='space-y-12'>
			<div>
				<div className='mb-4 flex w-fit items-center gap-2 rounded-full border-[1.5px] border-white/70 bg-black/40 px-4 py-2.5 text-[13px] font-semibold tracking-tight text-white backdrop-blur-sm transition-colors hover:bg-black/50'>
					<BookTextIcon
						size={18}
						className='text-white'
					/>
					Featured & Recommended
				</div>
				<div className='flex h-[500px] w-full rounded-sm bg-[#1e1f26]'>
					<Link
						href={`/${gameDetails.id}`}
						className='w-[60%]'
					>
						<Image
							src={gameDetails.background_image ?? ''}
							alt={gameDetails.name ?? ''}
							className='h-full w-full rounded-l-sm object-cover'
							width={512}
							height={512}
						/>
					</Link>
					<div className='w-[40%] space-y-6.5 px-6 py-8'>
						<div>
							<h1 className='mb-3 text-3xl font-bold'>{gameDetails.name}</h1>
							<p className='text-sm font-medium text-zinc-300'>
								{gameDetails.description_raw?.slice(0, 150)}...
							</p>
						</div>

						<div className='space-y-2 font-semibold tracking-tight'>
							<div className='flex items-center gap-2 text-sm text-zinc-400'>
								<span className='font-medium'>ALL REVIEWS:</span>
								<span className='text-white'> {gameDetails.reviews_count}</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-zinc-400'>
								<span className='font-medium'>RELEASE DATE:</span>
								<span className='text-white'>
									{new Date(gameDetails.released).toLocaleDateString('en-US', {
										day: 'numeric',
										month: 'short',
										year: 'numeric'
									})}
								</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-zinc-400'>
								<span className='font-medium'>DEVELOPER:</span>
								<div className='flex items-center gap-2'>
									<span className='cursor-pointer text-[#349be1] transition-colors hover:text-white'>
										{gameDetails.developers?.[0]?.name}
									</span>
								</div>
							</div>
							<div className='flex items-center gap-2 text-sm text-zinc-400'>
								<span className='font-medium'>PUBLISHER:</span>
								<span className='cursor-pointer text-[#349be1] transition-colors hover:text-white'>
									{gameDetails.publishers?.[0]?.name}
								</span>
							</div>
						</div>

						<div>
							<p className='mb-2 text-sm font-medium text-zinc-500'>
								Popular user-defined tags for this product:
							</p>
							<div className='flex flex-wrap gap-2'>
								{gameDetails.tags?.slice(0, 3).map(tag => (
									<span
										key={tag.id}
										className='cursor-pointer rounded-sm bg-[#1b3146] px-2 py-1.5 text-xs font-semibold text-[#349be1] transition-colors hover:bg-[#203950] hover:text-white'
									>
										{tag.name}
									</span>
								))}
								<span className='cursor-pointer rounded-sm bg-[#1b3146] px-2 py-1.5 text-xs font-semibold text-[#349be1] transition-colors hover:bg-[#203950] hover:text-white'>
									<PlusIcon size={16} />
								</span>
							</div>
						</div>

						<div className='flex items-center gap-2'>
							<p className='text-sm font-medium text-zinc-500'>Available on:</p>
							<div className='flex items-center gap-3'>
								{gameDetails.platforms?.map(({ platform }) => {
									const iconUrl = getPlatformIconUrl(platform?.slug ?? '')
									if (!iconUrl) return null

									return (
										<Image
											key={platform?.id}
											src={iconUrl}
											alt={platform?.name ?? ''}
											width={18}
											height={18}
											style={{
												filter: 'invert(1)'
											}}
											title={platform?.name}
											className='cursor-pointer'
										/>
									)
								})}
							</div>
						</div>

						<div className='flex items-center justify-between'>
							<div className='rounded-sm bg-[#0d0e10] px-3 py-2.5 text-sm font-bold'>
								{gameDetails.price ?? '59,99'}€
							</div>
							<div className='flex items-center gap-2'>
								<button className='rounded-sm bg-yellow-500/15 p-2.5 transition-colors hover:bg-[#4a5260]'>
									<ListPlusIcon
										size={20}
										className='text-yellow-500'
									/>
								</button>
								<button className='rounded-sm bg-green-700/20 px-3 py-2.5 text-sm font-semibold tracking-tight text-green-500/95 transition-colors hover:bg-[#269e50]'>
									ADD TO CART
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div className='mb-4 flex w-fit items-center gap-2 rounded-full border-[1.5px] border-white/70 bg-black/40 px-4 py-2.5 text-[13px] font-semibold tracking-tight text-white backdrop-blur-sm transition-colors hover:bg-black/50'>
					<TrendingUpIcon
						size={18}
						className='text-white'
					/>
					Popular Upcoming
				</div>
				<div className='grid grid-cols-4 gap-4'>
					{games.map(game => {
						const price = game.price ?? getRandomPrice()
						return (
							<Link
								href={`/${game.id}`}
								key={game.id}
								className='relative overflow-hidden rounded-sm'
							>
								<Image
									src={game.background_image ?? ''}
									alt={game.name ?? ''}
									className='h-34 object-cover transition-all duration-300 hover:scale-105'
									width={512}
									height={512}
								/>
								<div className='flex items-center justify-between bg-[#1e1f26] p-3'>
									<div className='flex gap-2'>
										{game.genres.slice(0, 3).map(genre => (
											<span
												key={genre.id}
												className='rounded-sm bg-[#1b3146] px-2 py-1.5 text-[11px] font-semibold text-[#349be1]'
											>
												{genre.name}
											</span>
										))}
									</div>
									<span className='rounded-sm bg-[#111317] px-2 py-1.5 text-[11px] font-medium text-white'>
										{price}€
									</span>
								</div>
							</Link>
						)
					})}
				</div>
			</div>
		</div>
	)
}
