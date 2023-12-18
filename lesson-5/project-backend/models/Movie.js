import {Schema, model} from "mongoose";

const movieSchema = new Schema({
    title: String,
    director: String,
})

const Movie = model("movie", movieSchema);
// category => categories
// mouse => mice

export default Movie;