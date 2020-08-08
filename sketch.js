//============================================
// Sketch File 
//============================================
let canvas;
function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.style('z-index','-1');
  }
  
function draw() {
	background(0);
	strokeWeight(2);
	stroke(255);
  
	//first for loop is for the x's
	for (var x = 0; x <= width; x+=50){
		//for every x, do the following for every y
		for (var y = 0; y <= height; y+=50){
			//then execute this code based on that
			fill(random(255),0,random(255));
			ellipse(x,y,25,25);
		  }
	  }
	   
}






