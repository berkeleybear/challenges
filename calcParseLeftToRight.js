var mathParser = function(string){
  
  var str = string.replace(/\s/g, '');
  workingArr = str.replace(/\+/g,' + ').replace(/-/g,' - ').replace(/\*{1}/g,' * ').replace(/\/{1}/g," / ").replace(/\^/g,' ^ ').split(/\s/);
  while(workingArr.length > 1){
    switch(workingArr[1]){
  
      case '+': var sol = parseInt(workingArr[0]) + parseInt(workingArr[2]); 
      workingArr.splice(0,2) 
      workingArr[0] = sol
      break;

      case '-': var sol = parseInt(workingArr[0]) - parseInt(workingArr[2]); 
      workingArr.splice(0,2) 
      str[0] = sol
      break;
        
      case '*': var sol = parseInt(workingArr[0]) * parseInt(workingArr[2]); 
      workingArr.splice(0,2) 
      workingArr[0] = sol
      break;
            
      case '/': var sol = parseInt(workingArr[0]) / parseInt(workingArr[2]); 
      workingArr.splice(0,2) 
      workingArr[0] = sol
      break;
  
      case '^': var sol = Math.pow(parseInt(workingArr[0]), parseInt(workingArr[2])); 
      workingArr.splice(0,2) 
      workingArr[0] = sol
      break;

      default: return error;
    }
    workingArr[0] = sol;
  }
  return workingArr;
}

console.log(mathParser('4+ 3 - 10/6.044 *4 +4* 2'));