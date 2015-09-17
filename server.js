var http = require('http');
var request = require('request');
var PORT = 8000;
var MD5 = require('md5');
var fs = require('fs');
var server = http.createServer(function(request, response){
  var requestData = request.url.split("/");
  var mode = requestData[1];
  var expression = requestData.slice(2);
  var expressionD = expression.join(" ").replace(/d/g, "/").split(" ");
  switch(mode){
    case "math":
      while(expressionD.length > 1){
        switch(expressionD[1]){
          case '+':
            expressionD.splice(0,3,parseFloat(expressionD[0])+parseFloat(expressionD[2]));
            break;
          case '-':
            expressionD.splice(0,3,parseFloat(expressionD[0])-parseFloat(expressionD[2]));
            break;
          case '*':
            expressionD.splice(0,3,parseFloat(expressionD[0])*parseFloat(expressionD[2]));
            break;
          case '/':
            expressionD.splice(0,3,parseFloat(expressionD[0])/parseFloat(expressionD[2]));
            break;
          default:
            console.log("error");
            throw new Error("unexpected expression");
        }
      }
      var evaluated = expressionD[0];
      console.log(evaluated);
      response.end(evaluated.toString());
      break;

    case "words":
      wordsContent = decodeURI(expression.join(" "));
      var output = {
        letters: wordsContent.split('').length,
        words: wordsContent.split(" ").length,
        spaces: wordsContent.match(/\s/g).length,
        decoded_String: wordsContent,
      }
      response.end(JSON.stringify(output));
      break;

    case "gravatarUrl":
      var email = expression[0];
      var hash = md5(email);
      var grvURL = 'http://www.gravatar.com/avatar/' + hash;
      var html = "<img src ='" + grvURL + "'></img>";
      res.setHeader("Content-Type", "text/html");
      res.end(html);
      break;

    case "JSON":

      res.end();
      break;

/*
    case "weather":
      var locationData = requestData.slice(2);
      var cityOrZip = locationData[0];
      if()
    default:
      response.writeHead(302, {
        'location' : "/"
      });*/
  }
  response.end("please make sure your url is correct");
});

server.listen(PORT, function(){
  console.log("server now listening on port " + PORT);
});

console.log('end of file');