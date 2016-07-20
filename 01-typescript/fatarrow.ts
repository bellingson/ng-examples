function doSomething(callback) {

	console.log('do something');

	callback();

}

// using an anonymous function
doSomething(function() {
	console.log("did it\n");
});

// fat arrow functions are syntactic sugar for anonymous functions

doSomething(() => {
	console.log("did it again\n");
});