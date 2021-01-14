/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;*/

//var engine;
//var  engine, world;
var bg1 ,girl, girlWalk, girlJump, girlDead;
var momImage , mom;
var ground,bg2,bg3,start,start1;
var obstacle1 ,obsc2,obstacle3,obstacle4,obstacle5,obstacle6,obstaclesGroup;
var gameState = "OP";
var lives = 3,life1,life2,life3,heartImg;

function preload(){
bg1 = loadImage("62.jpeg");
bg3 = loadImage("890.jpg");
heartImg = loadImage("heart.png");
start1 = loadImage("0.png");
obstacle2img = loadImage("Dead (2).png")
obstacle1 = loadImage("cactus.png");
obsc2 = loadImage("cactus.png");
obstacle3 = loadImage("cactus.png");
obstacle4 = loadImage("cactus.png");
obstacle5 = loadImage("cactus.png");
obstacle6 = loadImage("cactus.png");
girlWalk = loadAnimation("Run1.png","Run2.png","Run3.png","Run4.png",
"Run5.png","Run6.png","Run7.png","Run8.png");
girlJump = loadAnimation("Jump (1).png","Jump (2).png","Jump (3).png","Jump (4).png","Jump (5).png","Jump (6).png",
"Jump (7).png","Jump (8).png","Jump (9).png","Jump (10).png");
girlDead = loadAnimation("Dead (1).png","Dead (2).png","Dead (3).png","Dead (4).png","Dead (5).png","Dead (6).png",
"Dead (7).png","Dead (8).png","Dead (9).png","Dead (10).png")
}

function setup(){
    createCanvas(1000,350);
    /*engine = Engine.create();
    world = engine.world;*/
   
    
    bg2 = createSprite(0,174,1000,350);
    bg2.addImage('abc' ,bg1);
    bg2.velocityX = -5;
    //bg2.scale = 0.85
    girl = createSprite(70,260,20,20);
    girl.addAnimation("abc" ,girlWalk);
    girl.addAnimation("678",girlJump);
    girl.scale = 0.2;
    girl.debug = true;
    girl.setCollider("circle",0,0,225);

    ground = createSprite(350,340,1300,5);
    ground.visible = false
    
    start = createSprite(450,270,10,10);
    start.addImage("st" ,start1);
    start.scale = 0.1

    life1 = createSprite(900,30,10,10);
        life1.addImage('12334',heartImg);
        life1.scale = 0.05;
        life2 = createSprite(940,30,10,10);
        life2.addImage('234',heartImg);
        life2.scale = 0.05;
        life3 = createSprite(980,30,10,10);
        life3.addImage('905',heartImg);
        life3.scale = 0.05;
obstaclesGroup = new Group();
obstaclesGroup2 = new Group();
   /* if(frameCount % 60 === 0) {
        var obstacle = new Box(600,165,10,40);
        obstacle.debug = true;
        obstacle.velocityX = -(6 + 3*score/100);
        
        //generate random obstacles
        var rand = Math.round(random(1,6));
        switch(rand) {
          case 1: obstacle.addImage(obstacle1);
                  break;
          case 2: obstacle.addImage(obsc2);
                  break;
          case 3: obstacle.addImage(obstacle3);
                  break;
          case 4: obstacle.addImage(obstacle4);
                  break;
          case 5: obstacle.addImage(obstacle5);
                  break;
          case 6: obstacle.addImage(obstacle6);
                  break;
          default: break;

        }}*/
        //Engine.run(engine);
}


function draw(){
    background(bg3);
    if(gameState=="OP"){
        textSize(55);
        textFont('Impact');
        fill("#a8674d");
        text(" [  WILD WILD WEST  ]",250,80);
        textSize(22);
        textFont('Cambria');
        fill("black");
        text("There is an evil doer (not from earth) who wants to destroy all planets in the solar system, ",90,130)
       text("But only earth has the machine that can destroy all of them,",190,170);
         text("Unfortunately he has already acquired the device but it still has some time before it can detonate.",90,210);
         girl.visible = false;
         ground.visible = false;
         bg2.visible = false;
         life1.visible = false;
         life2.visible = false;
         life3.visible = false;
         if(mousePressedOver(start)){
             gameState="PLAY";
         }
    }
if(gameState=="PLAY"){
if(bg2.x <400){
    bg2.x = 600
}


if(keyDown("space") && girl.y >= 250){
    girl.velocityY = -12;
   girl.changeAnimation("678",girlJump);
}
if(girl.isTouching(ground)){
        girl.changeAnimation("abc",girlWalk)
}
girl.velocityY = girl.velocityY+0.8;
spawnObstacles();  
spawnObstacles2();

girl.collide(ground);
start.visible = false;
girl.visible = true;
         
         bg2.visible = true;
         life1.visible = true;
         life2.visible =true;
         life3.visible = true;
         girlCollide();
heartLives();
         /*if(obstaclesGroup.isTouching(girl)){
                 gameState = "END";
         }
         if(obstaclesGroup2.isTouching(girl)){
                gameState = "END";
        }*/
       
}

else if(gameState == "END"){

}
drawSprites();

}

function spawnObstacles() {
    if(frameCount % 90 === 0) {
     var obstacle = createSprite(680,300,50,50)
      //obstacle.debug = true;
      obstacle.velocityX = -5;
      
      //generate random obstacles
      var rand = Math.round(random(1,6));
      switch(rand) {
        case 1: obstacle.addImage(obstacle1);
                break;
        case 2: obstacle.addImage(obsc2);
                break;
        case 3: obstacle.addImage(obstacle3);
                break;
        case 4: obstacle.addImage(obstacle4);
                break;
        case 5: obstacle.addImage(obstacle5);
                break;
        case 6: obstacle.addImage(obstacle6);
                break;
        default: break;
      }
      
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.1;
      obstacle.lifetime = 300;
      obstacle.setCollider("circle",0,0,5);
      obstacle.debug = true;
      //add each obstacle to the group
      obstaclesGroup.add(obstacle);
    }
  }

  function spawnObstacles2() {
        if(frameCount % 250=== 0) {
          var obsc2 = createSprite(600,305,10,40);
          //obstacle.debug = true;
          obsc2.velocityX = -5;
          obsc2.addImage("obstacle2img",obstacle2img);
          obsc2.addAnimation('abcgirl',girlJump);
          if(obstaclesGroup2.isTouching(girl)){
                obsc2.changeAnimation('abcgirl',girlJump);
         }
          //generate random obstacles
          /*var rand = Math.round(random(1,6));
          switch(rand) {
            case 1: obstacle.addImage(obstacle1);
                    break;
            case 2: obstacle.addImage(obsc2);
                    break;
            case 3: obstacle.addImage(obstacle3);
                    break;
            case 4: obstacle.addImage(obstacle4);
                    break;
            case 5: obstacle.addImage(obstacle5);
                    break;
            case 6: obstacle.addImage(obstacle6);
                    break;
            default: break;
          }*/
          
          //assign scale and lifetime to the obstacle           
          obsc2.scale = 0.1;
          obsc2.lifetime = 300;
          obsc2.debug = true;
          //add each obstacle to the group
          obstaclesGroup2.add(obsc2);
          
        }
      }
function girlCollide(){
        if(obstaclesGroup.isTouching(girl)){
                lives = lives-1;
                obstaclesGroup.destroyEach();
        }
}
function heartLives() {
        if (lives == 2) {
          life1.visible = false;
        }
        if (lives == 1) {
                life1.visible = false;
          life2.visible = false;
        }
        if (lives == 0) {
       gameState = "END"
       life1.visible = false;
       life2.visible = false;
       life3.visible = false;
        }
      }
  /*async function Timer2(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
        var second = datetime.slice(17,19);
     
      if(second>=0){

      }
    }

    


    function heartLives() {
  if (lives == 2) {
    heart1.visible = false;
  }
  if (lives == 1) {
    heart2.visible = false;
  }
  if (lives == 0) {
    heart3.visible = false;
    ghost1.visible = false;
    ghost2.visible = false;
    ghost3.visible = false;
    ghost4.visible = false;
    pacman.visible = false;
    var over = createSprite(200, 200);
    over.setAnimation("Game Over");
    over.scale = 10;
  }
}
function ghostCollide() {
  if (ghost1.isTouching(pacman)) {
    lives = lives - 1;
    pacman.x = 20;
    pacman.y = 122;
    pacman.velocityX = 0;
    pacman.velocityY = 0;
     score1 = score1 - 100;
  }
  if (ghost2.isTouching(pacman)) {
    lives = lives - 1;
    pacman.x = 20;
    pacman.y = 122;
    pacman.velocityX = 0;
    pacman.velocityY = 0;
     score1 = score1 - 100;
  }
  if (ghost3.isTouching(pacman)) {
    lives = lives - 1;
    pacman.x = 20;
    pacman.y = 122;
    pacman.velocityX = 0;
    pacman.velocityY = 0;
     score1 = score1 - 100;
  }
  if (ghost4.isTouching(pacman)) {
    lives = lives - 1;
    pacman.x = 20;
    pacman.y = 122;
    pacman.velocityX = 0;
    pacman.velocityY = 0;
    score1 = score1 - 100; 
  }
}
*/