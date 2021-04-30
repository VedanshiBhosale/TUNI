
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bird
var nest,bird1;
var ground,groundimg;
var tuni,nestimg;
var backgroundImg;
var bg = "2081864.png";

function preload()
{
	getbackgroundImg();
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(400,400,800,20)


	
	bird=new Bird(400,20,80,200)
	bird1=new Bird(200,40,20,20)
	nest=new Nest(800,300,5,10)
	Engine.run(engine);

}


function draw() {

  background(backgroundImg)
  Engine.update(engine);
  strokeWeight(1)
  bird.display();
 nest.display();
bird1.display();

 ground.display();
}



