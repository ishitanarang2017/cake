var cake , cakeImage;
function preload(){
  cakeImage = loadImage("cake.jpg");
}
function setup() {
  createCanvas(1000,800);
 cake = createSprite(400,400,600,600);
 cake.addImage(cakeImage);
}

function draw() {
  background(255,255,255);  
  
  drawSprites();
}
