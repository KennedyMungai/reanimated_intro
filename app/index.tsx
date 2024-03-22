import Item from '@/components/item'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import {
	ActivityIndicator,
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	View
} from 'react-native'
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

	const { data, isPending, isError, error } = useQuery<ShoppingItem[]>({
		queryKey: ['fakeStoreAPI'],
		queryFn: () => {
			return axios.get('https://fakestoreapi.com/products')
		}
	})

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

	if (isPending) {
		return (
			<View
				style={[
					styles.container,
					{ flex: 1, alignItems: 'center', justifyContent: 'center' }
				]}
			>
				<ActivityIndicator />
			</View>
		)
	}

	if (isError) {
		return (
			<View
				style={[
					styles.container,
					{ flex: 1, alignItems: 'center', justifyContent: 'center' }
				]}
			>
				<Text
					style={{ fontSize: 20, color: 'red', fontWeight: 'bold' }}
				>
					Something went wrong: {error.message}
				</Text>
			</View>
		)
	}

	return (
		<FlatList
			data={data}
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
