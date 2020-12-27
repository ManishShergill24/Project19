var end = 0;
var startMenu = 1;
var chracterSelectMenu=2;
var howToPlayMenu = 3;
var play = 4;

var gameStates = startMenu;
var spaceship,spaceshipImage1,chracterSpaceShipSelect1;
var space,spaceImage;
var enemy,enemyImage;
var enemyGroup;
var startButton,startbuttonImage;

function preload(){

spaceImage = loadImage("Space.png");
enemyImage = loadImage("meteor.png")
spaceshipImage1 = loadImage("playerufo-1.png");
startbuttonImage = loadImage("startbuttonv2.png");

}

function setup(){
createCanvas(600,600);

  space = createSprite(300,300);
  space.addImage("backgroundImage",spaceImage);
  space.scale=1.5;

  spaceship = createSprite(100,300,10,10);
  spaceship.addImage("ufoPlayer",spaceshipImage1);
  spaceship.scale=0.3;
  spaceship.visible=false;

  startButton = createSprite(300,350,10,10);
  startButton.addImage(startbuttonImage);
  startButton.scale=0.3;
  startButton.visible=false;

  chracterSpaceShipSelect1 = createSprite(100,300,10,10);
  chracterSpaceShipSelect1.addImage("ufoPlayerSelected",spaceshipImage1);
  chracterSpaceShipSelect1.scale=0.3;
  chracterSpaceShipSelect1.visible= false;

  enemyGroup = new Group();
enemyGroup.debug=true;

}

function draw(){
  background("black");

if(gameStates === startMenu){
startButton.visible = true;

if(mousePressedOver(startButton)){
  gameStates = chracterSelectMenu;
}
}
console.log(gameStates);
if(gameStates === chracterSelectMenu){
startButton.visible = false;
space.visible=false;

chracterSpaceShipSelect1.visible=true;

textSize(20)
stroke("white")
text("Select A SpaceShip",200,150);
text("Coming Soon!",200,300);
text("Coming Soon!",400,300);

if(mousePressedOver(chracterSpaceShipSelect1)){

gameStates=howToPlayMenu;

}
}
if(gameStates === howToPlayMenu){
  
  textSize(15);
  stroke("white");
  text("you need to dodge all the astroids using the down arrow key and up arrow key",50,30);
  text("press space to start",50,60);


  chracterSpaceShipSelect1.visible=false;

  space.visible = false;

 if (keyDown("space")) {

  gameStates = play;

  }

}

if(gameStates === play){

  spawnObstacles();
  space.visible=true;
  chracterSpaceShipSelect1.visible=false;

  spaceship.visible=true;

  KeyPressed();


  if(spaceship.isTouching(enemyGroup)){

   gameStates = end;
  

  }

}

if(gameStates === end){

  space.visible=false;
  textSize(20);
  text("Thanks for Playing!, You did Great! :D",100,200);

}
  
drawSprites();
}

function spawnObstacles(){
  
  if(frameCount % 120 === 0){

   enemy = createSprite(600,Math.round(random(10,580)),10,10);
   enemy.addImage("meteorImage",enemyImage);
   enemy.scale = 0.2;
    enemy.velocityX = -4;
    enemyGroup.destroyEach=60;
   enemyGroup.add(enemy);
  }
  
}
function KeyPressed(){

if(keyDown(UP_ARROW)){

spaceship.y=spaceship.y-3;

}
if(keyDown(DOWN_ARROW)){

spaceship.y=spaceship.y+3;

}
}