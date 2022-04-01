var jake, path ,coin,jake_,path_;

function preload(){
  //pre-load images
  jake_ = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.png","jake5.png");
  path_ = loadImage ("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 
  path = createSprite(200,200)
  path.addImage("path",path_)
  path.scale = 1.5;
  path.velocityY = 5;

  jake = createSprite (200,340,50,50);
  jake.addAnimation("walking",jake_);
  jake.scale =0.7

  boundary = createSprite (5,200,2,400)
  boundary2 = createSprite (398,200,1+1,400)

boundary.visible = false
boundary2.visible = false

}

function draw() {
  background(220);



if(path.y>700){
 path.y = path.width/2
}

  jake.x  = mouseX
 
 
  drawSprites();

}
