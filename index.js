// For Image1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var diceImageSrc1 = "images/" + randomDiceImage;


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", diceImageSrc1);

// For Image 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber2 + ".png";

var diceImageSrc2 = "images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", diceImageSrc2);


// Change h1 Content

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🎈🎉Player 1 WIN!"
} else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 WIN!🎇🎆"
} else{
    document.querySelector("h1").innerHTML = "🤣Draw Game!!😂"
}

