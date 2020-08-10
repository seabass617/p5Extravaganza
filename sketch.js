//============================================
// Sketch File 
//============================================

let characterSize = 45;
let streams = [];

function setup() {
	createCanvas (window.innerWidth, window.innerHeight);
	background(0);
	let x = 0;

	for (let i = 0; i <= width / characterSize; i++){
		let stream = new Stream();
		stream.generateCharacters(x, random(-1000,0));
		streams.push(stream);
		x += characterSize;
	}
	textSize(characterSize);
}
  
function draw() {
	background(0, 125);
	streams.forEach(function(stream){
		stream.render();
	});
}


class Stream {
	constructor(speed){
		this.characters = [];
		this.totalCharacters = round(random(5,20)); //<----- Total Characters
		this.speed = random(5,10); //<------ Fall Speed
	}

	generateCharacters(x, y){
		let first = round(random(0,4)) == 1; //<<-------- Coding coin toss! 
		for (let i = 0; i <= this.totalCharacters; i++){
			let character = new Character(x, y, this.speed, first);
			character.setToRandomCharacter();
			this.characters.push(character);
			y -= characterSize;
			first = false;
		}
	}

	render(){
		this.characters.forEach(function(character) {
			if (character.first) {
				fill(180,255,180);
			}else {
				fill(0,255,70);
			}
			text(character.value, character.x, character.y);
			character.setToRandomCharacter();
			character.rain();
		});
	}
}


class Character {
	constructor(x, y, fall_speed, first){
		this.x = x;
		this.y = y;
		this.value;
		this.fall_speed = fall_speed;
		this.switchInterval = round(random(10,20));
		this.first = first;
	}

	setToRandomCharacter(){
		if (frameCount % this.switchInterval == 0){
			this.value  = String.fromCharCode(
				0x30A0 + round(random(0, 96))
			); 
		}
	}

	rain(){
		this.y = (this.y >= height) ? 0 : this.y += this.fall_speed;
	}
}







