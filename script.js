
var colors=["red","green","yellow","blue"];
var patten=[];
var userPatten=[];
var started=false;
//key has been pressed
 $(document).keypress(function(){ 
   if(!started){
        newSequence();
    started=true;}
  
    })
//user pressed
$(".btn").click(function(){
playing(this.id);
checkPatten(this.id);

})

//create patten
function newSequence(){
    userPatten=[];
    var randomNumber=Math.floor(Math.random()*4);

    patten.push(colors[randomNumber]);
    $("#"+colors[randomNumber]).fadeIn(100).fadeOut(100).fadeIn(100);
    makeSound(colors[randomNumber]);
    $("h1").text("LEVEL  "+patten.length)
  
    //then need to wait for user press
}


//checking the patten entred by user
function checkPatten(e){
  
userPatten.push(e)
var currebtLevel=(userPatten.length)-1;



if(userPatten[currebtLevel]===patten[currebtLevel]){

if(userPatten.length===patten.length){
   
    setTimeout(function(){
        newSequence();
    },1000);}
}
else{

$("body").addClass("game-over");
 setTimeout(()=>{
    $("body").removeClass("game-over");},200);
    $("h1").text("Game Over,press any key to re-start");
    makeSound("wrong");
   
        startOver();
   
   
   }

}

//re-start the game
function startOver(){
patten=[];
started=false;
}


function makeSound(e){

    switch (e) {
        case "red":
            var redAudio=new Audio('sounds/red.mp3');
            redAudio.play();
            break;
            case "blue":
            var blueAudio=new Audio('sounds/blue.mp3');
            blueAudio.play();
            break;
            case "green":
                var greenAudio=new Audio('sounds/green.mp3');
                greenAudio.play();
                break;
                case "yellow":
                    var yellowAudio=new Audio('sounds/yellow.mp3');
                    yellowAudio.play();
                    break;
                    case "wrong":
                    var wrongAudio=new Audio('sounds/wrong.mp3');
                    wrongAudio.play();
                    break;

       
    }
}
function makeAnimation(e){
$("#"+e).addClass("pressed");
setTimeout(function(){$("#"+e).removeClass("pressed");},100);

}
function playing(e){
    makeSound(e);
makeAnimation(e);
}
