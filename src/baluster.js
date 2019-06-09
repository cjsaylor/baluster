'use strict'

// Minimum industry required width between balusters
const MINIMUM_WIDTH = 4

const BALUSTER_2X2 = 1.75

function estimateQuantity(widthBetweenPosts, balusterWidth = BALUSTER_2X2) {
	return Math.floor(widthBetweenPosts / (MINIMUM_WIDTH + balusterWidth))
}

function spacingMeasurements(widthBetweenPosts, balusterQuantity, balusterWidth = BALUSTER_2X2) {
	const spacing = calculateSpacing(widthBetweenPosts, balusterQuantity, balusterWidth)
	return [...Array(balusterQuantity).keys()]
		.reduce((acc, i) => {
			if (!i) {
				return [spacing + balusterWidth / 2]
			}
			return [
				...acc,
				acc[i - 1] + spacing + balusterWidth
			]
		}, [])
	// .map(val => [Math.floor(val), [nearest16th(val), 16]])
}

function calculateSpacing(widthBetweenPosts, balusterQuantity, balusterWidth = BALUSTER_2X2) {
	return (widthBetweenPosts - (balusterQuantity * balusterWidth)) / (balusterQuantity + 1)
}

function nearest16th(decimal) {
	return Math.round((decimal - Math.floor(decimal)) * 16)
}

module.exports = {
	estimateQuantity,
	spacingMeasurements,
	calculateSpacing,
	nearest16th
}