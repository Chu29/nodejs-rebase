// wolf object
const wolf = {
  howl: function () {
    console.log(this.name + ": awoooooooo");
  },
  woof: function () {
    console.log("Second");
  },
};

// Dog object
// Creating a functional prototype chain using Object.create(proto,optional_properties object)
const dog = Object.create(wolf, {
  woof: {
    value: function () {
      console.log(this.name + ": woof");
    },
  },
});

const rufus = Object.create(dog, {
  name: { value: "Rufus the dog" },
});

rufus.woof();
rufus.howl();
