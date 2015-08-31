var str = '1234567890';
//
//regex = /[0-9]{10}/g
//
//console.log(str.replace(regex, function(match){
//  var workingArray = match.toString().split("");
//  var final = "(" + workingArray.slice(0,3) + ")" + workingArray.slice(3,6) +  "-" + workingArray.slice(6);
//  return final.replace(/,/g,"")
//}))

regex = /([0-9]{3})([0-9]{3})([0-9]{4})/
console.log(str.replace(regex, function(match,c1,c2,c3){
  return "(" + c1 + ")" + c2 + "-" + c3;
}))