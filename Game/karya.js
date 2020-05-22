document.getElementById("kid").addEventListener("click", function(){
  sound();
  animation();
});
document.addEventListener("keypress",function(event)
{
  key=(event.key);
  if(key=="f")
  {
    sound();
    animation();
  }
});
function sound(){
  var audio = new Audio();
  var audio2 = new Audio();
  audio.src = "Sound/gun-gunshot-01.mp3";
  audio2.src = "Sound/gun-cocking-01.mp3";
  audio2.play();
  setTimeout(function(){
    audio.play();
  },500);
}
function animation(){
  var activeButton = document.getElementById("kid");
  activeButton.classList.add("recoil");
  setTimeout(function(){
    activeButton.classList.remove("recoil");
  },500);
  var activeButton2 = document.getElementById("ded");
  activeButton2.classList.add("bloodani");
}
