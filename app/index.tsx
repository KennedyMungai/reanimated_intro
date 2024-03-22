import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated'

const ApplicationIndexPage = () => {
	const width = useSharedValue(200)
	const height = useSharedValue(200)

	const startAnimation = () => {
		const randomWidth = Math.floor(Math.random() * 300) + 100
		const randomHeight = Math.floor(Math.random() * 300) + 100

		width.value = withTiming(randomWidth, { duration: 1000 })
		height.value = withTiming(randomHeight, { duration: 1000 })
	}

	return (
		<View style={styles.container}>
			<Button onPress={startAnimation} title='Start Animation' />

			<Animated.View
				style={{
					width,
					height,
					backgroundColor: 'red'
				}}
			></Animated.View>
		</View>
	)
}

export default ApplicationIndexPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10
	}
})
