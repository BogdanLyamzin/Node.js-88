import express from "express";

import moviesController from "../../controllers/movies-controller.js";

const moviesRouter = express.Router();

moviesRouter.get("/", moviesController.getAll);

moviesRouter.get("/:id", moviesController.getById);

export default moviesRouter;