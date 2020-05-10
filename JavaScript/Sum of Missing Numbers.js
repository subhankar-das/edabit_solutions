// Problem Name: Sum of Missing Numbers
// Problem ID: https://edabit.com/challenge/8a2J9T4FM5fgSwn4w

function sumMissingNumbers(arr) {
  const max = Math.max.apply(null, arr);
  const min = Math.min.apply(null, arr);
  const n = (max - min + 1);
  const totalSum = n * (max + min) / 2;
  const arraySum = arr.reduce((a, b) => a + b, 0);
	
	return totalSum - arraySum;
}