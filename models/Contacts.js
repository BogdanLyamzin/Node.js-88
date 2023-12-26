import Joi from "joi";

import { Schema, model } from "mongoose";
import { setUpdateSettings } from "./hooks.js";

//JOI

export const addContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
}).messages({ "any.required": "missing required name field" });

export const updateContactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});

export const updateFavoriteContactSchema = Joi.object({
  favorite: Joi.boolean().required(),
});
//MONGOOSE

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

contactSchema.pre("findOneAndUpdate", setUpdateSettings);

const Contact = model("contact", contactSchema);

export default Contact;
