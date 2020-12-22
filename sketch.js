var fixedRect, movingRect;
var car;
var wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(150,300,50,50);
  car.shapeColor = "blue";
  car.velocityX = 4;
  wall = createSprite(400,300,20,100);
  wall.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(car,wall)){
  car.shapeColor = "red";
  wall.shapeColor = "red";
}
else{
  car.shapeColor = "blue";
  wall.shapeColor = "yellow";
}
if(collide(car,wall)){
car.velocityX = 0;
}
else{
  car.velocityX = 4;
}

bounceOff(movingRect,fixedRect);
  drawSprites();
}
