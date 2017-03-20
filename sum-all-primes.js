// for i in potentialPrimes
	// if isPrime(i,PrimeList)
		// add to PrimeList
		// add to Sum

		
		
//isPrime(i, PrimeList){
	
	
function sumPrimes(num) {
  if(num==2)
    return 2;
  else if (num<=2)
    return 0;
  var prime = 2;
  var sum = 2;
  var listPrimes = [];
  listPrimes.push(2);
  prime++;
  var isPrime;
  while(prime<=num){
    if(listPrimes.reduce(
      function(prev, el){
        return (prime % el ===0||prev===false);}
      ,true))
    {
      console.log(prime+' pushed');
      listPrimes.push(prime);
      sum+=prime;
    }
    console.log(prime);
    prime++;
  }
  return sum;
}
