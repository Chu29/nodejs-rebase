// Creating Events

const { EventEmitter } = require("events");

// Create an instance of EventEmitter (Creating a new event emitter)
const myEmitter = new EventEmitter(); // using the new keyword to create an instance of the EventEmitter class

// Using prototypal inheritance to create an EventEmitter
// Emitting Events
/**
 * we call the emit method on the event emitter instance to * emit an event.
 * Here, "an-event" is the name of the event being emitted, * and some, args are the arguments passed to the event * * * listeners.
 */
class MyEmitter extends EventEmitter {
  constructor(opts = {}) {
    super(opts);
    this.name = opts.name;
  }
  destroy(err) {
    if (err) this.emit("error", err);
    this.emit("close");
  }
}

// Listening to Events

const emitter = new MyEmitter({ name: "My Emitter" });

// register an event listener for the event "close"
emitter.on("close", () => console.log("close event fired")); // listen for the close event
emitter.emit("close"); // emit the close event
