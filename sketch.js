var fixedRect, movingRect;

var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600,400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(100, 400, 80, 30);
  movingRect.shapeColor="green";
  movingRect.debug = true;
  
  gameObject1 =createSprite(100,100,50,50);
  gameObject1.shapeColor = "orange";

  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor = "orange";

  gameObject3 =createSprite(300,100,50,50);
  gameObject3.shapeColor = "orange";

  gameObject4 =createSprite(400,100,50,50);
  gameObject4.shapeColor = "orange";
  
  movingRect.velocityY = -5
  gameObject1.velocityY = 5
}

function draw() {
  background(0); 
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;
  
  bounceOff(movingRect,gameObject1);
  drawSprites();
}


/*if(isTouching(movingRect,gameObject2 )){
    gameObject2.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "blue";  
    gameObject2.shapeColor = "blue"; 
  }*/
  
  //console.log(movingRect.x-fixedRect.x)
  //console.log("width diff: " + fixedRect.width/2+movingRect.width/2)