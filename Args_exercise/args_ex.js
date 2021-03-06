// sum function w/o rest
// function sum(...args) {
//   let sum = 0;
//     args.forEach(function(el){
//       sum += el;
//     });
//   return sum;
// }

function sum3(...args) {
  return args.reduce((prev, curr) => {
    return prev + curr;
  });
}

//sum function w/ rest

function sum2() {
  let sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}
// using apply
Function.prototype.myBind = function() {
  let ctx = arguments[0];
  let bindArgs = Array.from(arguments).slice(1);
  let that = this;
  
  return function() {
    let callArgs = Array.from(arguments);
    return that.apply(ctx, bindArgs.concat(callArgs));
  };
};

//using call and rest (...) operator
// only diff is call instead of apply & ... before bindArgs
Function.prototype.myBind2 = function() {
  let ctx = arguments[0];
  let bindArgs = Array.from(arguments).slice(1);
  let that = this;

  return function() {
    let callArgs = Array.from(arguments);
    return that.call(ctx, ...bindArgs.concat(callArgs));
  };
};

//curriedSum
function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
sumThree.curry(3)(4)(20)(6); // == 30


// Function.prototype.curry = function(numArgs) {
//   let allArgs = Array.from(arguments).slice(1);
//   let num = arguments[0];
//   let that = this;
// 
//   for (i = 0; i < num; i++) {
//     something = that.apply(allArgs);
//   }
// 
//   return function () {
//     that.apply(allArgs)
//   };
// };

// Function.prototype.curry = function (numArgs) {
//  const args = [];
//  const _curriedFn = (arg) => {
//    args.push(arg);
//    if (args.length === numArgs) {
//      // spreading the array into individual arguments
//      return this(...args); 
//    } else {
//      return _curriedFn;
//    }
//  };
//  return _curriedFn;
// };



function curriedSum(numArgs) {
  const numbers = [];

  function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      let total = 0;

      numbers.forEach((n) => { total += n; });

      return total;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}



Function.prototype.curry2 = function (numArgs) {
  let args = [];  //set empty array to store args
  let curried = (arg) => {  //set function to take care of each argument
    args.push(arg);  //args, our empty array, will push in each argument if
    if (args.length === numArgs) {
      return this(...args);
    } else {
      return curried;
    }
  };
  return curried;
};




