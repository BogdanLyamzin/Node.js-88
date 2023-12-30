import express from "express";

import moviesController from "../../controllers/movies-controller.js";

import {authenticate, isEmptyBody, isValidId} from "../../middlewares/index.js";

import {validateBody} from "../../decorators/index.js";

import { movieAddSchema, movieUpdateSchema, movieUpdateFavoriteSchema } from "../../models/Movie.js";

const moviesRouter = express.Router();

moviesRouter.use(authenticate);

moviesRouter.get("/", moviesController.getAll);

moviesRouter.get("/:id",  isValidId, moviesController.getById);

moviesRouter.post("/", isEmptyBody, validateBody(movieAddSchema), moviesController.add);

moviesRouter.put("/:id", isValidId, isEmptyBody, validateBody(movieUpdateSchema), moviesController.updateById);

moviesRouter.patch("/:id/favorite", isValidId, isEmptyBody, validateBody(movieUpdateFavoriteSchema), moviesController.updateById);

moviesRouter.delete("/:id", isValidId, moviesController.deleteById)

export default moviesRouter;