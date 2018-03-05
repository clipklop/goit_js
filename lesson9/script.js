/* 
 *
 */ 


// ## 1. 
function argSum() {
	let args = [].slice.call(arguments);
	return args.reduce(function(a, b) {
		return a + b;					
	});
}

//  console.log(argSum(5, 25, 50, 33, 67))


// ## 2. 
function applyAll() {
	let args = [].slice.call(arguments, 1)	
	return arguments[0].apply(this, args);
}

//  console.log(applyAll(argSum, 25, 50, 33, 67))