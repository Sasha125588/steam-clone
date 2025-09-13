import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
	input: 'https://api.rawg.io/docs/?format=openapi',
	output: {
		format: 'prettier',
		path: 'generated/api'
	},
	plugins: ['@hey-api/typescript']
})
