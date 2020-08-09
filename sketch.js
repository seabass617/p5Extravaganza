//============================================
// Sketch File 
//============================================
let canvas;
let pos,target,vel,r,drag,strength,dragSlider,strengthSlider;
function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.style('z-index','-1');

	noStroke();
	
	r = 60;
	position = 0;
	//target is the position of where the mouse is 
	target = 0;
	velocity = 0;

	drag = .8;
	strength = 0.1;
  }
  
function draw() {
	background(0);

	target = mouseX;
	//position = mouseX;

	let force = target - position;
	force *= strength;
	
	velocity *= drag; 
	velocity += force;
	position += velocity; 

	//draw circle 
	fill(214,71,150);
	ellipse(position,windowHeight/2,r);
	
	   
}






