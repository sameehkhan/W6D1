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



