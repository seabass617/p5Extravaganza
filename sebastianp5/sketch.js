//creating an array to store my bubbles
let bubbles = []
//variable that controls the number of bubbles
let number_of_bubbles = 200;
let bubble; 

function setup() {
  createCanvas(windowWidth,windowHeight);
  //creating bubble instances with for loop
  for (let i = 0; i < number_of_bubbles; i++){
	  let x = random(width);
	  let y = random(height);
	  let r = random(10,100);
	  bubble = new Bubble(x,y,r);
	  bubbles.push(bubble);
  }
}

function draw() {
	background(0);
	//applying the functionality of move and show to each bubble
	
	for (let i = 0; i < bubbles.length; i++){
		bubbles[i].move();
		bubbles[i].show();
	  }


}

function mousePressed(){
	for (let i = 0; i < bubbles.length; i++){
	  bubbles[i].clicked(mouseX, mouseY);
	}
}





