const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var ground;
var demo_ball;
var box1, box2, box3, box4, box5, box6, box7;
var guindaste;

function preload() {
    guindaste = loadImage('sprites/guindaste.png');
}

function setup() {
    createCanvas(1400, 800);
    engine = Engine.create();
    world = engine.world;

    var options = {
        isStatic: true,
    }
    ground = Bodies.rectangle(700, 800, 1400, 10, options);
    World.add(world, ground);

    var options_ball = {
        restitution: 1,
        density: 10,
        friction: 5
    }
    demo_ball = Bodies.circle(770, 700, 40, options_ball);
    World.add(world, demo_ball);

    box1 = new Box(1100, 780, 100, 80);
    box2 = new Box(1100, 700, 80, 70);
    box3 = new Box(1100, 620, 80, 70);
    box4 = new Box(1100, 540, 80, 80);
    box5 = new Box(1100, 460, 100, 70);
    box6 = new Box(1100, 380, 70, 70);
    box7 = new Box(1100, 300, 100, 100);

    sling_shot = new Slingshot(this.demo_ball, {x: 770, y:150});
}

function draw() {
    background('lightblue');
    Engine.update(engine);

    imageMode(CENTER);
    image(guindaste, 500, 400, 800, 800);

    push();
    rectMode(CENTER);
    strokeWeight(3);
    fill('#FA8072');
    rect(ground.position.x, ground.position.y, 1400, 10);
    pop();

    push()
    ellipseMode(CENTER);
    strokeWeight(3);
    stroke('black');
    fill('#363636');
    ellipse(demo_ball.position.x, demo_ball.position.y, 80, 80);
    pop()

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    sling_shot.display();
    //keyPressed();
}

function mouseDragged() {
    Matter.Body.applyForce(this.demo_ball, this.demo_ball.position, {x:-100, y:-55});
}