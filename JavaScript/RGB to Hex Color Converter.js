// Problem Name: RGB to Hex Color Converter
// Problem ID: https://edabit.com/challenge/dLfz4nn5GYL8cLsGM

function rgbToHex(col) {
	col = col.replace('rgb(', '').replace(')', '').split(',');
	const rgb = {r: parseInt(col[0]), g: parseInt(col[1]), b : parseInt(col[2])}
	return "#" + componentToHex(rgb.r) + componentToHex(rgb.g) + componentToHex(rgb.b);
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}