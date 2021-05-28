const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;

var ground, ball;

var world, engine;

function setup() {
  createCanvas(800,400);

  engine=Engine.create()
  world=engine.world;
  
  var options={
    isStatic: true
  }

  var ballOptions={
    restitution: 0.4
  }

  ground=Bodies.rectangle(400,370,800,30, options)

  World.add(world,ground)


ball=Bodies.circle(400,100,30, ballOptions);


World.add(world,ball)

}

function draw() {
  background("green");


  Engine.update(engine)

  rectMode(CENTER)
  fill("red");
  rect(ground.position.x, ground.position.y, 800,30);

  fill("blue");
  ellipseMode(
    RADIUS
  )

    ellipse(ball.position.x,ball.position.y, 30,30);




  console.log(ground);

}