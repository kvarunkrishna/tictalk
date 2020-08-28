var hr,mn,sc;

function preload(){
  soundFormats('mp3','ogg');
  tickSound = loadSound('Clock-Ticking-C-www.fesliyanstudios.com.mp3');
}

function setup() {
  createCanvas(1200,400);
}

function draw() {
  background(51,45,54);
  translate(width/2,200);
  rotate(-90);
  angleMode(DEGREES); 

   hr = hour();
   mn = minute();
   sc = second();
 
  strokeWeight(8);
  fill(color(0));
  stroke(255,0,0);

 scAngle = map(sc,0,60,0,360);
 arc(0,0,360,300,0,scAngle);

 stroke(0,255,0);
 mnAngle = map(mn,0,60,0,360);
 arc(0,0,340,280,0,mnAngle);
 
 stroke(0,0,255);
 hrAngle = map(hr % 12,0,12,0,360);
 arc(0,0,320,260,0,hrAngle);

 push();
 rotate(scAngle);
 stroke("red");
 line(0,0,100,0);
 pop();

 push();
 rotate(mnAngle);
 stroke(0,255,0);
 line(0,0,75,0);
 pop();

 push();
 rotate(hrAngle);
 stroke("blue");
 line(0,0,50,0);
 pop();

 stroke(255);
 point(0,0);
 
 rotate(90);
 noStroke();
 fill("red");
 textSize(15);
 text("press the spacebar to hear the clock ticking",-300,-170);
  
  drawSprites();
  
}
function keyPressed(){
  if(keyCode = 32) {
    tickSound.play();
  }
}
