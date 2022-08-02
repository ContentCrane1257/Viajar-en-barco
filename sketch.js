
var mar,barco
var marImg,barcoImg;


function preload(){
  
  marImg = loadImage("sea.png");
 barcoImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  
  createCanvas(400,200);

 mar = createSprite(200,100,10,10);
mar.addImage(marImg);
mar.scale=0.15;

barco = createSprite(150,100,30,30);
barco.addAnimation("correr",barcoImg);
barco.scale=0.2;
  
}

function draw() {
  background("black");

  drawSprites();
}