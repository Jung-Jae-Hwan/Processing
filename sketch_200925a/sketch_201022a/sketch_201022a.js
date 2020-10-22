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
  else if(state == 1){
   background(155);
  noStroke();
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 50, 50);
  }
  else if(state==2){
    background(1);
    noStroke();
    fill(0, 0, 255);
    ellipse(mouseX, mouseY, 50, 50);
  }

}

function mousePressed(){
   if( state == 0){
      state = 1;
   }
   else if(state==1){
       state=2;
   }
   else if(state==2){
      state = 0;
   }
}
