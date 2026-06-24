"use strict";
import { Router } from "express";
const router = Router();

const root = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Express Server</title>
  </head>
  <body>
    <a href="/hello">Hello</a>
  </body>
</html>
`;

// register the root route
router.get("/", (req, res) => {
  res.send(root);
});

export default router;
