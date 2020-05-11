// Problem Name: Crack the Code
// Problem ID: https://edabit.com/challenge/NNqAzPWi5v4HfTC9k

function decode(str) {
	let resultArr = []
	str.split('').map(charVal => {
		let sum = 0;
		let asciiVal = charVal.charCodeAt(charVal)
		// sum of digits of ascii
		while (asciiVal) {
    	sum += asciiVal % 10;
    	asciiVal = Math.floor(asciiVal / 10);
		}
		resultArr.push(sum)
	})
	return resultArr;
}