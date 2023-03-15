
var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage1 = "dice"+randomNumber1+".png";

var randoImageSource1= "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randoImageSource1);

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randoImageSource2);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage2 = "dice"+randomNumber2+".png";

var randoImageSource2 = "images/" + randomDiceImage2;

image2.setAttribute("src",randoImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins 🎉";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🎉 ";
} else {
    document.querySelector("h1").innerHTML = "DRAW !";
}

const play = document.querySelector("#play");
play.addEventListener("click", function () {
 location.reload();
});

