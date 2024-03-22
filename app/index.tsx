import { dummyData } from '@/assets/dummyData'
import Item from '@/components/item'
import React from 'react'
import { FlatList, StyleSheet, TextInput } from 'react-native'
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	withTiming
} from 'react-native-reanimated'

const AnimatedInput = Animated.createAnimatedComponent(TextInput)

const ApplicationIndexPage = () => {
	const width = useSharedValue(200)
	const height = useSharedValue(200)
	const backgroundColor = useSharedValue('teal')

	const startAnimation = () => {
		const randomWidth = Math.floor(Math.random() * 300) + 100
		const randomHeight = Math.floor(Math.random() * 300) + 100
		const randomColor =
			'#' + Math.floor(Math.random() * 16777215).toString(16)

		width.value = withSpring(randomWidth)
		height.value = withSpring(randomHeight)
		backgroundColor.value = withTiming(randomColor, { duration: 1000 })
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
		<FlatList
			data={dummyData}
			keyExtractor={(item) => item.id.toString()}
			renderItem={({ item }) => <Item item={item} />}
		/>
	)
}

export default ApplicationIndexPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10
	}
})
