const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, circleBody;

function setup(){
  createCanvas(600, 600)

  engine = Engine.create();
  world = engine.world;

  var circleOptions = {
    isStatic: false,
    restitution: 1
  }
  var groundOptions = {
    isStatic: true
  }
  ground = Bodies.rectangle(300, 575, 600, 50, groundOptions);
  circleBody = Bodies.circle(200, 200, 20, circleOptions);

  World.add(world, ground);
  World.add(world, circleBody);
}

function draw(){
  background(0);
  Engine.update(engine);
  rectMode(CENTER);

  rect(ground.position.x, ground.position.y, 600, 50);
  ellipse(circleBody.position.x, circleBody.position.y, 20);
}