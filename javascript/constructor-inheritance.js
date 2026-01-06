const util = require("node:util");

// Commonly used in legacy code bases => Worth understanding

// Define our wolf function using PascaleCase
function Wolf(name) {
  this.name = name;
}

/**
 * We define properties/methods for each function's prototype object and then call it with the new keyword
 */

// Set howl object as a property on the Wolf class
Wolf.prototype.howl = function () {
  console.log(this.name + ": awoooooooo");
};

function Dog(name) {
  Wolf.call(this, name + " the dog");
}

// function inherit(proto) {
//   function ChainLink() {}
//   ChainLink.prototype = proto;
//   return new ChainLink();
// }

// Dog.prototype = inherit(Wolf.prototype);

util.inherits(Dog, Wolf);

Dog.prototype.woof = function () {
  console.log(this.name + ": woof");
};

const rufus = new Dog("Rufus");

rufus.howl();
rufus.woof();
