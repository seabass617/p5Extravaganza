//============================================
// Sketch File 
//============================================

let bubble1; 
let bubble2;

function setup() {
	createCanvas(windowWidth,windowHeight);
	bubble1= new Bubble(200,200,50);
	bubble2= new Bubble(300,200,50);

}

function draw() {
	background(0);

	if (bubble1.intersects(bubble2)) {
		background(200,0,100);
	}

	bubble1.show();
	bubble2.show();
	bubble1.move();
	bubble2.move();
}






