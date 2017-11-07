
Function.prototype.inherits = function (baseClass) {
  function Surrogate() {}
  Surrogate.prototype = baseClass.prototype;
  this.prototype = new Surrogate;
  this.prototype.constructor = this;
};

Function.prototype.inherits1 = function (baseClass) {

  this.prototype = Object.create(baseClass.prototype);
  this.prototype.constructor = this;
};

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function bark() {
  console.log(this.name + " barks!");
};

function Corgi(name) {
  Dog.call(this, name);
}

Corgi.inherits1(Dog);

Corgi.prototype.waddle = function waddle() {
  console.log(this.name + " waddles!");
};

const blixa = new Corgi("Blixa");
blixa.bark();
blixa.waddle();
