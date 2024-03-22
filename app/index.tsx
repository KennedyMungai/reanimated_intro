import { dummyData } from '@/assets/dummyData'
import Item from '@/components/item'
import React from 'react'
import { FlatList, StyleSheet, TextInput } from 'react-native'
import Animated from 'react-native-reanimated'

const AnimatedInput = Animated.createAnimatedComponent(TextInput)

const ApplicationIndexPage = () => {
	return (
		<FlatList
			data={dummyData}
			keyExtractor={(item) => item.id.toString()}
			contentContainerStyle={styles.contentContainer}
			showsVerticalScrollIndicator={false}
			renderItem={({ item }) => <Item item={item} />}
		/>
	)
}

export default ApplicationIndexPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10
	},
	contentContainer: {
		marginBottom: 20
	}
})
