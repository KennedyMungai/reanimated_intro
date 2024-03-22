import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { dummyData } from '@/assets/dummyData'

const DetailsPage = () => {
	const { detailsId } = useLocalSearchParams()

	const item = dummyData.filter((item) => item.id.toString() === detailsId)[0]

	return (
		<ScrollView style={styles.container}>
			<Image source={{ uri: item.image }} style={styles.detailsImage} />
			<View style={styles.detailsInfoView}>
				<Text style={styles.itemTitle}>{item.title}</Text>
				<Text style={styles.itemPrice}>${item.price}</Text>
				<Text style={styles.itemDescription}>{item.description}</Text>
			</View>
		</ScrollView>
	)
}

export default DetailsPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	detailsImage: {
		width: '100%',
		height: 400
	},
	detailsInfoView: {
		padding: 20
	},
	itemTitle: {
		fontSize: 28,
		fontWeight: '500',
		color: '#00000090',
		marginBottom: 10
	},
	itemPrice: {
		fontSize: 24,
		fontWeight: '600'
	},
	itemDescription: {
		fontWeight: '500',
		fontSize: 18,
		lineHeight: 22,
		marginTop: 20,
		color: '#00000080'
	}
})
