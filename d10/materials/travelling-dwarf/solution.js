d.orient("right");

var x = 0;

while (x < 4) {
	d.move();
	x = x + 1;
}

d.orient("down");

var x = 4;
var y = 0;

while (y < 16) {
	d.move();
	y = y + 1
}

d.orient("right");

var x = 4;
var y = 16;

while (x < 10) {
	d.move();
	x = x + 1;
}

d.orient("up");

var x = 10;
var y = 16;

while (y > 5) {
	d.move();
	y = y - 1;
}

d.orient("right");

var x = 10;
var y = 5;

while (x < 16) {
	d.move();
	x = x + 1;
}

d.orient("down");

var x = 16;
var y = 5;

while (y < 14) {
	d.move()
	y = y + 1;
}

d.orient("right");

var x = 16;
var y = 14;

while (x < 18) {
	d.move()
	x = x + 1;
}
