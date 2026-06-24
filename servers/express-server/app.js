"use strict";
import express from "express";
import createHttpError from "http-errors"; // a helper function that creates HTTP error objects with status codes and messages

const app = express(); // create an Express application instance

// middleware that runs for every incoming request: The next parameter is a function that is called to pass control to the next middleware in the stack
app.use((req, res, next) => {
  if (req.method !== "GET") {
    next(createHttpError(405, "Method Not Allowed"));
    return;
  }
  next(createHttpError(404, "Not Found"));
});

// Error handling middleware (this is because it has 4 parameters and it must be the last middleware in the stack). It is called only when an error occurs
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message: status === 500 ? "Internal Server Error" : err.message,
  });
});

export default app;
