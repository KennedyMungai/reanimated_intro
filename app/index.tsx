import React from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, { useSharedValue } from 'react-native-reanimated'
import { AnimatedScrollView } from 'react-native-reanimated/lib/typescript/reanimated2/component/ScrollView'

const ApplicationIndexPage = () => {
	const width = useSharedValue(0)
	const height = useSharedValue(0)

	return (
		<View>
			<Animated.View
				style={{
					width: width.value,
					height: height.value,
					backgroundColor: 'tomato'
				}}
			></Animated.View>
		</View>
	)
}

export default ApplicationIndexPage

const styles = StyleSheet.create({})
