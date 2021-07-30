
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;
var n=0;

function preload(){
  bgImg = loadImage("bg.gif")
  Bgmusic = loadSound("bg.mp3");
  //boyImg = loadImage("boy.png")
  
  walk = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png");
  walk.playing=true;
  stickImg = loadImage("stick.jpeg")
  obstacle1 = loadAnimation("l1.png","l2.png","l3.png");
  obstacle2 = loadAnimation("b1.png","b2.png","b3.png","b4.png")
  obstacle3 = loadAnimation("p1.png","p2.png","p3.png")
  coinImg = loadImage("coin.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  bg= createSprite(windowWidth-1000,windowHeight-500);
  bgImg.resize(windowWidth+1100,windowHeight+100)
  bg.velocityX=6;
  bg.addImage(bgImg);

  boy = createSprite(100,560,90,180)
  boy.scale=1.0
  boy.velocityX=0.9
  //boy.velocityX=3
  boy.addAnimation('walking',walk);   
  button = createImg('cut_btn.png');
  button.position(20,30);
  button.size(50,50);
  button.mouseClicked
  obstaclesGroup = new Group();
}

function draw() 
{
  background(255)
  if (bg.x>width-300){
    bg.x=width/2;
  }
  Engine.update(engine);
  if(!Bgmusic.isPlaying()){
    Bgmusic.play();
    Bgmusic.setVolume(1.5);
  }

  fill("green");
  textAlign("center");
  textSize(40);
  text("WILD RUNNER", width / 2, 100);
  spawnObstacles();
  Coins();
  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 350 === 0) {
    var obstacle = createSprite(1200,560,10,40);
    obstacle.addAnimation("obst1",obstacle1)
    obstacle.addAnimation("obst2",obstacle2)
    obstacle.addAnimation("obst3",obstacle3)
    obstacle.scale=5.0;
    obstacle.velocityX=-2;
  
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
     case 1: obstacle.changeAnimation("obst1")
             //obstacle.scale=5.0;
             break;
             case 2: obstacle.changeAnimation("obst2")
             //obstacle.scale=5.0;
             break;
             case 3: obstacle.changeAnimation("obst3")
             //obstacle.scale=5.0;
             break;
     
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.9;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
function Coins() {
  if (frameCount % 200 == 0) {
  var coin = createSprite(Math.round(random(height-1500,width+900),40, 100, 10));
  coin.addImage(coinImg);
  coin.scale=0.1;
  coin.lifetime = 100;
  }
}
function stick(){
  
}