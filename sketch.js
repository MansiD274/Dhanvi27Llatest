//edited
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var block1,block2,block3;
var block1s,block2s,block3s;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(720,675);
	bob2 = new Bob(760,675);
	bob3 = new Bob(800,675);
	bob4 = new Bob(840,675);
	bob5 = new Bob(880,675);
	ground = new Ground(800,175,250,25);
	rope1 = new Rope(bob1.body,ground.body,-80, 0);
	/*rope2 = new Rope(bob2.body,ground.body,-85, 0);
	rope3 = new Rope(bob3.body,ground.body,0, 0);
	rope4 = new Rope(bob4.body,ground.body,85, 0);
	rope5 = new Rope(bob5.body,ground.body,85*2, 0);*/


	 /*block2s=createSprite(92, 387, 25, 400);
	block2s.shapeColor=color("lightBlue")

	block2 = Bodies.rectangle(92, 387, 25, 400 , {isStatic:true} );
	 World.add(world, block2);
	 
	 block3s=createSprite(668, 387, 25, 400);
	 block3s.shapeColor=color("lightBlue")
 
	 block3 = Bodies.rectangle(668, 387, 25, 400 , {isStatic:true} );
	  World.add(world, block3);*/





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  rope1.display();
  /*rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();*/

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-50});
	}
}




