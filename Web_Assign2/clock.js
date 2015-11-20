
var canvas = document.getElementById("canvas");
var myclock = canvas.getContext("2d");
var clockRadius = canvas.height / 2;
myclock.translate(clockRadius, clockRadius);
clockRadius = clockRadius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  draw(myclock, clockRadius);
  drawTime(myclock, clockRadius);
}

function draw(myclock, clockRadius) {
  var ang;
  var num;
  
  myclock.beginPath();
  myclock.arc(0, 0, clockRadius, 0, 2*Math.PI);
  myclock.fillStyle = 'white';
  myclock.fill();
  myclock.strokeStyle = "#e74c3c";
  myclock.lineWidth = clockRadius*0.1;
  myclock.stroke();
  myclock.beginPath();
  myclock.arc(0, 0, clockRadius*0.1, 0, 2*Math.PI);
  myclock.fillStyle = '#333';
  myclock.fill();
  
  myclock.font = clockRadius*0.10 + "px consolas";
  myclock.textBaseline="middle";
  myclock.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    myclock.rotate(ang);
    myclock.translate(0, -clockRadius*0.85);
    myclock.rotate(-ang);
    myclock.fillText(num.toString(), 0, 0);
    myclock.rotate(ang);
    myclock.translate(0, clockRadius*0.85);
    myclock.rotate(-ang);
  }
}

function drawTime(myclock, clockRadius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(myclock, hour, clockRadius*0.5, clockRadius*0.07);
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(myclock, minute, clockRadius*0.6, clockRadius*0.07);
    second=(second*Math.PI/30);
    drawHand(myclock, second, clockRadius*0.8, clockRadius*0.02);
}

function drawHand(myclock, pos, length, width) {
    myclock.beginPath();
    myclock.lineWidth = width;
    myclock.lineCap = "round";
    myclock.moveTo(0,0);
    myclock.rotate(pos);
    myclock.lineTo(0, -length);
    myclock.stroke();
    myclock.rotate(-pos);
}