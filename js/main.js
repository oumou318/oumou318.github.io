//THE ROUGH DRAFT..... THE ONLY THING HERE THAT IS NOT ON THE MAIN2.JS IS A FUNCTION FOR THE TIMER/ START BUTTON






//VARIABLES
let leftOrRight = 0;
let upOrDown = 0;
let car1 = document.getElementById('car');
let timer =  document.getElementById('time')

// function() {
//  document.getElementById('car').setAttribute('style', "top: " + 30 + "px");
//  document.getElementById('car').setAttribute('style', 'left: ' + 30 + "px");
//});
//FUNCTIONS

/*
function butUp(){
    //create a variable for the button i am targetting
    // is the button already clickable or do i need to add eventlistener click to it
//button.addEventListener('click',function(){put somthing inside of ur function});

// now i have a function inside of a function is that necessary
  let button =  document.getElementById('up');   button.addEventListener('click',function(){
  console.log('up working');
      upOrDown -= 50;
//      let car1 = document.getElementById('car');
//      car1.setAttribute("style", "top: " + upOrDown + "px")
        car1.setAttribute("style",`top:${upOrDown}px;left:${leftOrRight}px`);   

      
      setInterval(update, 1000);
    });
}
butUp();
*/

class Game {
    constructor() {
         }
    
    butUp() {
         
        let button =  document.getElementById('up');   button.addEventListener('click',function up (){
        console.log('up working');
        upOrDown -= 50;
        car1.setAttribute("style",`top:${upOrDown}px;left:${leftOrRight}px`);   

            });  
    }
    
    butDown() {
    
    let buttonDown = document.getElementById('down');
    buttonDown.addEventListener('click',function down(){
    console.log('down working');
    upOrDown += 50;
    car1.setAttribute("style",`top:${upOrDown}px;left:${leftOrRight}px`);   
           
            });
        
    }
    
    
    butLeft() {
       
    let buttonLeft = document.getElementById('left');
    buttonLeft.addEventListener('click',function left (){
    console.log('left working');
    leftOrRight -= 50;
    car1.setAttribute("style",`top:${upOrDown}px;left:${leftOrRight}px`);   
           
//    console.log(leftOrRight);
            
            });
    }
    
    butRight(){
    
    let buttonRight = document.getElementById('right');
    buttonRight.addEventListener('click',function right(){
    console.log('right working');
    leftOrRight += 50; 
//    if(x > document.getElementByIdwidth){
//        alert('off the screen')
//    }
//    console.log(leftOrRight);
    car1.setAttribute("style",`top:${upOrDown}px;left:${leftOrRight}px`);   
      
    });
    
 }
    
}

let game = new Game();
game.butUp(); 
game.butDown();
game.butLeft();
game.butRight();
//if($('#car').offset().left !== 3000){
//    console.log('126')
//
//
//game.butRight();
//}













//class Start {
//    constructor(){
//        
//    }
//    
// 
//    onTimer() {
//    
//    timer.document.addEventListener('click', function(e){});
//    document.getElementById('mycounter').innerHTML = timer;
//    timer--;
//    if (timer < 0) {
//    alert('You lose!');
//                   }
//    else {
//    setTimeout(timer, 60);
//         }
//              }
//    }

//let ready = new Start();
//ready.onTimer();

/*
function butDown(){
  let buttonDown = document.getElementById('down');
  buttonDown.addEventListener('click',function(){
  console.log('down working');
      upOrDown += 50;
//  let car1 = document.getElementById('car');
//  car1.setAttribute("style", "top: " + upOrDown + "px");
      car1.setAttribute("style",`top:${upOrDown}px;left:${leftOrRight}px`);   
      
    });
}
butDown();



function butLeft(){
  let buttonLeft = document.getElementById('left');
  buttonLeft.addEventListener('click',function(){
  console.log('left working');
      leftOrRight -= 50;
      console.log(leftOrRight);
//      let car1 = document.getElementById('car');
//      car1.setAttribute("style","top" "left: " + leftOrRight + "px")   
      car1.setAttribute("style",`top:${upOrDown}px;left:${leftOrRight}px`);   
      


    });
}
butLeft();



//function butRight(){
let buttonRight = document.getElementById('right');
  buttonRight.addEventListener('click',function right (){
      
  console.log('right working');
      leftOrRight += 50;
      console.log(leftOrRight);
//      let car1 = document.getElementById('car');
//      car1.setAttribute("style", "left: " + leftOrRight + "px")
      car1.setAttribute("style",`top:${upOrDown}px;left:${leftOrRight}px`);   
      
    });*/


//}
////butRight();
// can i put this into a class
//function update(){
//    car1.update();
//    car1.newPos();
//    
//}

//let time = 60;
//timer.document.getElementById('mycounter');
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

// Using the arrow keys on the key board
document.addEventListener('keydown', keyArrows);
// don't mix up Dom and JQuery, onkeydown and keydown

function keyArrows(e) {
//    console.log(game.upOrDown);
//    console.log(e.keyCode) 
//    tells you the number of the key
// console.log('--->', e);
//    return this stops the function from going on any further*/
    
//    e = e || window.event; this depends on the browser

//    if (e.keyCode == 38) {
//         console.log('up working');
//        game.upOrDown -= 900;
//        console.log(game.upOrDown);
//    car1.setAttribute("style",`top:${game.upOrDown}px;left:${game.leftOrRight}px`);
        
        // up arrow
//    }
     if (e.keyCode == '40') {
//        console.log('down');
//         car1.setAttribute("style",`top:${game.upOrDown}px;left:${game.leftOrRight}px`);
        
//        game.butDown();
        // down arrow
    }
//    else if (e.keyCode == '37') {
//       // left arrow
//         console.log('left');
//         car1.setAttribute("style",`top:${game.upOrDown}px;left:${game.leftOrRight}px`);
        
//         game.butLeft();
        
        
    }
//    else if (e.keyCode == '39') {
//       // right arrow
//         console.log('right');
////         car1.setAttribute("style",`top:${game.upOrDown}px;left:${game.leftOrRight}px`);
        
//         game.butRight();
//    }

//}
//keyArrows(); ur not suppose to call it

var carleft = 0;
function move (e){
    if(e.keyCode == 39)
    {console.log('right');
     carleft +=50;
     car1.style.left = carleft + 'px';}
    
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

// Make it move.......................
/* var green = document.getElementById('car');

class Car {
//    constructor(){}
//render(){}
}

var buttons = document.getElementsByClassName('button');
buttons.setAttribute('onclick');
buttons.onclick = function test (width, height){
    console.log('move');
    // what i am targetting
    var green = document.getElementById('car');
    this.width +=1; this.height +=1;
}




var carleft = 0;
function move (e){
    if(e.keyCode == 39)
    { left +=2;
     car.style.left = carleft + 'px';
                       }
}
document.onkeydown= move;*/