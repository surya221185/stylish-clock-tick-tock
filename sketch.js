var  hours;
var minutes;
var seconds;
var hr;
var min;
var sec;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
   
}

function draw() {
  background(0);  
 
  translate(200,200);
  rotate(-90);
  hours=hour();
  minutes=minute();
  seconds=second();
 
  hr=map(hours%12,0,12,0,360);
  min=map(minutes,0,60,0,360);
  sec=map(seconds,0,60,0,360);
  
  push();
  rotate(sec);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(min);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  push();
  rotate(hr);
  stroke("green");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  stroke(255,0,255)
  point(0,0)
  strokeWeight(10)
  noFill();

  stroke("red");
  arc(0,0,300,300,0,sec);

  stroke("blue");
  arc(0,0,280,280,0,min);

  stroke("green");
  arc(0,0,260,260,0,hr);

  drawSprites();
}