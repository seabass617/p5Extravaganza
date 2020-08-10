//============================================
// Sketch File 
//============================================

let characterSize = 60;

function setup() {
	createCanvas (window.innerWidth, window.innerHeight);
	background(0);
	stream = new Stream();
	stream.generateCharacters();
	textSize(characterSize);
}
  
function draw() {
	background(0);
	stream.render();
}


class Stream {
	constructor(){
		this.characters = [];
		this.totalCharacters = round(random(5,30));
		this.speed = random(5,20);
	}

	generateCharacters(){
		let y = 0;
		let x = width / 2; 
		for (let i = 0; i <= this.totalCharacters; i++){
			let character = new Character(x, y, this.speed);
			character.setToRandomCharacter();
			this.characters.push(character);
			y -= characterSize;
		}
	}

	render(){
		this.characters.forEach(function(character) {
			fill(0,255,70);
			text(character.value, character.x, character.y);
			character.setToRandomCharacter();
			character.rain();
		});
	}
}


class Character {
	constructor(x, y, fall_speed){
		this.x = x;
		this.y = y;
		this.value;
		this.fall_speed = fall_speed;
		this.switchInterval = round(random(10,20));
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







