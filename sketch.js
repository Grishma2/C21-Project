var wall, thickness;
var bullet, speed, weight;
var bulletRightEdge, wallLeftEdge;

function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(400,200,80,20);
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80);

  bullet.velocityX = speed;
}

function draw() {
  background(0); 
  
  if(collide(bullet,wall)) {
   
    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
    
    if(damage < 10) {
      wall.shapeColor = "green";
    }

    if(damage > 10) {
      wall.shapeColor = "red";
    }
  }

  drawSprites();
}
  



function collide(bullet,wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge) 
  {
    return true;
  }

  else {
    return false;
  }
  }

