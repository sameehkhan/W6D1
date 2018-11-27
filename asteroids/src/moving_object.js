import Asteroid from "./asteroid.js";
import Bullet from "./bullet.js";
import Ship from "./ship.js";

Function.prototype.inherits2 = function inherits2(MovingObject) {
  Asteroid.prototype = Object.create(MovingObject.prototype);
  Asteroid.prototype.constructor = Asteroid;
};

Function.MovingObject = function(){
};

MovingObject.prototype.move = function(){
  
};

MovingObject.prototype.draw = function(ctx){
  
};

MovingObject.prototype.isCollidedWith = function(otherMovingObject){
  
};

