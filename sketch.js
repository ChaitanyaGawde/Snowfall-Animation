const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bg
var backgroundImg;
var flakes= []

var bg = "snow2.jpg";
var girl
var girl_png

var edges;
function preload() {
girl_png =loadImage('s278_1nog_191205.jpg')
backgroundImg = loadImage(bg);


}

function setup() {
  createCanvas(800,400)
  engine = Engine.create();
  world = engine.world;
girl =  createSprite(400, 270, 50, 50);
girl.addImage(girl_png)
girl.scale = 0.05;
girl.velocityX=2; 
edges = createEdgeSprites()
console.log(edges)

}

function draw() {
  if(backgroundImg)
     background(backgroundImg);
Engine.update(engine)
     
girl.bounceOff(edges[0])
girl.bounceOff(edges[1])

if(frameCount%60===0){
  flakes.push(new Snow(random(0, 800), 10,random(5,15), 60,30));
 
}

for (var j = 0; j < flakes.length; j++) {

  flakes[j].display();
  
}

  drawSprites();
}