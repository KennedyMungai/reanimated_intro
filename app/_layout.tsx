import { Stack } from 'expo-router'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const MainApplicationLayout = () => {
	return (
		<GestureHandlerRootView style={{flex: 1}}><Stack>
			<Stack.Screen name='index' options={{ title: 'Welcome' }} />
			<Stack.Screen
				name='details/[detailsId]'
				options={{
					title: 'Details',
					headerTransparent: true,
					headerTitle: ''
				}}
			/>
		</Stack></GestureHandlerRootView>
		
	)
}

export default MainApplicationLayout
