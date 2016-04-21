/* var base = "this is in f1 in the global namespace";
var x = "x in the global namespace";
 var f2 = function() {
    console.log("this is f2");
}

var f1 = {
    x : "something in the f1 namespace",
    f2 : f2,
    f: function() {
	console.log("this is in f in the namespace");
	console.log("x is " + x );
	console.log("f1.x is " + f1.x)
	console.log("better way: " + this.x);
    }
};

*/
/*
var inc = function() {
    var x = 0;
    return function() {
	x = x + 1;
	return x;
    }
}
*/
/*
var add3 = makeAdder(3);
add3(7) = 10
*/

/*
var makeAdder = function(n) {
//    var x = 0;
    return function(x) {
	return x + n
//	console.log(n);
//	x = x + n;
//	return x;
    }
}
*/

var c = document.getElementById( "sandbox" );
var ctx = c.getContext("2d")

ctx.fillStyle = "#66cccc";
ctx.fillRect( 0, 0, 500, 500 );

/*var x = 250;
var y = 250;
var right = true;
var up = true;
var moving = true; */

var logo = new Image()
logo.src = "logo_dvd.jpg";


//It's like a class structure for DVD logos
var makeLocation = function() {
/*    var get = function() { //different lexicographical organization
	return i;
	}*/
    return {
	x: 250, //default location
	y: 250,
	right = true,
	up = true,
	moving = true,
	speed = 1,
	goUp:function() { y + speed },
	goDown:function() { y - speed },
	goRight:function() { x + speed },
	goLeft:function() { x - speed },
	setx:function(s) { this.x = s },
	sety:function(s) { this.y = s }
    }
}
/*
a = makeCounter();
a.set(5);
*/

dvd = makeLocation();


var clear = function(){
    console.log("clear");
    
    ctx.fillStyle = "#66cccc";
    ctx.fillRect( 0, 0, 500, 500 );
    
    ctx.fillStyle = "#00868B";
};

function go() {
    if(requestId) {
	if( dvd.x = 0 || dvd.x == 400 )
	    right = !right;
	if( dvd.y == 0 || dvd.y == 450 )
	    down = !down;
	
	if( moving ) {
	    if( dvd.right )
		goRight;
	    else
		goLeft;
	    if( dvd.up )
		goUp;
	    else
		goDown;
	}
	
	clear();
	ctx.drawImage( logo, dvd.x, dvd.y, 100, 50 );
	
	requestId = window.requestAnimationFrame( go );	
	
    }
}

function stop() {
    if(requestId) {
	window.cancelAnimationFrame( requestId );
	requestId = undefined;
	
    }
}

c.addEventListener( "click", go );

var stopBtn = document.getElementById( "stop" );
stopBtn.addEventListener( "click", stop );
