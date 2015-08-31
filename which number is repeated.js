var repeat = function(array){
	
	a = []
	elements = array.length
	for(i=0;i<elements;i++){
		alen = a.length
		notrepeated=true
		for(j=0;j<alen;j++){
			if(array[i]==a[j]){
				return(array[i])
			}
		}
		if(notrepeated=true){
			a.push(array[i])
		}
	}
}

console.log(repeat([1,2,3,4,5,6,7,8,9,0,12,13,14,15,5]))

//more efficient version
/*
var repeat=function(array){
	alen=array.length
	for(i=0;i<alen;i++){
		element=array[i]
		arnew=array[i:]
	}
}*/