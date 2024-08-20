

var len = document.querySelectorAll(".drum").length;
for(var i=0; i<len; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttoninnerHTML =  this.innerHTML;
        makeSound(buttoninnerHTML);
        makeAnimation(buttoninnerHTML);
        
        
    })
}

document.addEventListener("keydown",function (evnt) {
    var evntkey = evnt.key;
    makeSound(evntkey);
    makeAnimation(evntkey);
})

function makeSound (drumkey) {

    switch(drumkey){

        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;

        // default :
        //     console.log(kbkey);
           
    }
}

function makeAnimation(drumkey){
    document.querySelector("." + drumkey).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("." + drumkey).classList.remove("pressed"); 
    },100)
} 

