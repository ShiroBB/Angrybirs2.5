const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object
var ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var object_options={
    isStatic:true
  }
  object=Bodies.rectangle(200,390,200,20,object_options);
  ball=Bodies.circle(200,100,20);
  World.add(world,object);
  World.add(world,ball);
  //  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,200,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,200,20,20);
  drawSprites();
}