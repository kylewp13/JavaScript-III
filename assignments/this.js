/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - in the global scope
* 2. Implicit Binding - points to the object on the left
* 3. New Binding - keyword that constructs a new object and points to it
* 4. Explicit Binding - this is .call, .apply or .bind
*
* write out a code example of each explanation above
*/

// Principle 1

function sayName () {
  console.log(`My age is ${this.name}`);
};

const user = {
  name: 'kyle',
  age: 25
};

console.log(sayName());

// code example for Window Binding

// Principle 2

const me = {
  name: 'Kyle',
  age: 25,
  greet: function() {
    return (`Hello, my name is ${this.name}`);
  }
};

console.log(me.greet());

// code example for Implicit Binding

// Principle 3

function User (name, age, city) {
  this.name = name
  this.age = age
  this.city = city
};

const Me = new User('Kyle', 25, 'Jacksonville');

console.log(Me);

// code example for New Binding

// Principle 4

function greet () {
  return (`Hello, my name is ${this.name}`);
};

const kyle = {
  name: 'kyle',
  age: 25,
};

console.log(greet.call(kyle));

// code example for Explicit Binding