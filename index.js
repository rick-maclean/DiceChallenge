//document.querySelector('h1').textContent = "Roll the dice";

var player1diceValue = 6;
var player2diceValue = 6;
var h1text = "Refresh Me";

document.querySelector('.img1').setAttribute("src", "images/dice6.png");
document.querySelector('.img2').setAttribute("src", "images/dice6.png");

function randomNumber1() {
    return Math.floor(Math.random()*6)+1;
}

function setPlayerDice(player) {
    var diceNumber = randomNumber1();
    var diceToChoose = "images/dice"+diceNumber+".png";
    document.querySelector(".img"+player).setAttribute("src", diceToChoose);
    //alert("inside setPlayerDice dice value is "+diceNumber);
    return diceNumber;
}



player1diceValue = setPlayerDice("1");
player2diceValue = setPlayerDice("2");
//alert("player 1 dice value is "+player1diceValue);

if (player1diceValue === player2diceValue) {
    h1text = "Draw!"
} 
else if (player1diceValue > player2diceValue) {
    h1text = "🚩 Player 1 Wins!";
} 
else {
    h1text = 'Player 2 Wins! 🚩';
}

document.querySelector('h1').textContent = h1text;
//document.querySelector('h1').innerHTML = h1text;

