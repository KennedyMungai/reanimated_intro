import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DetailsPage = () => {
	const { detailsId } = useLocalSearchParams()

	return (
		<ScrollView style={styles.container}>
			<Text>{detailsId}</Text>
		</ScrollView>
	)
}

export default DetailsPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	}
})
