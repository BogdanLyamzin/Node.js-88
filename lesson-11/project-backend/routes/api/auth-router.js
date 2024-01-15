import express from "express";

import authController from "../../controllers/auth-controller.js";

import {isEmptyBody, authenticate} from "../../middlewares/index.js";

import {validateBody} from "../../decorators/index.js";

import { userSignupSchema, userSigninSchema, userEmailSchema } from "../../models/User.js";

const authRouter = express.Router();

authRouter.post("/signup", isEmptyBody, validateBody(userSignupSchema), authController.signup);

authRouter.get("/verify/:verificationCode", authController.verify);

authRouter.post("/verify", isEmptyBody, validateBody(userEmailSchema), authController.resendVerifyEmail);

authRouter.post("/signin", isEmptyBody, validateBody(userSigninSchema), authController.signin);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/signout", authenticate, authController.signout);

export default authRouter;