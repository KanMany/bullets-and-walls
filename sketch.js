var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 10);
  bullet.shapeColor=color("white");
  thickness=random(1,200)
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)
  speed=random(1,100)
  weight=random(0.00032399455,0.0097198365)
  bullet.velocityX = speed;
}

function draw() {
  background(0); 
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/thickness*thickness*thickness;
    if(deformation>=10){
      wall.shapeColor=color("red");
    }
    if(deformation<10){
      wall.shapeColor=color("green");
    }
  }
  drawSprites();
}