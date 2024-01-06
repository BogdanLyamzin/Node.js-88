import Joi from "joi";

import { Schema, model } from "mongoose";
import { setUpdateSettings } from "./hooks.js";

const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

const subscriptionValid = ["starter", "pro", "business"];

//JOI
export const addUserSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().pattern(emailRegExp).required(),
  subscription: Joi.string()
    .valid(...subscriptionValid)
    .default("starter"),
});

export const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string().valid(...subscriptionValid),
});
//MONGOOSE
const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: {
        values: subscriptionValid,
        message: `subscription must be in list ${subscriptionValid}`,
      },
      default: "starter",
    },
    token: String,
  },
  { versionKey: false }
);

userSchema.pre("findOneAndUpdate", setUpdateSettings);

const User = model("user", userSchema);

export default User;
