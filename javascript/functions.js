// Returning a function from a function

function factory() {
  return function doSomething() {};
}

// Parsing a function to another function as an argument

setTimeout(() => console.log("Hello from the future"), 100);

// Assigning a function to an object

const obj = {
  id: 1,
  fn: function () {
    console.log(this.id);
  },
};

obj.fn(); // prints 999

const obj2 = { id: 2, fn: obj.fn };
obj2.fn(); // prints 2
