const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint                 
var engine, world;
var ball;
var ground;
var holder;
var chain;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(200,200);
    ground = new Ground(200,395,400,20)
    holder = new Ground(205,100,300,20)
chain = new Chain (ball.body,holder.body)
}

function draw(){
    background(0);
    Engine.update(engine);
    ball.display();
    ground.display();
    holder.display();
    chain.display();
}