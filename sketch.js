var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  game1 = createSprite(600, 800,80,30);
  game1.shapeColor = "green";
  game1.debug = true;
  game2 = createSprite(600, 700,80,30);
  game2.shapeColor = "green";
  game2.debug = true;
  
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
game1.x=mouseX
game1.y=mouseY
if (isTouching(game1,game2)){
  game1.shapeColor = "red";
  game2.shapeColor = "red";
}
else{
game1.shapeColor = "green";
  game2.shapeColor = "green";
}
  bounceOff(fixedRect,movingRect)
  drawSprites();
}

