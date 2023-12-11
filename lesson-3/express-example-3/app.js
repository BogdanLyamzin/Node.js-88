import express from "express";
import cors from "cors";

import movies from "./movies.js";

const app = express();

app.use(cors());
// const corsMiddleware = cors();
/*
const cors = options => {
    const middleware = (req, res, next)=> {
        // allow CORS with options
        next();
    }
    return middleware;
}
*/
// app.use(corsMiddleware)

// app.use((req, res, next)=> {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// })

// app.use((req, res, next)=> {
//     console.log("First middleware");
//     next();
// })

// app.use((req, res, next)=> {
//     console.log("Second middleware");
//     next();
// })

app.get("/products", (req, res)=> {
    res.json([]);
})

app.get("/movies", (req, res)=> {
    res.json(movies);
})

app.use((req, res)=> {
    res.status(404).json({
        message: "Not Found"
    })
})

app.listen(3000, ()=> console.log("Server running on 3000 PORT"));