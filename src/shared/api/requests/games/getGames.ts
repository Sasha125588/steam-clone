import type { GamesListData, GamesListResponse } from '@generated/api'
import type { ApiFetchesRequest } from '@siberiacancode/fetches'

import { api } from '@/shared/api/instance'

export const getGames: ApiFetchesRequest<GamesListData, GamesListResponse> = async ({
	params,
	config
}) => {
	console.log(config)
	return api.get('games', { ...config, query: { ...config?.query, ...params.query } })
}
