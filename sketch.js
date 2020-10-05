var Score;
var banana;
var bananaImage;
var foodGroup;
var obstacle;
var obstacleImage; 
var obstacleGroup;
var backImage; 
var player;
var playerImage;
var invisibleGround;
var background; 


function preload(){
backImage=loadImage("jungle2.jpg");
playerImage=
loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
bananaImage=loadImage("banana.png");
obstacleImage=loadImage("stone.png");
  
}

function setup(){
createCanvas(800,400);
background=createSprite(0,0,800,400);
background.addImage(backImage);
background.scale=1.5;
background.x=background.width/2;
background.velocityX=-4;

  
player=createSprite(100,340,20,50);
player.addAnimation("playerRunning",playerImage);
player.scale=0.08;

invisibleGround=createSprite(400,350,800,10);
invisibleGround.velocityX=-4;
invisibleGround.x=invisibleGround.width/2;
invisibleGround.visible=false;
  
foodGroup= new Group();
obstacleGroup= new Group();
  
Score=0;
}

 function draw(){
  
  
  if(invisibleGround.x<0){
  invisibleGround.x=invisibleGround.width/2; 
 
  }
  
  if(background.x<100){
  background.x=background.width/2;
  }
  
  if(foodGroup.isTouching(player)){
 
  foodGroup.destroyEach();
  Score=Score+2;
  }
  
   switch(Score){
    case 10:player.scale=0.12;
    break;
    case 20:player.scale=0.14;
    break;
    case 30:player.scale=0.16;
    break;
    case 40:player.scale=0.18;
    break;  
    default:break;
   }  
   
   
 
   
  if (keyDown("space")){
  player.velocityY=-12;
 
  }
   
   player.velocityY=player.velocityY+0.8; 
   player.collide(invisibleGround);  
   
  food();
  obstacle();
  
   
if (obstacleGroup.isTouching(player)){
player.scale=0.08;
}

  
drawSprites();

  stroke("white");
  textSize(20);
  fill("white");
  text("Score"+Score,500,50);
 
}

   
 

function food(){
if(frameCount%80===0){
var banana=createSprite(600,250,40,10);
banana.addImage(bananaImage);
banana.scale=0.05;
banana.y=random(120,200);
banana.velocityX=-5;
banana.lifetime=300;
player.depth=banana.depth+1;
foodGroup.add(banana);
}
}

function obstacle(){
if(frameCount%300==0){
var obstacle=createSprite(800,350,10,40);
obstacle.addImage(obstacleImage);
obstacle.scale=0.2;

obstacle.velocityX=-6;
obstacle.lifetime=300;
obstacleGroup.add(obstacle);
}
}


