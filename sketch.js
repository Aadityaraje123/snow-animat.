var bg2;
var snowflake;

var snowflakeImg;



function preload(){
  backgroundImg = loadImage("snow2.jpg")
  snowflakeImg = loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  snowflake = createSprite(400, 200, 50, 50);
  snowflake.addImage(snowflakeImg)
  snowflake.scale = 0.3
}

function draw() {
  
  background(backgroundImg);
  if(keyDown("UP_ARROW")){
    snowflake.y = snowflake.y-2;
  }  

  if(keyDown("LEFT_ARROW")){
    snowflake.x = snowflake.x-2;
  }  
  if(keyDown("DOWN_ARROW")){
    snowflake.y = snowflake.y+2;
  }  
  if(keyDown("RIGHT_ARROW")){
    snowflake.x = snowflake.x+2;
  }  
  drawSprites();
}
