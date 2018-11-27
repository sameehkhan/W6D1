// function MovingObject () {}
// 
// function Ship () {}
// Ship.inherits(MovingObject);
// 
// function Asteroid () {}
// Asteroid.inherits(MovingObject);


Function.prototype.inherits = function inherits(Parent) {
  function Surrogate() {}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits2 = function inherits2(Parent) {
  this.prototype = Object.create(Parent.prototype);
  this.prototype.constructor = this;
};

// ----- TESTING -----


// function Animal (name) {
//   this.name = name;
// };
// 
// Animal.prototype.sayHello = function () {
//   console.log("Hello, my name is " + this.name);
// };
// 
// function Dog () {};
