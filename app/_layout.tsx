import { Stack } from 'expo-router'
import React from 'react'

const MainApplicationLayout = () => {
	return (
		<Stack>
			<Stack.Screen name='index' options={{ title: 'Welcome' }} />
			<Stack.Screen
				name='details/[detailsId]'
				options={{ title: 'Details', headerTransparent: true }}
			/>
		</Stack>
	)
}

export default MainApplicationLayout
