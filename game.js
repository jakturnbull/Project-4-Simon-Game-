var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;
$(document).ready(function() {




  $("div > .btn").click(function(event) {
    var userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    console.log(userClickedPattern);
  })

  function playSound(name) {
    var buttonSound = new Audio("sounds/" + name + ".mp3");
    buttonSound.play();
  }

  function nextSequence() {

    $("h1").text("Level " + level);
    var randomNumber = Math.round(Math.random() * 3);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
    level++;
  }

  function animatePress(currentColour) {
    $("." + currentColour).addClass("pressed");
    setTimeout(
      function() {
        $("." + currentColour).removeClass("pressed");
      }, 100);
  }



  $("body").keydown(function() {

    if (gameStarted == false) {
      nextSequence();
      gameStarted = true;
    }
     else if(gameStarted == true) {
      console.log("game has started");
    }
  });
});
