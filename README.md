# Baluster

Baluster is a javascript library to enable estimation of balusters and calculating the spacing to get an even distribution on a constructed railing.

> Note: Please consult your local building codes for maximum spacing requirements. This library assumes maximum distance of 4".

## Usage

```
npm install baluster
```

For babel/webpack apps:

```js
import { estimateQuantity } from 'baluster'

console.log(estimateQuantity(41.625))
// 7
```

For nodejs (commonjs) apps:

```js
const { estimateQuantity } from 'baluster'

console.log(estimateQuantity(41.625))
// 7
```

## API

### `estimateQuantity`

```js
int estimateQuantity(
	float widthBetweenPosts,
	float balusterWidth = 1.75
)
```

Given `widthBetweenPosts` which is the measurement in inches measured on the interior of the posts, this will calculate the number of balusters needed.

---

### `calculateSpacing`

```js
float calculateSpacing(
	float widthBetweenPosts,
	int balusterQuantity,
	float balusterWidth = 1.75
)
```

Calculate the spacing that is needed between each baluster to make them all equidistant.

Throws an exception if the `balusterQuantity` is not enough to satisfy maximum spacing requirements.

---

### spacingMeasurements

```js
array spacingMeasurements(
	float widthBetweenPosts,
	int balusterQuantity,
	float balusterWidth = 1.75
)
```

As with `calculateSpacing`, this will specify the measurements for each baluster on the rail (measurement centered on the baluster).

---

### nearest16th

```js
int nearest16th(
	float number
)
```

Utility method to calculate the nearest 16th of an inch.

```js
console.log(nearest16th(0.5))
// 8
```
