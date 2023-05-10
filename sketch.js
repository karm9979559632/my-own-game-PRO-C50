var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var gameState=0
var homescreen 

function preload(){
bgImg = loadImage("assets/bg.png")
homescreenImg= loadImage("assets/homescreen.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon1.png","assets/balloon1.png")
}

function setup(){
  
  createCanvas(1000, 600);
//background image
bg = createSprite(420,280,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
  if(gameState==0) {
    background(homescreenImg)
  }
  
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityX= -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityX+2;
   
        //drawSprites();
        
}
