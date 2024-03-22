import { Link } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
	item: ShoppingItem
}

const Item = ({ item }: Props) => {
	return (
		<Link href={`/${item.id}`} asChild>
			<TouchableOpacity style={styles.cardContainer}>
				<Image source={{ uri: item.image }} style={styles.image} />
				<View style={styles.infoContainer}>
					<Text style={styles.itemTitle}>{item.title}</Text>
					<Text style={styles.itemPriceText}>$ {item.price}</Text>
				</View>
			</TouchableOpacity>
		</Link>
	)
}

export default Item

const styles = StyleSheet.create({
	cardContainer: {
		marginHorizontal: 10,
		paddingBottom: 20,
		marginBottom: 20,
		backgroundColor: 'white',
		borderRadius: 10
	},
	image: {
		width: '100%',
		height: 300,
		borderRadius: 6
	},
	itemTitle: {
		fontWeight: '500',
		fontSize: 18,
		color: '#00000090'
	},
	infoContainer: {
		paddingHorizontal: 20
	},
	itemPriceText: {
		fontSize: 14,
		fontWeight: 'bold'
	}
})
