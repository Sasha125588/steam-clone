import type { GamesAchievementsReadResponse } from '@generated/api'
import type { ApiFetchesRequest } from '@siberiacancode/fetches'

import { api } from '@/shared/api/instance'

export interface GetGameAchievementsParams {
	gameId: string
}

export const getGameAchievements: ApiFetchesRequest<
	GetGameAchievementsParams,
	GamesAchievementsReadResponse
> = async ({ params, config }) => api.get(`games/${params.gameId}/screenshots`, config)
