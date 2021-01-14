var fixedRect, movingRect;
var m1Rect, m2Rect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  m1Rect = createSprite(100,100,80,30);
  m1Rect.shapeColor = "blue";
  m1Rect.debug = true;
m1Rect.velocityY=3;

m2Rect = createSprite(100,700,80,30);
  m2Rect.shapeColor = "pink";
  m2Rect.debug = true;
 m2Rect.velocityY=-3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  if(m1Rect.x-m2Rect.x< m2Rect.width/2 + m1Rect.width/2 && m2Rect.x-m1Rect.x< m2Rect.width/2 +m1Rect.width/2){
    m2Rect.velocityX=m2Rect.velocityX*(-1)

    m1Rect.velocityX = m1Rect.velocityX*(-1)
  }
if(m1Rect.y-m2Rect.y< m2Rect.height/2 + m1Rect.height/2 && m2Rect.y-m1Rect.y< m2Rect.height/2 + m1Rect.height/2){
  m2Rect.velocityY=m2Rect.velocityY*(-1)

  m1Rect.velocityY = m1Rect.velocityY*(-1)
}
  
  drawSprites();
}