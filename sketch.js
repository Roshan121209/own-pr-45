var rocketShip, rocketShipImg,  backgroundImg, ufo, meteors, background1;

function preload () {
  backgroundImg = loadImage("space.jpg");
  rocketShipImg = loadImage("Rocket ship.png");
  ufo = loadImage("Ufo.png");
  meteors = loadImage("Metors.png");
}

function setup() {
  createCanvas(800, 400);

  background1 = createSprite(400,200, 800, 400);
  background1.addImage(backgroundImg);
  background1.velocityX = -5;

  rocketShip= createSprite(40,20, 50, 50);
  rocketShip.addImage(rocketShipImg);
  rocketShip.scale = 0.1
}

function draw() {
  background(220);

  if(background1.x < 0){
    background1.x = background1.width/8;
  }

  //code to create movements for the rocket ship.

  if (keyIsDown(DOWN_ARROW)){
    rocketShip.y = rocketShip.y + 5;
  }

  if (keyIsDown(UP_ARROW)){
    rocketShip.y = rocketShip.y - 5;
  }

  if (keyIsDown(RIGHT_ARROW)){
    rocketShip.x = rocketShip.x + 5;
  }

  drawSprites();

}