// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

function smallestCommons(arr) {
  	arr = arr.sort();
	var found = false;
	var prevLCM=0, LCM=0;
	while(!found){
		LCM= generateNextLCM(prevLCM,min, max);
		if(isDivByRange(LCM))
			found=true;
		else
			prevLCM=LCM;
	}
	  return LCM;
}

function generateNextLCM(prevLCM,min, max){
	var isNotLCM = true;
	var possible = prevLCM+1;
	while(isNotLCM){
		if(possible % min == 0 && possible % max == 0 )
			isNotLCM=false;
		else
			possible++;
	}
	return possible;
}
		
function isDivByRange(div,arr){
  var isDiv = true;
  for (var divider of arr)
  	{
		if( div % divider != 0)
			isDiv = false;
	}
	
  return isDiv;
}
