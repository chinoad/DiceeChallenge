

$(document).click(function(){
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage = "dice" + randomNumber1 + ".png";

  var randomImageSource = "images/" + randomDiceImage;

  var image1 = $("img")[0];

  image1.setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  var image2 = $("img")[1];

  image2.setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
  $("h1").text( "Player 1 Win!" );
  } else if (randomNumber1 < randomNumber2) {
  $("h1").text( "Player 2 Wins!" );
  } else {
  $("h1").text("Draw!")
  }


  })
