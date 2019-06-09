const {
	estimateQuantity,
	spacingMeasurements,
	nearest16th,
} = require('./src/baluster')

const interiorWidth = 39.9375
let quantity = estimateQuantity(interiorWidth)
let measurements = []
try {
	measurements = spacingMeasurements(interiorWidth, quantity)
} catch (error) {
	quantity++
	measurements = spacingMeasurements(interiorWidth, quantity)
}

console.log(quantity, measurements.map(val => [Math.floor(val), [nearest16th(val), 16]]))
