import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || !token.startsWith(`Bearer `)) {
    return res.status(401).json({
      message: "Token มีรูปแบบไม่ถูกต้อง",
    });
  }

  const tokenWithoutBearer = token.split(" ")[1];

  jwt.verify(tokenWithoutBearer, process.env.SECRET_KEY, (err, payload) => {
    if (err) {
      return res.status(401).json({
        message: "Token ไม่ถูกต้อง",
      });
    }
    req.user = payload;
    console.log("User payload:", payload);
    next();
  });
};
