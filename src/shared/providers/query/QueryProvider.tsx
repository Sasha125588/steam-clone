'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface QueryProviderProps {
	children: React.ReactNode
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
			refetchOnWindowFocus: false
		}
	}
})

export const QueryProvider = ({ children }: QueryProviderProps) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
