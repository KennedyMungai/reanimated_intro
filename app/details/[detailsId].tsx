import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DetailsPage = () => {
	const params = useLocalSearchParams

	return (
		<View>
			<Text>Details</Text>
		</View>
	)
}

export default DetailsPage

const styles = StyleSheet.create({})
