
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper1,dustbin1, ground1;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(200,450,70);
  dustbin1 = new Dustbin(1200,650);
  ground1 = new Ground(width/2,670,width,20);
  var render = Render.create({
    element:document.body,
    engine:engine,
    options:{
      width:1600,
      height:700,
      wireframes:false
    }
  });
	Engine.run(engine);
  Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper1.display();
  dustbin1.display();
  ground1.display();
 
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:145,y:-135});
  }
}

