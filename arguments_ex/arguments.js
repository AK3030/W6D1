let sum1 = function() {

  let args = Array.from(arguments);
  if (args.length ===0) { return 0; }
  return args.reduce( (x,y) => x + y);
};

let sum2 = function(...args) {
  if (args.length === 0) {return 0;}
  return args.reduce( (x,y) => x + y);
};

Function.prototype.myBind1 = function (context, ...args) {
  return (...callArgs) => {this.apply(context, args.concat(callArgs));};
};

Function.prototype.myBind2 = function (context) {
  let args = Array.from(arguments).slice(1);
  console.log(arguments);
  return () => {
    console.log(arguments);
    this.apply(context, args.concat(Array.from(arguments)));
  };
};

Function.prototype.myBind3 = function (context) {
  let args = Array.from(arguments).slice(1);
  let that = this;

  return function() {
    that.apply(context, args.concat(Array.from(arguments)));
  };
};

let f = function(x,y,z) {
  //console.log(this.a);
  console.log(x); // do x and y stuff
  console.log(y); // do x and y stuff
  console.log(z); // do x and y stuff
};


let b = {a:400};

// let g = f.myBind3(b, 2);
//g(3,4);
// let h = f.myBind2(null, 42, 5);
// h(11);

let curriedSum = function(numArgs) {
  let argsGiven = 0;
  let that = this;
  let runningSum = 0;
  let _curriedSum = function(n) {
    argsGiven++;
    runningSum += n;
    if (argsGiven === numArgs) {
      return runningSum;
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};


//Why does this one work?
// let curriedSum = function(numArgs) {
//   this.argsGiven = 0;
//   console.log(argsGiven, 777);
//   let that = this;
//   let runningSum = 0;
//   let _curriedSum = function(n) {
//     that.argsGiven++;
//     runningSum += n;
//     console.log(argsGiven);
//     if (argsGiven === numArgs) {
//       return runningSum;
//     } else {
//       return _curriedSum;
//     }
//   };
//   return _curriedSum;
// };

// f = curriedSum(3);

// f(10);f(4);
// console.log(f(6));
//
Function.prototype.curry = function(numArgs) {
  let argsStore = [];
  let that = this;
  let _curry = function(n) {
    argsStore.push(n);
    if (argsStore.length === numArgs) {
      return that.apply(null, argsStore);
    } else {
      return _curry;
    }
  };
return _curry;
};
var g = f.curry(3);
//console.log(g(1)(2)(3));
g(1);g(2);(g(3));
