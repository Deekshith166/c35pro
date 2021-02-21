var balloon;
var position;
var database;

function setup(){
    createCanvas(500,500);
    database= firebase.database();
    balloon = createSprite(250,250,10,10);
    balloon.shapeColor = "red";
    database.ref("balloon/position").on("value",readPosition);
}

function draw(){
    background("white");
    

    

    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("balloon/position").set({
        x : position.x+x,
        y : position.y+y
    })
     
}
function readPosition(data){
position=data.val();
balloon.x = position.x;
balloon.y = position.y}