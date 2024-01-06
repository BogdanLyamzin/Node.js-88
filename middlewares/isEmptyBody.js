import { HttpError } from "../helpers/index.js";

export default function isEmptyBody(req, res, next) {
  let message = "missing fields";
  if (Object.keys(req.body).length === 0) {
    if (req.path.includes("favorite")) {
      message = "missing field favorite";
    }
    throw HttpError(400, message);
  }
  next();
}
