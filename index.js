 var randomNumber1 = Math.random();
 randomNumber1 = Math.floor((randomNumber1 * 6) + 1);
 var randomImageNumber2 = "images/dice" + randomNumber1 + ".png";
 document.querySelectorAll("img")[0].setAttribute("src", randomImageNumber2); //THROUGH THIS I CAN SELECT DICE1-DICE6 IMAGES

 var randomNumber3 = Math.random();
 randomNumber3 = Math.floor((randomNumber3 * 6) + 1);
 var randomImageNumber4 = "images/dice" + randomNumber3 + ".png";
 document.querySelectorAll("img")[1].setAttribute("src", randomImageNumber4);

if (randomNumber1>randomNumber3)
{
  document.querySelector("h1").innerHTML = "Player1 WINS";
}
else if(randomNumber3>randomNumber1)
{
  document.querySelector("h1").innerHTML = "Player2 WINS";
}
else
{
  document.querySelector("h1").innerHTML = "DRAW";
}
