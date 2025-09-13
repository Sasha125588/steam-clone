'use client'

import type { Game } from '@generated/api'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { getGameDetails } from '@/shared/api/requests'

interface Props {
	params: {
		id: string
	}
}

const GamePage = ({ params }: Props) => {
	const [game, setGame] = useState<Game | null>(null)

	useEffect(() => {
		const fetchGame = async () => {
			const response = await getGameDetails({ params: { gameId: params.id } })
			setGame(response.data)
		}

		fetchGame()
	}, [params.id])

	if (!game) return null

	return (
		<div className='min-h-screen rounded-sm bg-[#1b2838] text-white'>
			<div className='relative'>
				<div className='absolute inset-0'>
					<Image
						src={game.background_image}
						alt={game.name}
						fill
						className='rounded-sm object-cover opacity-20'
					/>
				</div>

				<div className='relative z-10 mx-8 max-w-7xl py-8'>
					<div className='mb-8 flex items-center justify-between text-sm text-gray-400'>
						<div className='rounded bg-black/40 px-5 py-3.5 shadow-sm backdrop-blur-xs'>
							<span>All Games</span>
							<span className='mx-2'>&gt;</span>
							<span>Adventure Games</span>
							<span className='mx-2'>&gt;</span>
							<span>WB Games Franchise</span>
							<span className='mx-2'>&gt;</span>
							<span>{game.name}</span>
						</div>
						<button className='w-fit rounded bg-[#1e1f26] px-6 py-3 font-medium text-white transition-colors hover:bg-[#2a2b32]'>
							Community Hub
						</button>
					</div>
					<div className='flex gap-8'>
						{/* Левая колонка с постером */}
						<div className='w-[324px]'>
							<Image
								src={game.background_image}
								alt={game.name}
								width={324}
								height={464}
								className='h-full rounded-lg object-cover'
							/>
						</div>

						{/* Средняя колонка с информацией */}
						<div className='flex-1'>
							<h1 className='mb-4 text-5xl font-bold'>{game.name}</h1>

							<button className='mb-6 flex items-center gap-2 rounded-md bg-[#3a4a5c] px-4 py-2 text-sm text-white hover:bg-[#4a5a6c]'>
								<svg
									className='h-4 w-4'
									viewBox='0 0 24 24'
									fill='currentColor'
								>
									<path d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6H9v-2h2V7h2v2h2v2h-2v6z' />
								</svg>
								About this game
							</button>

							<p className='mb-6 text-lg leading-relaxed text-gray-300'>
								{game.description_raw?.substring(0, 400)}...
							</p>

							{/* Теги */}
							<div className='mb-6'>
								<div className='mb-2 text-sm text-gray-400'>
									Popular user-defined tags for this product:
								</div>

								{/* Теги */}
								<div className='flex flex-wrap gap-2'>
									{game.tags?.map(tag => (
										<span
											key={tag.id}
											className='rounded bg-[#3a4a5c] px-3 py-1.5 text-sm text-[#66c0f4] transition-colors hover:bg-[#66c0f4] hover:text-white'
										>
											{tag.name}
										</span>
									))}
								</div>
							</div>

							{/* Рейтинги */}
							<div className='mt-8'>
								<h3 className='mb-4 text-xl font-medium'>Ratings</h3>
								<div className='flex gap-4'>
									{game.ratings.map(rating => (
										<div
											key={rating.id}
											className='flex items-center gap-2'
										>
											<div className='h-2 w-2 rounded-full bg-[#66c0f4]'></div>
											<span className='text-sm capitalize'>{rating.title}</span>
											<span className='text-sm text-gray-400'>({rating.percent}%)</span>
										</div>
									))}
								</div>
							</div>

							{/* Магазины */}
							<div className='mt-8'>
								<h3 className='mb-4 text-xl font-medium'>Available on</h3>
								<div className='flex flex-wrap gap-3'>
									{game.stores.map(({ store }) => (
										<Link
											href={'https://www.' + store.domain}
											key={store.id}
											target='_blank'
											className='rounded bg-[#3a4a5c] px-4 py-2 text-sm text-white transition-colors hover:bg-[#66c0f4]'
										>
											{store.name}
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>

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
		</div>
	)
}

export default GamePage
