import express from "express";

import moviesController from "../../controllers/movies-controller.js";

import * as movieSchemas from "../../models/Movie.js";

import {validateBody} from "../../decorators/index.js";

import {authenticate, isValidId} from "../../middlewares/index.js";

const movieAddValidate = validateBody(movieSchemas.movieAddSchema);
const movieUpdateFavoriteValidate = validateBody(movieSchemas.movieUpdateFavoriteSchema);

const moviesRouter = express.Router();

moviesRouter.use(authenticate);

moviesRouter.get("/", moviesController.getAll);

moviesRouter.get("/:id", isValidId, moviesController.getById);

moviesRouter.post("/", movieAddValidate, moviesController.add);

moviesRouter.put("/:id", isValidId, movieAddValidate, moviesController.updateById);

moviesRouter.patch("/:id/favorite", isValidId, movieUpdateFavoriteValidate, moviesController.updateById);

moviesRouter.delete("/:id", isValidId, moviesController.deleteById);

export default moviesRouter;