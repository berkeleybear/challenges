$(document).ready(function(){

  var guessesRemaining = 4;
  $(".guessesRemaining").text(guessesRemaining.toString());
  var computerChoice = Math.floor(Math.random()*11 + 1);
  console.log(computerChoice)
    $('.row').on('click', function(){

      guessesRemaining = guessesRemaining-1;
      $('.guessesRemaining').text(guessesRemaining.toString());
      if(guessesRemaining === 0){
        $('.titletext').text("you suck at guessing, please stop");
      }
      
    });

    $('.col-md-1').on('click', function(){
      $(this).css({"background-color":"red"});

    });

    $('.row > .col-md-1:nth-child(' + computerChoice + ')').on('click', function(){
      $('.titletext').text("YOU WIN");
      $(this).css({"background-color":"green"});
    });

});