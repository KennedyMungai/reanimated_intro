import { dummyData } from '@/assets/dummyData'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Animated, {
	FadeInLeft,
	FadeInRight,
	FadeInUp,
	FadeOutLeft,
	FadeOutRight
} from 'react-native-reanimated'

const DetailsPage = () => {
	const { detailsId } = useLocalSearchParams()

	const item = dummyData.filter((item) => item.id.toString() === detailsId)[0]

	return (
		<ScrollView
			style={styles.container}
			showsVerticalScrollIndicator={false}
		>
			<Animated.Image
				source={{ uri: item.image }}
				style={styles.detailsImage}
				sharedTransitionTag={`image-${item.id}`}
			/>
			<View style={styles.detailsInfoView}>
				<Animated.Text
					entering={FadeInRight.duration(500).delay(300)}
					exiting={FadeOutLeft}
					style={styles.itemTitle}
				>
					{item.title}
				</Animated.Text>
				<Animated.Text
					entering={FadeInRight.duration(500).delay(300)}
					exiting={FadeOutLeft}
					style={styles.itemPrice}
				>
					${item.price}
				</Animated.Text>
				<Animated.Text
					entering={FadeInUp.duration(400).delay(600)}
					style={styles.itemDescription}
				>
					{item.description}
				</Animated.Text>
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
