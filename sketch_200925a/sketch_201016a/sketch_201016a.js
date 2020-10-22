let state = 0;

function setup(){
  createCanvas(500, 500);
}

function draw(){
  if(state == 0){
  background(255);
  noStroke();
  fill(0);
  ellipse(mouseX, mouseY, 50, 50);
}
  else{
    background(0);
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 50, 50);
  }
}

function mousePressed(){
   if( state == 0){
      state = 1;
   }
   else{
      state = 0;
   }
}
