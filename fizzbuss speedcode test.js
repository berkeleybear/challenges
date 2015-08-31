var fizzbuzz = function(a,b){
	
	for(i=a;i<=b;i++){
		if((i%3==0)&&(i%5==0)){
			console.log("fizzbuzz")
		}
		else if((i%3==0)&&(i%5!=0)){
			console.log("fizz")
		}
		else if((i%3!=0)&&(i%5==0)){
			console.log("buzz")
		}
		else{
			console.log(i)
		}
	}
}

fizzbuzz(1,200)