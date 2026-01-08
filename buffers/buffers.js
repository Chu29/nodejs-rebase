const Buffer = require("buffer").Buffer;

// // converting from string to buffer
// const buffer = Buffer.from("Interviewing.io");

// console.log("String to Buffer:", buffer);

// // converting buffer to string
// const str = buffer.toString("hex");
// console.log("Buffer to string:", str);

// const { StringDecoder } = require("string_decoder");
// const frag1 = Buffer.from("f09f", "hex");
// const frag2 = Buffer.from("9180", "hex");
// console.log(frag1.toString());
// console.log(frag2.toString());

// const decoder = new StringDecoder();
// console.log(decoder.write(frag1)); // the write method appends any incomplete strings to the decoder's internal buffer
// console.log(decoder.write(frag2));

const buffer = Buffer.from("👀"); // stored in json format
const json = JSON.stringify(buffer); // converts from buffer to json
const parsed = JSON.parse(json); // converts from json to object
console.log(parsed);
console.log(Buffer.from(parsed.data));
