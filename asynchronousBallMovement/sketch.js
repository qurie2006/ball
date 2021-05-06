var ball;
var database, position;

function setup(){
    database= firebase.database();
    console.log(database);
    createCanvas(500, 500);
    ball = createSprite(250, 250, 20, 20);
    ball.shapeColor= "white";
    var ballPosition= database.ref('ball/position');
    ballPosition.on("value" , readPosition, showError);
}

function draw(){
  background("black");
  if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
  }  
  else if(keyDown(RIGHT_ARROW)){
      writePosition(1, 0);
  }
   else if(keyDown(UP_ARROW)){
    writePosition(0, -1);
  }
  else if(keyDown(DOWN_ARROW)){
      writePosition(0,1);
  }

  drawSprites();
}

function changePosition(x, y){
ball.x = ball.x +x;
ball.y = ball.y +y;
}

function readPosition(data){
    position= data.val();
    ball.x= position.x;
    ball.y = position.y;
}

function writePosition(x,y){
    database.ref('ball/position').set({
    'x' : position.x +x,
    'y' : position.y +y
})
}