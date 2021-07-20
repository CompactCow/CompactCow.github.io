var w=220, h=184;
var dx = 150, dy = 150;
var interval = 50;
var intervalID;
function cow() {
var x=0, y=0;
var win = window.open('image.html', "",
      "width=" + w + ",height=" + h);
      x = (screen.width/2)-(w/2);
      y = (screen.height/2)-(h/2) - 55;
win.moveTo(x,y);

setTimeout(function () {
intervalID  = window.setInterval(function () { bounce() }, interval);
}, 2500);

function bounce() {
if (win.closed) {
    clearInterval(intervalID);
    return;
}

if ((x+dx > (screen.availWidth - w)) || (x+dx < 0)) dx = -dx;

if ((y+dy > (screen.availHeight - h)) || (y+dy < 0)) dy = -dy;

x += dx;
y += dy;

win.moveTo(x,y);
win.focus();
}

}

function xx() {
var audio = new Audio('https://padlet-uploads.storage.googleapis.com/919636439/e9c0aea7e265ecbacb615d0e8fdfde92/Cypis.mp3');
  setInterval(function () {
   audio.play();
    },1306)

cow();
}

var ii = 0;
window.onload = function () {
document.getElementById('c').onclick = xx;
setInterval(function () {
  if (ii == 0) {
    ii =1;
    document.getElementById('c').style.color = 'white';
  }
  else if (ii == 1) {
    ii = 0;
    document.getElementById('c').style.color = 'black';
  }

}, 5);
}
