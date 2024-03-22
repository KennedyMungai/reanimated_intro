import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
	item: ShoppingItem
}

const Item = ({ item }: Props) => {
	return (
		<View>
			<Text>Item</Text>
		</View>
	)
}

export default Item

const styles = StyleSheet.create({})
