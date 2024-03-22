import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
	item: ShoppingItem
}

const Item = ({ item }: Props) => {
	return (
		<TouchableOpacity style={styles.container}>
			<Image source={{ uri: item.image }} style={styles.image} />
			<View>
				<Text style={styles.itemTitle}>{item.title}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default Item

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		marginBottom: 20
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
	}
})
