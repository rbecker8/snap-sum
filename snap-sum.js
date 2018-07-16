function sumArray(arrayToSum) {
	let sum = 0;
	for(let i = 0; i < arrayToSum.length; i++) {
		sum = sum + arrayToSum[i];
	}
	return sum;
}