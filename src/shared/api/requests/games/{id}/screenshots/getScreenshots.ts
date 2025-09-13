import type { GamesScreenshotsListData, GamesScreenshotsListResponse } from '@generated/api'
import type { ApiFetchesRequest } from '@siberiacancode/fetches'

import { api } from '@/shared/api/instance'

export const getGameScreenshots: ApiFetchesRequest<
	GamesScreenshotsListData,
	GamesScreenshotsListResponse
> = async ({ params, config }) =>
	api.get(`games/${params.path.game_pk}/screenshots`, {
		...config,
		query: { ...config?.query, ...params.query }
	})
