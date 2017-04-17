//THE CLEANER VERSION
//I HAD A FUNCTION FOR A TIMER THAT'S CONNECTED TO THE START BUTTON BUT IDK WHAT I DID IT'S NOT WORKING ANYMORE SO ITS NOT HERE IM RUNNING OUT OF TIME SO I AM GOING TO SUBMIT WHAT I HAVE

/*
this is what i have for the timer

let time = 60;
timer.document.getElementById('mycounter');
function onTimer() {
  document.getElementById('mycounter').innerHTML = timer;
  timer--;
  if (timer < 0) {
    alert('You lose!');
  }
  else {
    setTimeout(onTimer, 60);
  }
}
onTimer();
*/

// Using the arrow keys





//VARIABLES
// first 3 variables are for the class game
let leftOrRight = 0;
let upOrDown = 0;
let car1 = document.getElementById('car');
let carleft = 0;

// FUNCTION TURNED INTO CLASS 
// NAVIGATIONAL BUTTONS ON THE SCREEN
class Game {
    constructor() {
         }
butUp() {
    let button =  document.getElementById('up');  
    // it grabbing the up button assigning it a variable
    // then im going to add an event listener to that button using the variable button and the function that goes along with what will happen when you click on that button
    // Soo.. if i press on the button it should appear on the console log as of now the button is not connected to the car
    //upOrDown is a variable to represent the directionality of the button. without the  the negative sign up was going down. there is still a bit of a glitch sometimes if you press the buttons on the key board they go the oppsite direction idk why
    //car1.setAttribute("style",`top:${upOrDown}px;left:${leftOrRight}px`); 
    // this was hardest part the up/down button was not recognized by the  left/right Dominic helped me with this and Patrick and Alexey
    // so it's going to grab from the car css style top and left using the speed of 50 and add to the pixels
    button.addEventListener('click',function(){
    console.log('up working');
    upOrDown -= 50;
    car1.setAttribute("style",`top:${upOrDown}px;left:${leftOrRight}px`);   
            });  
    }
butDown() {
    let buttonDown = document.getElementById('down');
    buttonDown.addEventListener('click',function(){
    console.log('down working');
    upOrDown += 50;
    car1.setAttribute("style",`top:${upOrDown}px;left:${leftOrRight}px`);   
             });
    }
butLeft() {
    let buttonLeft = document.getElementById('left');
    buttonLeft.addEventListener('click',function(){
    console.log('left working');
    leftOrRight -= 50;
    car1.setAttribute("style",`top:${upOrDown}px;left:${leftOrRight}px`); 
    
             });
    }
butRight(){
    let buttonRight = document.getElementById('right');
    buttonRight.addEventListener('click',function(){
    console.log('right working');
    leftOrRight += 50; 
//    console.log(leftOrRight);
    car1.setAttribute("style",`top:${upOrDown}px;left:${leftOrRight}px`);   
          });
    
    }
    
}
//CALLING THE CLASS WITH KEYWORD NEW AND ASSIGNING IT A VARIABLE
let game = new Game();
//CALLING THE METHODS/ FUNCTIONS
game.butUp(); 
game.butDown();
game.butLeft();
game.butRight();


// USING THE KEYBOARD OMG!!!!!! 
// HOWEVER YOU CAN'T TOGGLE BTW THE BUTTONS ON THE SCREEN AND THE KEYBOARD :(
function move (e){
    if(e.keyCode == 39)
    {console.log('right');
//     PAY ATTENTION TO -/+ SIGN 50 IS THE SPEED
     carleft +=50;
//     WHY CAN'T I GRAB THE RIGHT AND BOTTOM 
     car1.style.left = carleft + 'px';}
//   ELSE IF IS NEEDED NOT JUST ELSE 
    else if (e.keyCode == 37) 
    {console.log('left');
     carleft -=50;
     car1.style.left = carleft + 'px';} 
    
    else if (e.keyCode == 38)
    {console.log('up');
     carleft -=50;
     car1.style.top = carleft + 'px';}
    
    else if (e.keyCode == 40)
    {console.log('down')
     carleft +=50;
     car1.style.top = carleft + 'px';}
}
document.onkeydown= move; 
//CALLING THE FUNCTION