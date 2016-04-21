var base = "this is in f1 in the global namespace";
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

var inc = function() {
    var x = 0;
    return function() {
	x = x + 1;
	return x;
    }
}

/*
var add3 = makeAdder(3);
add3(7) = 10
*/

var makeAdder = function(n) {
//    var x = 0;
    return function(x) {
	return x + n
//	console.log(n);
//	x = x + n;
//	return x;
    }
}

var makeCounter = function() {
    var i = 0;
    var get = function() { //different lexicographical organization
	return i;
    }
    return {
	x: "this is a str in dict",
	set:function() { i = x; },
	get:get,
	inc:function() { i++ },
	dec:function() { i-- },
	setx:function(s) { this.x = s }
    }
}
/*
a = makeCounter();
a.set(5);
*/
