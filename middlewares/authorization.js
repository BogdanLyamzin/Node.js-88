import jwt from "jsonwebtoken";
import "dotenv/config.js";

import { HttpError } from "../helpers/index.js";

import User from "../models/Users.js";

const { SECRET_JWT } = process.env;

export default async function checkAuthorization(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return next(HttpError(401, "Authorization not define"));
  }
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    return next(HttpError(401));
  }

  try {
    const { id } = jwt.verify(token, SECRET_JWT);
    const user = await User.findById(id);
    if (!user || !user.token || token !== user.token) {
      return next(HttpError(401, "Not authorized"));
    }
    req.user = user;
    next();
  } catch (error) {
    next(HttpError(401, "Not authorized"));
  }
}
