
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bloco1
var bloco2
var bloco3
var chao

function preload()
{
	
}

function setup() {
	createCanvas(550, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var chao_options = {
		isStatic: true
	}

	chao= Bodies.rectangle(600,580,1200,2, chao_options)
	World.add(world,chao)

	var bloco1_options={
		restitution: 0.5,
		friction: 0.02,
		frictionAir:0
	}

	var bloco2_options={
		restitution: 0.7,
		friction: 0.01,
		frictionAir: 0.1
	}

	var bloco3_options={
		restitution: 0.01,
		friction: 1,
		frictionAir: 0.3

	}

	bloco1= Bodies.circle(220,10,10,bloco1_options)
	World.add(world,bloco1)

	bloco2= Bodies.rectangle(110,50,10,10, bloco2_options)
	World.add(world,bloco2)

	bloco3= Bodies.rectangle(350,50,10,10, bloco3_options)
	World.add(world,bloco3)

	

	fill("brown")
    rectMode(CENTER);

}


function draw() {
  
  background("lightgreen");
  

  Engine.update(engine);
  
  rect(chao.position.x,chao.position.y,1200)
  ellipse(bloco1.position.x,bloco1.position.y,30)
  rect(bloco2.position.x,bloco2.position.y,100,50)
  rect(bloco3.position.x,bloco3.position.y,50,50)
  

  
 
}



