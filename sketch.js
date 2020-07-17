var bullet;
var wall;
var speed; 
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(120,321)
  weight=random(10,52)
  thickness= random(22,83)

  bullet= createSprite(50, 200, 50, 20);
  bullet.velocityX= speed;
  bullet.shapeColor= "white"

  wall= createSprite(1200,200,thickness,200);
  wall.shapeColor= color(80,80,80);

}

function draw() {
  background(0);  

  if (hasCollided(bullet,wall)) {
    bullet.velocityX= 0;
    var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness
    if (damage > 10) {
      wall.shapeColor= "red";
     // bullet.x= wall.x - (wall.width/2 + bullet.width/2) 
    }
    if (damage < 10) {
      wall.shapeColor= "green";
     // bullet.x= wall.x - (wall.width/2 + bullet.width/2) 
    }
  }

  drawSprites();
}

function hasCollided(lbullet,lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true
  } else {
  return false;
  }
}