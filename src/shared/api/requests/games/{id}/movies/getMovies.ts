import type { GamesMoviesReadResponse } from '@generated/api'
import type { ApiFetchesRequest } from '@siberiacancode/fetches'

import { api } from '@/shared/api/instance'

export interface GetGameMoviesParams {
	gameId: string
}

export const getGameMovies: ApiFetchesRequest<
	GetGameMoviesParams,
	GamesMoviesReadResponse
> = async ({ params, config }) => api.get(`games/${params.gameId}/screenshots`, config)
