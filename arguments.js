// function sum() {
//   let sum_total = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     sum_total += arguments[i];
//   }
//   return sum_total;
// }

// function sum(...args) {
//   let sum_total = 0;
//   for (var i = 0; i < args.length; i++) {
//     sum_total += args[i];
//   }
//   return sum_total;
// }
//
// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);


Function.prototype.myBind = function myBind(ctx, ...bindArgs) {
  let that = this;
  // let bindArgs = Array.prototype.slice.call(arguments, 1);
  return function (...callArgs) {
    // let callArgs = Array.prototype.slice.call(arguments);
    // console.log(callArgs);
    return that.apply(ctx, bindArgs.concat(callArgs));
  };
};
//
function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let result = 0;
      for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
      }
      return result;
    }
    return _curriedSum;
  }
  return _curriedSum;
}


// const sum = curriedSum(4);
// console.log(sum(5)); // => 56

Function.prototype.curry = function (numArgs) {
  let fn = this;
  let args = [];
  function _curriedfn(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn(...args);
    }
    return _curriedfn;
  }
  return _curriedfn;
};
