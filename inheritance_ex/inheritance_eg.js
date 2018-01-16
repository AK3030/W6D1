Function.prototype.inherits1 = function inherits(ParentClass) {
  function Surrogate(){}
  Surrogate.prototype = ParentClass.prototype;
  //console.log(this, 5);
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function A (){
  this.name = "ImmaA";
  // this.foo = function() {console.log("foo from A"); };
}
A.prototype.foo = function() {console.log("stuff");};

function B(){
  A.call(this);
}

B.inherits1(A);

var b = new B();
console.log(b.name);
b.foo();


Function.prototype.inherits2 = function inherits(ParentClass) {
  this.prototype = Object.create(ParentClass.prototype);
  this.prototype.constructor = this;
}


B.inherits2(A);

var b = new B();
console.log(b.name);
b.foo();
