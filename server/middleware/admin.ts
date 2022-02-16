export const admin = (req:any, res:any, next:any):void => {
    if (req.user.role !== "admin")
      return res.status(403).send({ error: "Access denied." });
    next();
  };
  