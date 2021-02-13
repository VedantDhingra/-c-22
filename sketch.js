//nickNames = namespacing
const Engine = Matter.Engine,
      World = Matter.World,
      Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
//var object;


function setup() {
  createCanvas(400,400);
  //mandatory steps
  engine = Engine.create();
  world = engine.world;

  var ground_option= {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,20,ground_option)
  World.add(world,ground);
 // createSprite(400, 200, 50, 50);
 console.log(ground.position.x);

 var ball_options = {
   restitution: 1.0
 }

 ball = Bodies.circle(200,100,20,ball_options)
 World.add(world,ball);
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}
