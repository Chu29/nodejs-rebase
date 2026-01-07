"use strict";
const pino = require("pino");
const format = require("./format.mjs").default;
const logger = pino({ level: process.env.LOG_LEVEL || "info" });

logger.info("CommonJS module loaded");

const result = format.upper("hello world");
logger.info(`Formatted result: ${result}`);

process.stdin.resume();
