// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
var number1 = Math.round(Math.random()*100);
var number1Box = document.querySelector("#number1")

var number2 = Math.round(Math.random() *100);
var number2Box = document.querySelector("#number2")

// Iteration 3: Creating variables required to make the game functional

var Operators;
var score = 0;

const plus = document.querySelector("#plus")

const minus = document.querySelector("#minus")

const mul = document.querySelector("#mul")

const divide = document.querySelector("#divide")

const modulu = document.querySelector("#modulu")

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

var number3Box = document.querySelector("#number3");
var number3; 

// Iteration 5: Creating a randomise function to make the game functional
function randomise() {

 number1 = Math.round(Math.random() *100);
 number2 = Math.round(Math.random() *100);

if(number1 < number2 ) {
    var extra = number1;
    number1 = number2;
    number2 = extra;    
} 

Operators = Math.round(Math.random()*5);
switch(Operators) {
    case 1:
        number3 = number1 + number2;
        break;
    
    case 2:
        number3 = number1 - number2;
        break;
    
    case 3:
        number3 = number1 * number2;
        break;
    
    case 4:
        number3 = Math.floor(number1/number2);
        break;
    
    case 5:
        number3 = number1 % number2;
        break;
    
    case 0:
        randomise();
        
}

number1Box.innerHTML = number1;
number2Box.innerHTML = number2;
number3Box.innerHTML = number3;


}
randomise()

// Iteration 6: Making the Operators (button) functional

 plus.onclick = () => {
    if (number1 + number2 === number3) {
        score ++;
        randomise();
    }else {
        location.href = "gameover.html?score=" + score;
    }
 };

 minus.onclick = () => {
    if (number1 - number2 === number3) {
        score ++;
        randomise();
    }else {
        location.href = "gameover.html?score=" + score;
    }
 };

 mul.onclick = () => {
    if (number1 * number2 === number3) {
        score ++;
        randomise();
    }else {
        location.href = "gameover.html?score=" + score;
    }
 };

 divide.onclick = () => {
    if (Math.floor(number1 / number2) === number3) {
        score ++;
        randomise();
    }else {
        location.href = "gameover.html?score=" + score;
    }
 };

 modulus.onclick = () => {
    if (number1 % number2 === number3) {
        score ++;
        randomise();
    }else {
        location.href = "gameover.html?score=" + score;
    }
 };

// Iteration 7: Making Timer functional
var time = 20;
var timerId ;
var timer = document.getElementById("timer")
function setTimer()  {
time = 20;
timer.innerHTML = time;
timerId = setInterval(() =>{
    time--;
    if (time == 0) location.href = "gameover.html?score=" + score;
    timer.innerHTML = time;
},1000 );
}
function reseTime(intervalId) {
    clearInterval(intervalId);
    setTimer();
}

setTimer();