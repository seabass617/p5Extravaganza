//===================================================
/* Bubble Class */
//===================================================
class Bubble { 
	/* Constructor instantiating x,y coordinates and radius. Also instansiates default brightness to zero */
	constructor(x,y,r = 50){
		this.x = x;
		this.y = y;
		this.r = r;
		this.brightness = 0;
	}

	/* Function which will change the color of the brightness of the bubble */
	changeColor(bright){
		this.brightness = bright; 
	}


	/* Instance function which returns a bool depending on whether or not 
	   you are hovering over a bubble */
	contains(canvas_x, canvas_y){
		let d = dist(canvas_x, canvas_y, this.x, this.y);
		if (d < this.r) {
			return true;
		} else {
			return false;
		}
	}
	
	/* Instance Function which will randomly move the bubble */
	move(){
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);
	}

	/* Instance Function which defines the appearance of the bubble */
	show(){
		stroke(255);
		strokeWeight(4);
		fill(this.brightness, 120);
		ellipse(this.x,this.y,this.r*2);

	}

	intersects(bubble){
		let d = dist(this.x, this.y, bubble.x, bubble.y);
		return d <  this.r + bubble.r;
	}
}
