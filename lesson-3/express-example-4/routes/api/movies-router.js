import express from "express";

import movies from "../../data/movies.js";

const moviesRouter = express.Router();

moviesRouter.get("/", (req, res)=> {
    res.json(movies);
})

moviesRouter.get("/:id", (req, res)=> {
    res.json(movies[0]);
})

moviesRouter.post("/", (req, res)=> {
    res.json(movies[0]);
})

moviesRouter.put("/:id", (req, res)=> {
    res.json(movies[0]);
})

moviesRouter.delete("/:id", (req, res)=> {
    res.json(movies[0]);
})

export default moviesRouter;