const requests = ["POST", "PUT", "PATCH"];
export const validateContentType = (req, res, next) => {
  if (requests.includes(req.method) && !req.is("application/json"))
    return res
      .status(415)
      .json({ error: "Content-Type must be application/json" });
  next();
};
