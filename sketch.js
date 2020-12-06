const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

const Constraint = Matter.Constraint;
var engine,world;

var d1,d1img,d2,d2img,d3,d3img,d4,d4img;
var t,t1,t2,t3,t4;
//wall in which ball is attached with constraint;
var holder,holder1,holder2,holder3,holder4;
var backimg;
function preload(){
d1img=loadAnimation("word-image-305.png")
backimg=loadImage("cimg.jpg")
d2img=loadImage("e.png")
d3img=loadImage("ato.png");
d4img=loadImage("q.png")
}
function setup(){
    var canvas=createCanvas(1000,600);
engine=Engine.create();
world=engine.world;

d1=createSprite(800,150,100,20)
d1.addAnimation("d1img",d1img)
d1.scale=0.3;
d2=createSprite(120,550,100,20)
d2.addAnimation("d2img",d2img)
d2.scale=0.3;

d3=createSprite(820,300,100,20)
d3.addAnimation("d3img",d3img)
d3.scale=0.3;

d4=createSprite(820,500,100,20)
d4.addAnimation("d4img",d4img)
d4.scale=0.2;

var ok={
    isStatic:true,
}

holder=Bodies.rectangle(500,50,600,20,ok);
World.add(world,holder);
t=Bodies.circle(500,50,60);
World.add(world,t);
var opt={
bodyA:t,
bodyB:holder,
stiffness:0.1,
length:300
}
var chain=Constraint.create(opt)
World.add(world,chain)


holder1=new box(400,50,20,02)
t1=Bodies.circle(400,90,60);
World.add(world,t1);
var a={
bodyA:t1,
bodyB:holder1.body,
stiffness:0.1,
length:300
}
var m=Constraint.create(a)
World.add(world,m)



    holder2=new box(300,50,20,02)
    t2=Bodies.circle(300,90,60);
    World.add(world,t2);
    var ta={
    bodyA:t2,
    bodyB:holder2.body,
    stiffness:0.1,
    length:300
    }
    var amri=Constraint.create(ta)
    World.add(world,amri)



holder3=new box(200,50,20,02)
t3=Bodies.circle(200,90,60);
World.add(world,t3);
var ri={
bodyA:t3,
bodyB:holder3.body,
stiffness:0.1,
length:300
}
var amta=Constraint.create(ri)
World.add(world,amta)   
   
holder4=new box(100,50,20,02)
t4=Bodies.circle(100,90,60);
World.add(world,t4);
var us={
bodyA:t4,
bodyB:holder4.body,
stiffness:0.1,
length:300
}
var ay=Constraint.create(us)
World.add(world,ay)   


}
function draw(){
    background(255)
    Engine.update(engine)
    
    holder1.display();
    holder2.display();
    holder3.display();
    holder4.display();
    strokeWeight(4);
    rectMode(CENTER)
    rect(holder.position.x,holder.position.y,1000,20);
    ellipseMode(RADIUS)
    ellipse(t.position.x,t.position.y,60)
    strokeWeight(4)
    line(t.position.x,t.position.y,holder.position.x,holder.position.y)


    ellipseMode(RADIUS)
    ellipse(t1.position.x,t1.position.y,60)
    strokeWeight(4)
    line(t1.position.x,t1.position.y,holder1.body.position.x,holder1.body.position.y)


    ellipseMode(RADIUS)
    ellipse(t2.position.x,t2.position.y,60)
    strokeWeight(4)
    line(t2.position.x,t2.position.y,holder2.body.position.x,holder2.body.position.y)


    ellipseMode(RADIUS)
    ellipse(t3.position.x,t3.position.y,60)
    strokeWeight(4)
    line(t3.position.x,t3.position.y,holder3.body.position.x,holder3.body.position.y);

    ellipseMode(RADIUS)
    ellipse(t4.position.x,t4.position.y,60)
    strokeWeight(4)
    line(t4.position.x,t4.position.y,holder4.body.position.x,holder4.body.position.y)
    Key();
drawSprites();
}
function Key(){
    if(keyWentDown("up")){
        Matter.Body.applyForce(t4,{x:t4.position.x,y:t4.position.y},{x:-1.1,y:4})
    }
}