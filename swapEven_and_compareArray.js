var compareArray = function(a,b) {
  for(i = 0; i < a.length ; i++){
    if(a[i] !== b[i]){
      return false
    }
  }
  return true
}

var swapEven = function(ar) {
  var ar2 = [];
  for(i = 0; i < ar.length; i++) {
    if(i % 2 === 0){
      ar2[i] = ar[ar.length - 1 - i];
    }
    else{
      ar2[i] = ar[i];
    }
  }
  return ar2
}

console.log(compareArray([6, 2, 4, 4, 2, 6], swapEven([1, 2, 3, 4, 5, 6])));
console.log(compareArray([7, 2, 5, 4, 3, 6, 1], swapEven([1, 2, 3, 4, 5, 6, 7])));
console.log(compareArray([8, 2, 6, 4, 4, 6, 2, 8], swapEven([1 ,2 ,3 ,4 ,5 ,6 ,7 ,8])));