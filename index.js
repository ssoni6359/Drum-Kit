//Detecting Button Pressed
var drums = document.querySelectorAll(".drum");
for(var i = 0; i<drums.length; i++){
    drums[i].addEventListener("click",function (){
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

//Detecting Keyboard Press
document.addEventListener("keydown",function(event){
    playSound(event.key);
    buttonAnimation(event.key);
});

function playSound(soundName){
    // var activeButton = document.querySelector("."+soundName);
    // activeButton.classList.toggle("pressed");
    // setTimeout(function(){
    //     activeButton.classList.toggle("pressed");
    // },100);//in milliseconds -> Here, 0.1sec

    switch(soundName){
        case "w" : var tom1 = new Audio("sounds/tom-1.mp3");
                   tom1.play();
                   break;
        case "a" : var tom2 = new Audio("sounds/tom-2.mp3");
                   tom2.play();
                   break;           
        case "s" : var tom3 = new Audio("sounds/tom-3.mp3");
                   tom3.play();
                   break;        
        case "d" : var tom4 = new Audio("sounds/tom-4.mp3");
                   tom4.play();
                   break;
        case "j" : var snare = new Audio("sounds/snare.mp3");
                   snare.play();
                   break;
        case "k" : var crash = new Audio("sounds/crash.mp3");
                   crash.play();
                   break;
        case "l" : var kick = new Audio("sounds/kick-bass.mp3");
                   kick.play();
                   break;
        default:   console.log(this.innerHTML)   ;   
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.toggle("pressed");
    setTimeout(function(){
        activeButton.classList.toggle("pressed");
    },100);//in milliseconds -> Here, 0.1sec    
}