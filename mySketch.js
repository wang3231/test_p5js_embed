let img1, img2;
let bouncingImage;
let switchDistance = 5; // 切換距
let backToTomato =240;
let r, g, b;
let x;
let y;

function preload() {
	img1 = loadImage('hanamichi tensai.png');
	img2 = loadImage('hanamichi tensai3.png');
}

function pickColor() {
	r = random(100, 255)
	g = random(100, 255)
	b = random(100, 255)
}

function setup() {
	createCanvas(800, 600);
	//	bouncingImage = new BouncingImage(random(width), random(height), img1);
	 bouncingImage = new BouncingImage(400, 240, img1);
	pickColor();
}

function draw() {
	background("#FFE8C0");

	bouncingImage.update();
	bouncingImage.display();

}

class BouncingImage {
	constructor(x, y, image) {
		this.x = x;
		this.y = y;
		this.image = image;
		this.xsize = 160;
		this.ysize = 120;
		this.xSpeed = 3;
		this.ySpeed = 4;
	}

	setImage(image) {
		this.image = image;
	}

	update() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;

		if (this.x <= 0 || this.x+this.xsize >= width) {
			this.xSpeed *= -1;
			pickColor();
		}

		if (this.y <= 0 || this.y+this.ysize >= height) {
			this.ySpeed *= -1;
			pickColor();
		}

		if (this.x <= switchDistance && this.y <= switchDistance || this.x+this.xsize >= width - switchDistance && this.y+this.ysize >= height - switchDistance || this.x <= switchDistance && this.y+this.ysize >= height - switchDistance || this.x+this.xsize >= width - switchDistance && this.y <= switchDistance) {
			this.setImage(img2);
		}

		// else {
		// 	cornerImage = false; // 如果不在角落，重置cornerImage
		// }

		if (this.x >= switchDistance + backToTomato && this.y >= switchDistance + backToTomato && this.x <= width - switchDistance - backToTomato && this.y <= height - switchDistance - backToTomato) {
			this.setImage(img1);
		}
	}

	display() {
		tint(r, g, b)
		//	image(this.image, this.x - this.xsize / 2, this.y - this.ysize / 2, this.xsize, this.ysize);
		image(this.image, this.x, this.y, this.xsize, this.ysize);
	}
}

function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}