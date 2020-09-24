const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,370,50,50);
    box2 = new Box(600,370,50,50);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(700,370,50,50);
    log1 = new Log(700,320,250,PI);
    box3 = new Box(800,300,50,50);
    box4 = new Box(600,300,50,50);
    pig2 = new Pig(700,300,50,50);
    log2 = new Log(700,290,250,PI);
    box5 = new Box(700,270,50,50);
    log3 = new Log(640,250,100,PI/-3);
    log4 = new Log(760,250,100,PI/3);
    bird = new Bird(200,370);
}

function draw(){
    background(0);
    Engine.update(engine);
    bird.body.position.x=mouseX;
    bird.body.position.y=mouseY;
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}