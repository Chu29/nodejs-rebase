"use strict";

const upper = (str) => {
  if (typeof str === "symbol") str = str.toString();
  str = str + "";
  return str.toUpperCase();
};

export default { upper };
