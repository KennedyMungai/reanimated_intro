import { dummyData } from '@/assets/dummyData'
import Item from '@/components/item'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Animated, {
	useAnimatedRef,
	useAnimatedStyle,
	useScrollViewOffset
} from 'react-native-reanimated'

const ApplicationIndexPage = () => {
	const scrollViewRef = useAnimatedRef<Animated.ScrollView>()

	const scrollHandler = useScrollViewOffset(scrollViewRef)

	const buttonStyle = useAnimatedStyle(() => {
		console.log(scrollHandler.value)

		return {}
	})

	const scrollTop = () => {}

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
		<>
			<Animated.ScrollView
				ref={scrollViewRef}
				showsVerticalScrollIndicator={false}
				style={styles.container}
			>
				{dummyData.map((item, index) => (
					<Item key={index} item={item} />
				))}
			</Animated.ScrollView>
			<Animated.View
				style={[
					{ position: 'absolute', bottom: 20, right: 20 },
					buttonStyle
				]}
			>
				<TouchableOpacity
					onPress={scrollTop}
					style={{
						padding: 6,
						backgroundColor: 'white',
						borderRadius: 50,
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Ionicons name='add-circle' size={30} color={'black'} />
				</TouchableOpacity>
			</Animated.View>
		</>
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
