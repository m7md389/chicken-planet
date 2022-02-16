import jwt from "jsonwebtoken";
require("dotenv").config();

export const auth = (req:any, res:any, next:any):void => {
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).send({ error: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, "JWT_PRIVATE_KEY_HERE");
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send({ error: "Invalid token." });
  }
};
