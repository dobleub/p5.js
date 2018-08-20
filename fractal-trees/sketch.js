var angle = 0;
var rndLen = 1;
var rndAng = 1;
var slider;

function setup() {
	createCanvas(400, 400);

	angle = 0;
	slider = createSlider(0, TWO_PI, PI/4, 0.01);
	resetTreeButton = createButton('reset');
	resetTreeButton.mousePressed(resetTree);
	resetTree();
}

function draw() {
	background(51);
	stroke(255);
	// to canvas origin
	translate(200, height);
	branch(100, 1);
}

function branch(len, step) {
	// draw initial branch
	line(0, 0, 0, -len);
	translate(0, -len);
	angle = slider.value();

	if (len > 4) {
		// save current state
		push();
		rotate(angle*rndAng);
		branch(len*((len-step)/100)*rndLen, step+1);
		pop();
		// back to last state
		// save current state
		push();
		rotate(-angle*rndAng);
		branch(len*((len-step)/100)*rndLen, step+1);
		pop();
		// back to last state
	}
}

function resetTree() {
	rndAng = Math.random()+0.3;
	rndLen = Math.random()+0.3;
}