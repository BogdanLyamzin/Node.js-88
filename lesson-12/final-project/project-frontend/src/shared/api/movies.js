import instance from "./auth";

export const getAllMovies = () => instance.get("/movies");

export const deleteMovie = id => {
    return instance.delete(`/movies/${id}`)
}

export const addMovie = data => {
    return instance.post("/movies", data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}