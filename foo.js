/* Project 3 by Samuel Zhang and Jeffrey Zou
*  SoftDev2 p3
*  04-22-2016
*/

var c = document.getElementById( "sandbox" );
var ctx = c.getContext("2d");
var requestId;

ctx.fillStyle = "#66cccc";
ctx.fillRect( 0, 0, 500, 500 );

var logo = new Image();
logo.src = "logo_dvd.jpg";

//It's like a class structure for DVD logos
var makeLocation = function() {
/*    var get = function() { //different lexicographical organization
	return i;
	}*/
    return {
	x: 250, //default location
	y: 250,
	right: true,
	up: true,
	speed: 1,
	setx:function(s) { this.x = s },
	sety:function(s) { this.y = s },
	goUp: function(){this.y = this.y + this.speed;},
	goDown: function(){this.y = this.y - this.speed;},
	goRight: function(){this.x = this.x + this.speed;},
	goLeft: function(){this.x = this.x - this.speed;},
    }
};

var index = 0;
var arrayOfDvds = new Array();
var dvd = arrayOfDvds[ index ];
    
var clear = function(){
    ctx.fillStyle = "#66cccc";
    ctx.fillRect( 0, 0, 500, 500 );
    ctx.fillStyle = "#00868B";
};

function go() {
    window.cancelAnimationFrame( requestId );

    dvd = arrayOfDvds[ index ];
    console.log( index );
    console.log( dvd );

    if( dvd.x <= 0 || dvd.x >= 400 )
	    dvd.right = !dvd.right;
    
    if( dvd.y <= 0 || dvd.y >= 450 ) 
	dvd.up = !dvd.up;
    

    if( dvd.right ) 
	dvd.setx(dvd.x + dvd.speed);
    
    else 
	dvd.setx(dvd.x - dvd.speed);
    
    if( dvd.up ) 
	dvd.sety(dvd.y + dvd.speed);
    
    else 
	dvd.sety(dvd.y - dvd.speed);
    
//    console.log(dvd.speed);
    //    console.log( dvd.x );
  //  console.log( dvd.y );
    clear();
    if( index < arrayOfDvds.length - 1)
	index++;
    else
	index = 0;
    
    ctx.drawImage( logo, dvd.x, dvd.y, 100, 50 );
    requestId = window.requestAnimationFrame( go );
}

function stop() {
    if(requestId) {
	window.cancelAnimationFrame( requestId );
	requestId = undefined;
    }
}

function faster() {
    if(requestId) {
	dvd.speed++;
    }
}

function slower() {
    if(requestId) {
	if( dvd.speed > 1 )
	    dvd.speed--;
    }
}

function birth() {
    var newDvd = makeLocation();
    arrayOfDvds.push( newDvd );
    console.log( arrayOfDvds );
}

var move = document.getElementById('go')
move.addEventListener( "click", go );

var stopBtn = document.getElementById( "stop" );
stopBtn.addEventListener( "click", stop );

var fasterBtn = document.getElementById( "faster" );
fasterBtn.addEventListener( "click", faster );

var slowerBtn = document.getElementById( "slower" );
slowerBtn.addEventListener( "click", slower );

var birthBtn = document.getElementById( "birth" );
birthBtn.addEventListener( "click", birth );
