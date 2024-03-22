import { dummyData } from '@/assets/dummyData'
import Item from '@/components/item'
import React from 'react'
import { FlatList, ScrollView, StyleSheet } from 'react-native'
import Animated, {
	useAnimatedRef,
	useScrollViewOffset
} from 'react-native-reanimated'

const ApplicationIndexPage = () => {
	const scrollViewRef = useAnimatedRef<ScrollView>()

	// const scrollHandler = useScrollViewOffset(flatListRef)

	return (
		// <Animated.FlatList
		// 	data={dummyData}
		// 	keyExtractor={(item) => item.id.toString()}
		// 	contentContainerStyle={styles.contentContainer}
		// 	showsVerticalScrollIndicator={false}
		// 	renderItem={({ item }) => <Item item={item} />}
		// 	ref={flatListRef}
		// 	onScroll={() => {}}
		// />
		<ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
			{dummyData.map((item, index) => (
				<Item key={index} item={item} />
			))}
		</ScrollView>
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
