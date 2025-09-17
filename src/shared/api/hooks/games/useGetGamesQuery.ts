import type { GamesListData } from '@generated/api'
import { useQuery } from '@tanstack/react-query'

import { getGames } from '../../requests'

export const useGetGamesQuery = (
	params: GamesListData,
	settings?: QuerySettings<typeof getGames>
) =>
	useQuery({
		queryKey: ['getGames', params.query],
		queryFn: () => getGames({ params, config: settings?.config }),
		...settings?.options
	})
