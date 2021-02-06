var canvas;
var music;
var box;
var srf1,srf2,srf3,srf4;
var edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    srf1 = createSprite(100,500,175,20);
    srf1.shapeColor = "red"
    srf2 = createSprite(300,500,175,20);
    srf2.shapeColor = "green"
    srf3 = createSprite(500,500,175,20);
    srf3.shapeColor = "blue"
    srf4 = createSprite(700,500,175,20);
    srf4.shapeColor = "black"

    //create box sprite and give velocity
    box = createSprite(random(20,750),400,20,20);
    box.shapeColor = "white" 
    box.velocityX = random(-10,10);
    box.velocityY = random(-10,10)
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);
    if (srf1.isTouching(box) && box.bounceOff(srf1)) {
        box.shapeColor = "red"        
    }
    if (srf2.isTouching(box) && box.bounceOff(srf2)) {
        box.shapeColor = "green"        
    }
    if (srf3.isTouching(box) && box.bounceOff(srf3)) {
        box.shapeColor = "blue"        
    }
    if (srf4.isTouching(box) && box.bounceOff(srf4)) {
        box.shapeColor = "black"        
    }
    

    //add condition to check if box touching surface and make it box
    drawSprites();
}