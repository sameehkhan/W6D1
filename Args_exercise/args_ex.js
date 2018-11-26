// sum function w/o rest
function sum(...args) {
  let sum = 0;
    args.forEach(function(el){
      sum += el;
    });
  return sum;
}

function sum3(...args) {
  return args.reduce((prev, curr) => {
    return prev + curr;
  });
}

//sum function w/ rest

function sum2(arguments) {
  let sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}