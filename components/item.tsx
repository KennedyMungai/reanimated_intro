import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
	item: ShoppingItem
}

const Item = ({ item }: Props) => {
	return (
		<TouchableOpacity style={styles.cardContainer}>
			<Image source={{ uri: item.image }} style={styles.image} />
			<View style={styles.infoContainer}>
				<Text style={styles.itemTitle}>{item.title}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default Item

const styles = StyleSheet.create({
	cardContainer: {
		marginHorizontal: 10,
		paddingVertical: 10,
		marginBottom: 20,
		backgroundColor: 'white',
		borderRadius: 6
	},
	image: {
		width: '100%',
		height: 300,
		borderRadius: 6
	},
	itemTitle: {
		fontWeight: '500',
		fontSize: 16,
		color: '#00000090'
	},
	infoContainer: {
		paddingHorizontal: 20
	}
})
