import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated'

const ApplicationIndexPage = () => {
	const width = useSharedValue(200)
	const height = useSharedValue(200)

	const startAnimation = () => {
		width.value = withTiming(Math.random() * 300)
		height.value = withTiming(Math.random() * 300)
	}

	return (
		<View style={styles.container}>
			<Button onPress={startAnimation} title='Start Animation' />

			<Animated.View
				style={{
					width: width,
					height: height,
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
