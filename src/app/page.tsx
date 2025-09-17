import type { Game } from '@generated/api'

import { GamesList } from './(private)/(components)/GamesList/GamesList'
import { getGameDetails, getGames } from '@/shared/api/requests'

const Home = async () => {
	const getGamesResponse = (await getGames({
		params: { url: '/games' },
		config: { cache: 'force-cache' }
	})) as unknown as {
		data: { results: Game[] }
	}

	const getGameDetailsResponse = (await getGameDetails({
		params: { gameId: '3439' },
		config: { cache: 'force-cache' }
	})) as unknown as {
		data: Game
	}

	console.log(getGameDetailsResponse.data.platforms)

	return (
		<GamesList
			games={getGamesResponse.data.results}
			gameDetails={getGameDetailsResponse.data}
		/>
	)
}

export default Home
