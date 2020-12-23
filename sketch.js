var bullet, wall
var speed, weight, thickness

function setup() {
  createCanvas(1600,400);
    speed = random(55, 90)
  weight = random(400, 1500)
  thickness = random(22, 83)
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = color("white")
  bullet.velocityX = speed;
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80)

}

function draw() {
  background(0);  
  
  
  var deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
  
  if(bullet.collide(wall)){
    
    if(deformation > 10){
      wall.shapeColor = color (255, 0, 0)
    }
    if(deformation < 10){
      wall.shapeColor = color(0, 255, 0)
    } 
  }

  drawSprites();
}