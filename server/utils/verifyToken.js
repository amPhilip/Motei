import jwt from "jsonwebtoken";
import { appError } from "../utils/errorFile.js";

/*------VERIFY TOKEN----------*/
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(appError(401, ` ⛔ You are not authenticated`));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(appError(403, `Token is not valid`));
    req.user = user;
    next();
  });
};

/*------VERIFY USER----------*/
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, `🚫 Not Authorized`));
    }
  });
};

/*------VERIFY ADMIN----------*/
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(appError(403, `🛑Only rootAdmin is Allowed`));
    }
  });
};