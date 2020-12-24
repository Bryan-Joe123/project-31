const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinkosList=[];
var particleList=[];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1=new ground(width/2,height,width,20);

  div0=new ground(width/6*0,(height)-(height/2),15,height);
  div1=new ground(width/6*1,(height)-(height/6),15,height/3);
  div2=new ground(width/6*2,(height)-(height/6),15,height/3);
  div3=new ground(width/6*3,(height)-(height/6),15,height/3);
  div4=new ground(width/6*4,(height)-(height/6),15,height/3);
  div5=new ground(width/6*5,(height)-(height/6),15,height/3);
  div6=new ground(width/6*6,(height)-(height/2),15,height);

  for(var j = 40; j<width; j+=50){
    plinkosList.push(new plinkos(j,75,10))
  }
  for(var j = 15; j<width-10; j+=50){
    plinkosList.push(new plinkos(j,175,10))
  }
  for(var j = 40; j<width; j+=50){
    plinkosList.push(new plinkos(j,275,10))
  }
  for(var j = 15; j<width-10; j+=50){
    plinkosList.push(new plinkos(j,375,10))
  }
  for(var j = 40; j<width; j+=50){
    plinkosList.push(new plinkos(j,475,10))
  }
}

function draw() {
  background(70, 70, 70);
  Engine.update(engine);

  ground1.display();

  div0.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();

  if(frameCount%90==0){
    particleList.push(new particle(random(220,260),-20,10));
  }

  for(var j = 0; j<particleList.length; j++){
    particleList[j].display();
  }

  for(var j = 0; j<plinkosList.length; j++){
    plinkosList[j].display();
  }

  drawSprites();
}