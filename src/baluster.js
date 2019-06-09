'use strict'

// Maximum industry required width between balusters
const MAXIMUM_WIDTH = 4

const BALUSTER_2X2 = 1.75

function estimateQuantity(widthBetweenPosts, balusterWidth = BALUSTER_2X2) {
	return Math.floor(widthBetweenPosts / (MAXIMUM_WIDTH + balusterWidth))
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
}

function calculateSpacing(widthBetweenPosts, balusterQuantity, balusterWidth = BALUSTER_2X2) {
	const spacing = (widthBetweenPosts - (balusterQuantity * balusterWidth)) / (balusterQuantity + 1)
	if (spacing > MAXIMUM_WIDTH) {
		throw "Too few balusters for given width."
	}
	return spacing
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