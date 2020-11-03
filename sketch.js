var frect,mrect;

function setup() {
  createCanvas(800,400);
  frect = createSprite(200, 200, 50, 50);
  mrect = createSprite(500, 200, 50, 100);
}

function draw() {
  background("pink"); 
  mrect.x= mouseX;
  mrect.y= mouseY;
  //if(mrect.isTouching(frect))
  if((mrect.x - frect.x < mrect.width/2 +frect.width/2)&&
  (frect.x - mrect.x < frect.width/2 +mrect.width/2)&&
  (mrect.y - frect.y < mrect.height/2 +frect.height/2)&&
  (frect.y - mrect.y < mrect.height/2 +frect.height/2))
  {
    mrect.shapeColor ="red";
    frect.shapeColor ="red";
  }
  else{
    mrect.shapeColor ="green";
    frect.shapeColor ="green";
  }
  drawSprites();
}