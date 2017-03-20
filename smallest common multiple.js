// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

function smallestCommons(arr) {
  arr = arr.sort();
  generate 10 multiples of each, find smallest match. If no match or is not divisible by range, generate 10 more.
  return arr;
}
function isDivByRange(div,arr){
  var isDiv = true;
  for (var divider of arr){
	if( div % divider != 0)
		isDiv = false;
}
	
  return isDiv;
}