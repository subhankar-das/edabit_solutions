// Problem Name: Numbers in Strings
// Problem ID: https://edabit.com/challenge/eCPim4XcssdZdvs32

function numInStr(arr) {
	let numberPattern = /\d/;
	let newArr = [];
	arr.map(item => {
		numberPattern.test(item) ? newArr.push(item) : null
	})
	return newArr;
}