import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
	item: ShoppingItem
}

const Item = ({ item }: Props) => {
	return (
		<TouchableOpacity style={styles.container}>
			<Image source={{ uri: item.image }} />
			<View>
				<Text>{item.title}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default Item

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingVertical: 10
	}
})
