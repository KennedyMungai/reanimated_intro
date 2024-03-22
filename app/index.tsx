import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring
} from 'react-native-reanimated'

const AnimatedInput = Animated.createAnimatedComponent(TextInput)

const ApplicationIndexPage = () => {
	const width = useSharedValue(200)
	const height = useSharedValue(200)
	const backgroundColor = useSharedValue('teal')

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

	const animatedInputStyles = useAnimatedStyle(() => {
		return {
			backgroundColor: backgroundColor.value
		}
	})

	return (
		<View style={styles.container}>
			<Button onPress={startAnimation} title='Start Animation' />
			<AnimatedInput
				style={[
					animatedInputStyles,
					{
						height: 50,
						margin: 10,
						color: 'white',
						paddingHorizontal: 10,
						borderRadius: 6,
						fontWeight: '600',
						fontSize: 16
					}
				]}
			/>
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
