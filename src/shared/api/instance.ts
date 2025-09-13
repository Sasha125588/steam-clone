import fetches from '@siberiacancode/fetches'

export const api = fetches.create({
	baseURL: 'https://api.rawg.io/api/'
})

api.interceptors.request.use(
	config => {
		config.url = config.url + '?key=fa6cc0b8b4964707a5d36c0ddc81b49c'

		return config
	},
	error => Promise.reject(error)
)
