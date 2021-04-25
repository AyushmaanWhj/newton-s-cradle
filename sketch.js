
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;



function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(200,600,50)
	bob2=new Bob(250,600,50)
	bob3=new Bob(300,600,50)
	bob4=new Bob(350,600,50)
	bob5=new Bob(400,600,50)


	roof=new Roof(300,300,300,20)


	rope1=new Rope(bob1,roof)
	rope2=new Rope(bob2,roof)
	rope3=new Rope(bob3,roof)
	rope4=new Rope(bob4,roof)
	rope5=new Rope(bob5,roof)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  
  roof.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  
  drawSprites();
 
}



