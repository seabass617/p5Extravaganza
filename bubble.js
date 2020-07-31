//Here we created the setup for a Bubble class
class Bubble { 
	constructor(x,y,r){
		this.x = x;
		this.y = y;
		this.r = r;
		this.brightness = 0;
	}

	clicked(canvas_x, canvas_y){
		let d = dist(canvas_x, canvas_y, this.x, this.y);
		if (d < this.r) {
			this.brightness = 255;
		}

	}
	// notice that you don't have to say function in order 
	//to declare this functionality. Also, note that you 
	//have to refer to your variable as this.__
	move(){
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);
	}

	show(){
		stroke(255);
		strokeWeight(4);
		fill(this.brightness, 120);
		ellipse(this.x,this.y,this.r*2);

	}
}
