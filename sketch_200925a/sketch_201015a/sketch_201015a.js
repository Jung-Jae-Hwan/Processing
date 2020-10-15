let size = 10;
noStroke();

function setup() {
  createCanvas(500, 500);
  noFill();


  for(let i=0; i<100; i+=25){
    for(let j=0; j<100; j+=20){
     let size = (random(1, 50));
      rect(i, j, size, size);
    }           
  }
}


function draw() {

}
