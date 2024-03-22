import { dummyData } from '@/assets/dummyData'
import Item from '@/components/item'
import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Animated, { useAnimatedRef } from 'react-native-reanimated'

const ApplicationIndexPage = () => {
	const flatListRef = useAnimatedRef<FlatList>()

	return (
		<Animated.FlatList
			data={dummyData}
			keyExtractor={(item) => item.id.toString()}
			contentContainerStyle={styles.contentContainer}
			showsVerticalScrollIndicator={false}
			renderItem={({ item }) => <Item item={item} />}
			ref={flatListRef}
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
