import * as movieService from "./movies/index.js";

const invokeAction = async ({action, id, ...data})=> {
    switch(action) {
        case "list":
           const allMovies = await movieService.getAllMovies();
           return console.log(allMovies);
        case "getById":
            const oneMovie = await movieService.getMovieById(id);
            return console.log(oneMovie);
        case "add":
            const newMovie = await movieService.addMovie(data);
            return console.log(newMovie);
        case "updateById":
            const updateMovie = await movieService.updateMovieById(id, data);
            return console.log(updateMovie);
        case "deleteById":
            const deleteMovie = await movieService.deleteById(id);
            return console.log(deleteMovie);
    }
}

// invokeAction({action: "list"})
// invokeAction({action: "getById", id: "u9kgwNWGi3uUUwh0b8V48"})
// invokeAction({action: "add", title: "Avatar: way of water", direction: "james Cameron"});
// invokeAction({action: "updateById", id: "U0rQ1PfGSYwmGrfVtKiaX", title: "Avatar: Way of water"});
invokeAction({action: "deleteById", id: "U0rQ1PfGSYwmGrfVtKiaX"});