var factors = function(n){
	output = []
	for(i=1;i<n;i++){
		if(n%i == 0){
			output.push(i)
		}
	}
	return(output);
}
console.log(factors(360))