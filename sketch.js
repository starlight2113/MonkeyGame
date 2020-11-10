//variables
var monkey,monkey_running;
var ground,groundImage;
var banana ,bananaImage;
var obstacle, obstacleImage;
var foodGroup, obstacleGroup
var score;
var survivalTime=0;


function preload(){
  //loads image to monkey,banana,obstacles
monkey_running = loadAnimation("sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
 bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
  //creates canvas
createCanvas(600,600);
  
  //creates monkey
  monkey=createSprite(50,400,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  monkey.depth=obstacle.depth;
  monkey.depth=monkey.depth;
    
  //creates ground
  ground = createSprite(200,400,600,10);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  console.log(ground.x);
  
  //score
  score=0;
}


function draw() {
  //paints background
  background("lightgreen");
 // repeats or scorlls the ground
  if (ground.x < 0){
    ground.x = ground.width/3;
  }
  //when the space is pressed the monkey should jump
  if(keyDown("space")&& monkey.y >= 100) {
    //velocity to the monkey when it jumps
    monkey.velocityY = -12;
  }
  //gravity for the monkey to bring it down 
  monkey.velocityY = monkey.velocityY + 0.8;              
  
  monkey.collide(ground);
  
    var select_banana = Math.round(random(1,4));
  if (World.frameCount % 80 == 0) {
    if (select_banana == 1) {
      banana();
    }
  }
  
  var select_obstacle = Math.round(random(1,4));
  if (World.frameCount % 80 == 0) {
    if (select_obstacle == 1) {
      obstacle();
    }
  }
  
  //helps the sprites to display in the game zone
  drawSprites();
  
  //the text "survival time" is displayed in the game zone
  fill("black");
  textSize(15);
  text("Score="+score,10,15);
  
  fill("black");
  textSize(15);
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SurvivalTime="+survivalTime,480,15);
  //functions
  banana();
  obstacle();
}


function banana() {
  //creates banana
  if(World.frameCount % 100===0) {
  var banana = createSprite(600,Math.round(random(120,200)),10,10);
  banana.addImage(bananaImage);
  banana.velocityX = -4;
  banana.lifetime = 200;
  banana.scale = 0.1;
  //foodGroup.add(banana);
  }
}


function obstacle() {
//creates obstacle
  if(World.frameCount % 300===0) {
  var obstacle = createSprite(600,Math.round(random(355,355)),10,10);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -4;
  obstacle.lifetime = 200;
  obstacle.scale = 0.2;
 // obstacleGroup.add(obstacle);
  }
}