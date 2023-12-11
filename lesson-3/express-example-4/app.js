import express from "express";
import cors from "cors";

import moviesRouter from "./routes/api/movies-router.js";

const app = express();

app.use(cors());

app.use("/api/movies", moviesRouter);

app.use((req, res)=> {
    res.status(404).json({
        message: "Not Found"
    })
})

app.listen(3000, ()=> console.log("Server running on 3000 PORT"))