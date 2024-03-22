import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'

const ApplicationIndexPage = () => {
	const width = useSharedValue(0)
	const height = useSharedValue(0)

	return (
		<View>
			<View
				style={{
					width: width.value,
					height: height.value,
					backgroundColor: 'tomato'
				}}
			></View>
		</View>
	)
}

export default ApplicationIndexPage

const styles = StyleSheet.create({})
