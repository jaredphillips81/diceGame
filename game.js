
var currentPlayer = prompt("Enter Your Name");
document.getElementById("playerName").innerText = currentPlayer;

const button = document.querySelector("button");

function rollDice() {

    var diceOne = document.getElementById("img1");
    var diceTwo = document.getElementById("img2");
    var result = document.getElementById("myScore");

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var total = randomNumber1 + randomNumber2;

    var diceSpot = "/css/" + "dice" + randomNumber1 + ".png";
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", diceSpot);

    var diceSpot2 = "/css/" + "dice" + randomNumber2 + ".png";
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", diceSpot2);

    //diceOne.innerHTML = randomNumber1;
    //diceTwo.innerHTML = randomNumber2;

    result.innerHTML = total;
}




