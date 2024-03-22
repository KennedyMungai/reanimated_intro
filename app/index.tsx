import React from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, { useSharedValue } from 'react-native-reanimated'

const ApplicationIndexPage = () => {
	const width = useSharedValue(200)
	const height = useSharedValue(200)

	return (
		<View style={styles.container}>
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
