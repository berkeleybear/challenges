var isprime = function(n){
	output=true
	for(i=2;i<n;i++){
		if(n%i==0){
			output=false
			return output
		}
	}
	return(output)
}

console.log(isprime(47*3))