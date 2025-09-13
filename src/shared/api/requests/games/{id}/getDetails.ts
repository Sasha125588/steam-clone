import type { Game } from '@generated/api'
import type { ApiFetchesRequest } from '@siberiacancode/fetches'

import { api } from '@/shared/api/instance'

export interface GetGameDetailsParams {
	gameId: string
}

export const getGameDetails: ApiFetchesRequest<GetGameDetailsParams, Game> = async ({
	params,
	config
}) => api.get(`games/${params.gameId}`, config)
