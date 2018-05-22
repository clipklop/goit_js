/*
 *
*/


// Codewars: Javascript Namespacing
const MyNamespace = {} || MyNamespace;

MyNamespace.MyClass = function(string) {
  this.string = string;
}

MyNamespace.MyClass.prototype.sayHello = function () {
  return this.string;
}

const myObject = new MyNamespace.MyClass('Hello!');
const phrase = myObject.sayHello(); // phrase should be 'Hello!'
// console.log(phrase)


// Codewars: Array-dot-prototype-dot-reverse
Array.prototype.reverse = function() {
  for (let i = 0, j = this.length - 1; i < j; i++, j--) {
    let tmp = this[i];
    // console.log(tmp)
    this[i] = this[j];
    // console.log(this[i])
    this[j] = tmp;
    console.log(this[j])
  }
  return this;
}

console.log(['M','A','N','I','A','C'].reverse())
console.log([9, 8, 7, 6, 5, 4, 3, 2, 1].reverse());