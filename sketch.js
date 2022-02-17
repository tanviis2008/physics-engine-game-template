const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1, box;
var ground, ground2, ground3, ground4, obstacle, obstacle2, obstacles;
var c1, c2, c3;
var flag=false

var engine, world, body;
var canJump;

var charges;

function setup() {
  //create the canvas
  createCanvas(1200,400);
  
  //setup
  engine = Engine.create();
  world = engine.world;
 
  //create boxes

  wall1 = new Ground(600, 390, 1200,20);
  wall2 = new Ground(600, 10, 1200,20);
  wall3 = new Ground(10, 200, 20,400);
  wall4 = new Ground(1190, 200, 20,400);
  wall5 = new Ground(90, 100, 20,80);
  wall6 = new Ground(500, 130, 800,20);
  wall7 = new Ground(900,160, 20,80);
  wall8 = new Ground(965, 200, 150,20);
  wall9 = new Ground(1050, 230, 20,80);
  wall10 = new Ground(985, 270, 150,20);
  wall11= new Ground(920, 280, 20,40);

  wall12 = new Ground(600, 70, 800,20);
  wall13= new Ground(1000, 100, 20,80);
  wall14= new Ground(1080,130, 150,20);
  wall15= new Ground(1060, 350, 160,20);
  wall16 = new Ground(1150, 240, 20,240);
  wall17 = new Ground(910, 290, 40,20);
  wall18= new Ground(800, 290, 80,20);


  wall19= new Ground(750, 290, 20,180);
  wall20= new Ground(710, 210, 70,20);
  wall21= new Ground(675, 245 , 20,90);

  wall22= new Ground(640, 290, 90,20);
  wall23= new Ground(605, 245, 20,90);
  wall24= new Ground(565, 210 , 90,20);
  wall25= new Ground(410, 245, 20,90);
  wall26= new Ground(455, 290, 110,20);
  wall27= new Ground(500, 260 , 20,40);

  wall28= new Ground(410, 245, 20,90);
  wall29= new Ground(480, 250, 20,20);
  wall30= new Ground(350, 210 , 100,20);
  wall31= new Ground(300, 245, 20,90);
  wall32= new Ground(320, 290, 60,20);
  wall33= new Ground(150, 210 , 150,20);
  wall34= new Ground(150, 300 , 150,20);
  wall35= new Ground(75, 255 , 20,110);
  
  wall36= new Ground(220, 326 , 20,70);
  wall37= new Ground(270, 350 , 80,20);
  wall38= new Ground(600, 320 , 130,20);
  wall39= new Ground(665, 345 , 20,70);
  
  box1=new Box(150,50,20,20)
  }
}

function draw() {
  //set the background
  background(50,50,55);  

  //update the engine
  Engine.update(engine);
   if(box1.body.position.x>530 && box1.body.position.y>350 &&box1.body.position.x<580 )
  {
    flag=true;
  }
  if(flag)
  {
    fill("white")
    textSize(25)
    text("You Won!!",600,50)
  }
  fill("white")
  textSize(25)
  text("Goal",540,360)
  //display ground

wall1.display()
wall2.display()
wall3.display()
wall4.display()
wall5.display()
wall6.display()
wall7.display()
wall8.display()
wall9.display()
wall10.display()
wall11.display()
wall12.display()
wall13.display()
wall14.display()
wall15.display()
wall16.display()
wall17.display()
wall18.display()
wall19.display()
wall20.display()
wall21.display()
wall22.display()
wall23.display()
wall24.display()
wall25.display()
wall26.display()
wall27.display()
wall28.display()
wall29.display()
wall30.display()
wall31.display()
wall32.display()
wall33.display()
wall34.display()
wall35.display()
wall36.display()
wall37.display()
wall38.display()
wall39.display()
box1.display()
}

function keyPressed(){
 if(keyCode === 39 ){
  
 
 }
 if(keyCode === 38 ){
  
 
 }
 if(keyCode === 37 ){
  
 
 }
}
