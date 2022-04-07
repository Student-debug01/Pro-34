
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;

var apple1,apple2,apple3,apple4,apple5,apple6,apple7,apple8,apple9,apple10,apple11,apple12;

var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	apple1=new apple(1100,100,30);
  apple2=new apple(1170,130,30);
	apple3=new apple(1010,140,30);
	apple4=new apple(1000,70,30);
  apple5=new apple(1100,70,30);
	apple6=new apple(1000,230,30);
	apple7=new apple(900,230,25);
	apple8=new apple(1140,150,25);
	apple9=new apple(1100,230,25);
	apple10=new apple(1200,200,25);
	apple11=new apple(1120,50,25);
	apple12=new apple(900,160,25);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})

	
	Engine.run(engine);

}

function draw() {

  background(230);
  //frameRate(2)
 // Engine.update(engine)
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  //Engine.update(engine)
  

  treeObj.display();
  stoneObj.display();
  apple1.display();
  apple2.display();
  apple3.display();
  apple4.display();
  apple6.display();
  apple7.display();
  apple8.display();
  apple9.display();
  apple10.display();
  apple11.display();
  apple12.display();
  stoneObj.display();

  groundObject.display();
  launcherObject.display();
  detectollision(stoneObj,apple1);
  detectollision(stoneObj,apple2);
  detectollision(stoneObj,apple3);
  detectollision(stoneObj,apple4);
  detectollision(stoneObj,apple5);
  detectollision(stoneObj,apple6);
  detectollision(stoneObj,apple7);
  detectollision(stoneObj,apple8);
  detectollision(stoneObj,apple9);
  detectollision(stoneObj,apple10);
  detectollision(stoneObj,apple11);
  detectollision(stoneObj,apple12);
}

function mouseDragged()
{
	//Matter.Body.setPosition(stoneObj.body) 
  //Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
  //Matter.Body.setPosition(stoneObj.body, {x:mousex, y:mousey}) 
  //Matter.Body.setPosition(stoneObj.body, {x:mouse, y:mouse}) 
}

function mouseReleased()
{
//	launcherObject.fly();
 //	launcherobject.fly();
 //	launcherObject.fly;  
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lapple){
	
  appleBodyPosition=lapple.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, appleBodyPosition.x, appleBodyPosition.y)
 
  	if(distance<=lapple.r+lstone.r)
    {
    
  	  Matter.Body.setStatic(lapple.body,false);
    }

  }