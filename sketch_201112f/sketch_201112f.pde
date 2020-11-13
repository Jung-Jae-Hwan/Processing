int o = 60;
int x[] = new int[o];
int y[] = new int[o];

void setup(){
   size(1280,1280);
 smooth();
 noStroke();
}

void draw(){
  background(0);
  for(int i = x. length-1; i>0; i--){
    x[i] = x[i-1];
    y[i] = y[i-1];
  }
  x[0] = mouseX;
  y[0] = mouseY;
  for(int i =0; i<x. length; i++){
    fill(i*random(0), random(255), random(0));
   ellipse(x[i], y[i], 40, 40); 
}
}
