var fibonacci = function(n){
	
	work = [0,1]
	for(i=2;i<n;i++){
		work[i]=work[i-1]+work[i-2]
	}
	return(work)
}
console.log(fibonacci(50))