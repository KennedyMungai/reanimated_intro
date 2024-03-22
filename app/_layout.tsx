import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import React from 'react'

const queryClient = new QueryClient()

const MainApplicationLayout = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Stack>
				<Stack.Screen name='index' options={{ title: 'Welcome' }} />
				<Stack.Screen name='details' options={{ title: 'Details' }} />
			</Stack>
		</QueryClientProvider>
	)
}

export default MainApplicationLayout
