function isPrime(i, PrimeList){
	var isPrime = true;
	for ( var prime of PrimeList)
	{
		if (i % prime === 0)
			isPrime = false;
	}
	return isPrime;
}
function sumPrimes(num) {
  if(num==2)
    return 2;
  else if (num<=2)
    return 0;
  var potentialPrime = 2;
  var sum = 2;
  var listPrimes = [];
  listPrimes.push(2);
  potentialPrime++;
  while(potentialPrime<=num){
    //noprotect
    if(isPrime(potentialPrime,listPrimes))
    {
      console.log(potentialPrime+' pushed');
      listPrimes.push(potentialPrime);
      sum+=potentialPrime;
    }
    console.log(potentialPrime);
    potentialPrime++;
  }
  return sum;
}
sumPrimes(977);