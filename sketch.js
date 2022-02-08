var ball;
var myball,position,database;
function setup(){
    database=firebase.database();
    createCanvas(500,500);
myball = createSprite(250,250,10,10);
    myball.shapeColor = "red";
    var myballposition=database.ref("ball/position")
    myballposition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){
position=data.val()
myball.x=position.x
myball.y=position.y
}

function showError(){
    console.log("Error")
}

function writePosition(x,y){
database.ref("ball/position").set({
    x:position.x+x,
    y:position.y+y
})
}
