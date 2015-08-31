var happyNumber = function(n){
  
  var iteration = 0;
  var num = n;
  while(iteration < 101){
    var numArray = num.toString().split("");
    var num = numArray.reduce(function(a,b){
      return parseInt(a)*parseInt(a)+parseInt(b)*parseInt(b);
    });
    iteration = iteration + 1;
    if(num === 1 || num === '1'){
      console.log(iteration);
      return true
      break
    }
    if(iteration === 100){
      return false
      break
    }
  }
}

console.log(happyNumber(989))