var iss,issImg,spacecraft;
var hasDocked = false;
var bg, img1, img2, img3, img4;

function preload(){
bg = loadImage("spacebg.jpg");
img1 = loadImage("spacecraft1.png");
img2 = loadImage("spacecraft2.png");
img3 = loadImage("spacecraft3.png");
img4 = loadImage("spacecraft4.png");
issImg = loadImage("iss.png");
}

function setup() {
  
  createCanvas(1200, 600);
  
  spacecraft = createSprite(700,500)
  spacecraft.addImage(img1);
  spacecraft.scale = 0.34;
  
  iss = createSprite(600,260, 50, 50);
  iss.addImage(issImg);

}

function draw() {
  background(bg);  
  if(!hasDocked){
    spacecraft.position.x = spacecraft.position.x+random(3,-3);

    if(keyDown("LEFT")){
      spacecraft.position.x = spacecraft.position.x - 4;
      spacecraft.addImage(img3);
    }

    if(keyDown("RIGHT")){
      spacecraft.position.x = spacecraft.position.x + 4;
      spacecraft.addImage(img4);
    }

    if(keyDown("UP")){
      spacecraft.position.y = spacecraft.position.y - 4;
    }

    if(keyDown("DOWN")){
      spacecraft.addImage(img2);
      spacecraft.position.y = spacecraft.position.y + 4;
    }
    
  }
if(spacecraft.position.x <= (iss.y+270) && spacecraft.position.y <= (iss.x-30) ){
  hasDocked = true;
  fill("white");
  text("DOCKING SUCCESSFUL!",600,500)
  spacecraft.addImage(img2)
}
  drawSprites();
}