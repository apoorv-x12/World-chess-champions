var wcChamps=[
  "https://upload.wikimedia.org/wikipedia/commons/e/ec/FIDE_World_FR_Chess_Championship_2019_-_Magnus_Carlsen_%28cropped%29.jpg",
  "https://static01.nyt.com/images/2020/12/19/arts/18kasparov-music-1/18kasparov-music-1-mediumSquareAt3X.jpg",
  "https://im.rediff.com/sports/2017/jul/21anand1.jpg",
];

var leftBtn=document.getElementById('left');
var rightBtn=document.getElementById('right');
var i=0;
var time=5000;
document.slider.src=wcChamps[i];
function setImage(){
document.slider.src=wcChamps[i];
}
// auto slide images without button click
function setImageTimer(){
  if(i<wcChamps.length-1)
  {
    i++;
  }
  else{
  i=0;
  }
  setImage();
  setTimeout("setImageTimer()", time);
}
// on loading windows setImageTimer gets called
window.onload=setImageTimer;

//slide images like <-<-<- on left button click
leftBtn.addEventListener("click",function () {
if(i<wcChamps.length-1)
{
  i++;
}
else{
i=0;
}
setImage();
});

// ->->->
rightBtn.addEventListener("click",function () {
  if(i>0)
  {
    i--;
  }
  else{
  i=wcChamps.length-1;
  }
  setImage();
});
