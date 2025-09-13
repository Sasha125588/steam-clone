'use client'

import type { Game } from '@generated/api'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { getGames } from '@/shared/api/requests'

const Home = () => {
	const [games, setGames] = useState<Game[]>([])

	useEffect(() => {
		const fetchGames = async () => {
			const response = await getGames({ params: { query: {}, url: '/games' } })
			setGames(response.data.results)
		}

		fetchGames()
	}, [])

	return (
		<div className='grid grid-cols-3 gap-4'>
			{games.map(game => (
				<Link
					href={`/${game.id}`}
					key={game.id}
					className='relative overflow-hidden rounded-lg'
				>
					<Image
						src={game.background_image ?? ''}
						alt={game.name ?? ''}
						className='h-52 w-full object-cover transition-all duration-300 hover:scale-105'
						width={145}
						height={145}
					/>
					<div className='absolute right-0 bottom-0 left-0 flex items-center justify-between bg-[#1e1f26] px-2 py-3'>
						<div className='flex gap-2'>
							{game.genres.slice(0, 3).map(genre => (
								<span
									key={genre.id}
									className='rounded bg-[#1d3144] px-2 py-1.5 text-xs font-medium text-[#66c0f4]'
								>
									{genre.name}
								</span>
							))}
						</div>
						<span className='rounded bg-[#111317] px-2 py-1 text-[13px] font-medium text-white'>
							{game.price || '59,99'}€
						</span>
					</div>
				</Link>
			))}
		</div>
	)
}

export default Home
