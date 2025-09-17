import type { Game } from '@generated/api'

import { GameDetails } from './components/GameDetails/GameDetails'
import { getGameDetails } from '@/shared/api/requests'

interface Props {
	params: Promise<{ id: string }>
}

const GamePage = async ({ params }: Props) => {
	const { id } = await params

	const game = (await getGameDetails({
		params: { gameId: id },
		config: { cache: 'force-cache' }
	})) as unknown as {
		data: Game
	}

	if (!game) return null

	return <GameDetails game={game.data} />
}

export default GamePage
