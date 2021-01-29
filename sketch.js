var end = 0;
var startMenu = 1;
var chracterSelectMenu=2;
var howToPlayMenu = 3;
var play1 = 4.1;
var play2 = 4.2;
var play3 = 4.3;


var gameStates = startMenu;
var spaceship,spaceshipImage1,chracterSpaceShipSelect1;
var space,spaceImage;
var enemy,enemyImage1,enemyImage2;
var enemyGroup;
var startButton,startbuttonImage;
var earthSprite,ufoSprite,MeteorSprite,bulletSprite;

function preload(){

spaceImage = loadImage("pictures/Space.png");
enemyImage1 = loadImage("pictures/meteor.png")
enemyImage2 = loadImage("pictures/playerufo-1 - Copy.png")
spaceshipImage1 = loadImage("pictures/playerufo-1.png");
startbuttonImage = loadImage("pictures/startbuttonv2.png");
bulletSpriteImg = loadAnimation("pictures/Misslep1.png","pictures/Misslep2.png","pictures/Misslep3.png","pictures/Misslep4last.png")

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

  chracterSpaceShipSelect1 = createSprite(300,300,10,10);
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

if(mousePressedOver(chracterSpaceShipSelect1)){

gameStates=howToPlayMenu;

}
}
if(gameStates === howToPlayMenu){
  
  textSize(15);
  fill("white");
  text("Story: The Earth, A Civilized Planet, is now in Danger! Help Us Protect ",50,30);
  text("Earth, Your Payment will be judged by how many UFO's You have destroyed",50,50);
  text("(every 100 points = $10)",50,70)
  text("Controls: W = Move Up",50,100)
  text("S = Move Down",115,120)
  text("A = Move Left",115,140)
  text("D = Move Right",115,160)
  text("Left Click on Mouse = Shoot Missiles/Bullets",115,180)


  chracterSpaceShipSelect1.visible=false;

  space.visible = false;

 if (keyDown("space")) {

  gameStates = play1;

  }

}

if(gameStates === play1){

  spawnObstacles();
  space.visible=true;
  chracterSpaceShipSelect1.visible=false;

  spaceship.visible=true;

  KeyPressed();


  if(spaceship.isTouching(enemyGroup)){

   //gameStates = end;
  

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
  
  if(frameCount % 120 === 0 && gameStates === play1){

    enemy = createSprite(600,Math.round(random(10,580)),10,10);
    var rand = Math.round(random(1,2))
    console.log(rand);
    switch (rand) {
      case 1:
        
        enemy.addImage("meteorImage",enemyImage1);

        break;
    
      default:  
      enemy.addImage("ufo",enemyImage2);
        break;
    }
   enemy.scale = 0.4;
    enemy.velocityX = -4;
    enemyGroup.destroyEach=60;
   enemyGroup.add(enemy);

  }
  
}
function KeyPressed(){

if(keyDown("w")){

spaceship.y=spaceship.y-3;

}
if(keyDown("s")){

spaceship.y=spaceship.y+3;

}
}
function keyPressed(){

//if(keyDown)




}