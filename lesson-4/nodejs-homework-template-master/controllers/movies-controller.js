import * as moviesService from "../models/movies/index.js";

import {HttpError} from "../helpers/index.js";

const getAll = async (req, res, next) => {
    try {
        const result = await moviesService.getAllMovies();

        res.json(result);
    }
    catch (error) {
        next(error);
    }
}

const getById = async(req, res, next)=> {
    try {
        const {id} = req.params;
        const result = await moviesService.getMovieById(id);
        if(!result) {
            throw HttpError(404, `Movie with id=${id} not found`);
            // const error = new Error(`Movie with id=${id} not found`);
            // error.status = 404;
            // throw error;
            // return res.status(404).json({
            //     message: `Movie with id=${id} not found`
            // })
        }

        res.json(result);
    }
    catch(error) {
        next(error);
    }
}

export default {
    getAll,
    getById,
}