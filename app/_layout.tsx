import { Stack } from 'expo-router'
import React from 'react'

const MainApplicationLayout = () => {
	return (
		<Stack>
			<Stack.Screen name='index' options={{ title: 'Welcome' }} />
			<Stack.Screen name='details' options={{ title: 'Details' }} />
		</Stack>
	)
}

export default MainApplicationLayout
