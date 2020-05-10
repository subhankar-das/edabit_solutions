// Problem Name: Positive Dominant
// Problem ID: https://edabit.com/challenge/7pkKPYtTJzpxRMckZ

function isPositiveDominant(a) {
	let posCnt = negCnt = 0;
	[...new Set(a)].map(item => {
		item > 0 ? posCnt++ : item < 0 ? negCnt++ : null
	});
	return posCnt > negCnt;
}