for(var i=0;i<document.querySelectorAll(".drum").length;i++) //to select all the buttons
{
  document.querySelectorAll('.drum')[i].addEventListener("click",function(){ //on clickit will call this function.
    var keys = this.innerHTML; //key variable has the name of button by using innerHTML feature.
    pressbutt(keys);    //for all buttons with a drum class, it detects click and calls function pressbutt with input parameter as their key value.
    buttonAnimation(keys);
  });
}
document.addEventListener("keypress",function(event) //detects the button pressed and passes it to the pressbutt function to play sounds
{
  pressbutt(event.key);
  buttonAnimation(event.key);
});
function pressbutt(key)  //it has all the sounds assigned for each key i.e passed in parameter.
{
  switch(key)
  {
    case "w":
      var tom1=new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2=new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3=new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4=new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var snare=new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      var crash=new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      var kick=new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    default: console.log(buttonInnerHTML);
  }
}
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
