var reversestring = function(str){
	a = []
	work = str.split(" ")
	len = work.length
	for(i=0;i<len;i++){
		a[i]=work[len-i-1]
	}
	return(a.join(" "))
}

console.log(reversestring("Alice's soul lives at Wolf Haus"))