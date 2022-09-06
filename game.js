var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;




$("body").keydown(function() {

  if (!gameStarted) {
    nextSequence();
    gameStarted = true;
  }

});

$("div > .btn").click(function(event) {
  var userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  console.log(userClickedPattern);
  checkAnswer(userClickedPattern.length-1);
})

function playSound(name) {
  var buttonSound = new Audio("sounds/" + name + ".mp3");
  buttonSound.play();
}

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.round(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("." + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

}

function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");
  setTimeout(
    function() {
      $("." + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("success");
    if (userClickedPattern.length === gamePattern.length){


         setTimeout(function () {
           nextSequence();
         }, 1000);

       }

     } else {

       console.log("wrong");
       $("body").addClass("game-over");
       setTimeout(function(){
         $("body").removeClass("game-over");
       },200);
       startOver()
     }
}


function startOver(){
  gameStarted = false;
  level = 0;
  gamePattern = [];
    $("#level-title").text("Press A key to Start");
}
