import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DetailsPage = () => {
	const { detailsId } = useLocalSearchParams()

	return (
		<View>
			<Text>{detailsId}</Text>
		</View>
	)
}

export default DetailsPage

const styles = StyleSheet.create({})
