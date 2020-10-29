var dustbin1,paper1,ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	dustbin1 = new Dustbin (1200,650);
	paper1 = new Paper (200,450,40)
	ground1 = new Ground (width/2,680,width,15)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  paper1.display();
  ground1.display();
  
drawSprites();
 
}

function keyPressed ()   {
  if (keyCode === UP_ARROW)  {
	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
  }
}

