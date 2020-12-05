var database,foodS,foodStock,dog,dogImage,dogHappyImg;

function preload()
{
  dogImage = loadImage("Dog.png");
  dogHappyImg= loadImage("happydog.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImage);
  dog.scale=0.2;

  var foodStock = database.ref('Food');
  foodStock.on("value",function(data){
    foodS= data.val();
  })
}


function draw() {  
background("pink");
 if(keyDown(UP_ARROW)){
   writeFood(foodS)
   dog.addImage(dogHappyImg);
 }
  drawSprites();
  textSize(30);
  fill("red");
  text("food remaining : "+foodS,150,100);
}

function writeFood(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food: x
  })
}



