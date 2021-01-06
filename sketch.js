const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var g1,g2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var hexa;
var launch;
function preload()
{
	
}

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;

    g1 = new Ground(300,600,200,20);
    g2 = new Ground(600,400,160,20);
    b1 = new Box(300,530,50,50);
    hexa = new Bird(100,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  g1.display();
  g2.display();
  b1.display();
  hexa.display();
  
 
}
function mouseDragged() {
    Matter.Body.setPosition(hexa.body,{x:mouseX,y:mouseY})    
}
//function mouseReleased() {
 //  launch.fly();
  //}



