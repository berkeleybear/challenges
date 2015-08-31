//find maximum value in a list

var listmax = function(array){
	a=array[0]
	arlen = array.length
	for(i=0;i<arlen;i++){
		if(array[i]>a){
			a = array[i]
		}
	}
	return(a)
}

console.log(listmax([1,2,3,4,5,6,7,8,91,8,7,6,4,5,11,3,5,6,7]))

var listmin = function(array){
	m=array[0]
	arlen = array.length
	for(i=0;i<arlen;i++){
		if(array[i]<a){
			a=array[i]
		}
	}
	return(a)
}

console.log(listmin([1,2,3,4,5,6,7,8,91,8,7,6,4,5,11,3,5,6,7]))
