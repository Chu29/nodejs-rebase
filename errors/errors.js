class OddError extends Error {
  constructor(varName = "") {
    super(`${varName} must be an even number`);
    this.code = "ERR_AMOUNT_MUST_BE_EVEN";
  }
  get name() {
    return "OddError " + [this.code];
  }
}

function codify(err, code) {
  err.code = code;
  return err;
}

// const doTask = async (amount) => {
//   if (typeof amount !== "number")
//     throw codify(
//       new TypeError("Amount must be a number"),
//       "ERR_AMOUNT_MUST_BE_NUMBER"
//     );
//   if (amount <= 0)
//     throw codify(
//       new RangeError("Amount must be greater than zero"),
//       "ERR_AMOUNT_MUST_EXCEED_ZERO"
//     );
//   if (amount % 2) throw new OddError("amount");
//   throw Error("Some other error");
//   return amount / 2;
// };

const doTask = (amount, cb) => {
  if (typeof amount !== "number") {
    cb(
      codify(
        new TypeError("Amount must be a number"),
        "ERR_AMOUNT_MUST_BE_NUMBER"
      )
    );
    return;
  }

  if (amount <= 0) {
    cb(
      codify(
        new RangeError("Amount must be greater than zero"),
        "ERR_AMOUNT_MUST_EXCEED_ZERO"
      )
    );
    return;
  }
  if (amount % 2) {
    cb(new OddError("amount"));
    return;
  }
  cb(Error("Some other error"));
  return;
  cb(null, amount / 2);
};

const run = (cb) => {
  doTask(4, (err, result) => {
    if (err) {
      if (err.code === "ERR_AMOUNT_MUST_BE_NUMBER") {
        cb(Error("wrong type"));
      } else if (err.code === "ERR_AMOUNT_MUST_EXCEED_ZERO") {
        cb(Error("out of range"));
      } else if (err.code === "ERR_AMOUNT_MUST_BE_EVEN") {
        cb(Error("cannot be odd"));
      } else {
        cb(err);
      }
      return;
    }
    console.log("Result: ", result);
  });

  // try {
  //   const result = doTask(3);
  //   console.log("Result: ", result);
  // } catch (err) {
  //   if (err.code === "ERR_AMOUNT_MUST_BE_NUMBER") {
  //     throw Error("wrong type");
  //   } else if (err.code === "ERR_AMOUNT_MUST_EXCEED_ZERO") {
  //     throw Error("out of range");
  //   } else if (err.code === "ERR_AMOUNT_MUST_BE_EVEN") {
  //     throw Error("cannot be odd");
  //   } else {
  //     throw err;
  //   }
  // }
};

run((err) => {
  if (err) {
    console.error("Caught in in doTask handled in run(): ", err);
  }
});

// const doTask = async (amount) => {
//   if (typeof amount !== "number")
//     throw new TypeError("Amount must be a number");
//   if (amount <= 0) throw new RangeError("Amount must be greater than zero");
//   if (amount % 2) throw new OddError("amount");
//   const result = asyncFetchResult(amount);
//   return result;
// };

// const doTask = (amount) => {
//   return new Promise((resolve, reject) => {
//     if (typeof amount !== "number") {
//       reject(new TypeError("Amount must be a number"));
//       return;
//     }
//     if (amount <= 0) {
//       reject(new RangeError("Amount must be greater than zero"));
//       return;
//     }
//     if (amount % 2) {
//       reject(new OddError("amount"));
//       return;
//     }
//     resolve(amount / 2);
//   });
// };

// doTask(4)
//   .then((result) => {
//     throw Error("spanner in the works");
//     // console.log("Result", result);
//   })
//   .catch((err) => {
//     if (err.code === "ERR_AMOUNT_MUST_BE_NUMBER") {
//       console.error("Expected a number");
//     } else if (err.code === "ERR_AMOUNT_MUST_EXCEED_ZERO") {
//       console.error("Number must be non-negative");
//     } else if (err.code === "ERR_AMOUNT_MUST_BE_EVEN") {
//       console.error("Number must be even");
//     } else {
//       console.error("unknown error: ", err);
//     }
//   });

// try {
//   const result = doTask(4);
//   result();
//   console.log(" Result: ", result);
// } catch (err) {
//   if (err.code === "ERR_AMOUNT_MUST_BE_NUMBER") {
//     console.error("Expected a number");
//   } else if (err.code === "ERR_AMOUNT_MUST_EXCEED_ZERO") {
//     console.error("Number must be non-negative");
//   } else if (err.code === "ERR_AMOUNT_MUST_BE_EVEN") {
//     console.error("Number must be even");
//   } else {
//     console.error("unknown error: ", err);
//   }
// }
