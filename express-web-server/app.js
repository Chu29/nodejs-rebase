/**
 * This file creates an instance of express() class
 * We consume all routes here using the use() method
 */

" use strict ";
const express = require("express");
const createError = require("http-errors");
const indexRoutes = require("./routes");
const helloRoutes = require("./routes/hello");

const app = express();

// mounting the routes with the actual paths
app.use("/", indexRoutes);
app.use("/hello", helloRoutes);

app.use((req, res, next) => {
  if (req.method !== "GET") {
    next(createError(404));
    return;
  }
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
