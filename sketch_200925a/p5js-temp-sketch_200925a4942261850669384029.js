function setup() {
  createCanvas(500, 500);
  
  for(let i=0; i<500; i+=100){
    rect(i, 0, 100, 100);
    rect(0, i, 100,100);
  }
}


function draw() {

}
