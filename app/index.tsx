import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring
} from 'react-native-reanimated'

const ApplicationIndexPage = () => {
	const width = useSharedValue(200)
	const height = useSharedValue(200)

	const startAnimation = () => {
		const randomWidth = Math.floor(Math.random() * 300) + 100
		const randomHeight = Math.floor(Math.random() * 300) + 100

		width.value = withSpring(randomWidth, { duration: 1000 })
		height.value = withSpring(randomHeight, { duration: 1000 })
	}

	const animatedStyles = useAnimatedStyle(() => {
		return {
			width: width.value,
			height: height.value
		}
	})

	return (
		<View style={styles.container}>
			<Button onPress={startAnimation} title='Start Animation' />
			<Animated.View style={animatedStyles}></Animated.View>
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
