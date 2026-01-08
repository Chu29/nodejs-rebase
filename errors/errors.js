const doTask = (amount) => {
  if (typeof amount !== "number")
    throw new TypeError("Amount must be a number");
  if (amount <= 0) throw new RangeError("Amount must be non-negative");
  if (amount % 2) throw new OddError("amount");
  return amount / 2;
};

class OddError extends Error {
  constructor(varName = "") {
    super(`${varName} must be an odd number`);
  }
  get name() {
    return "OddError";
  }
}

doTask(3);
