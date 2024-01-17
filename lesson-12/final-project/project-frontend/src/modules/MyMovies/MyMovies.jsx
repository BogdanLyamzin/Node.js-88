import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MyMoviesBlock from "./MyMoviesBlock/MyBooksBlock";
import MyMoviesList from "./MyMoviesList/MyBooksList";
import MyMoviesForm from "./MyMoviesForm/MyMoviesForm";

import { fetchMovies, addMovie, deleteMovie } from "../../redux/movies/movies-operations";

import {getMovies} from "../../redux/movies/movies-selectors";

import styles from "./my-movies.module.scss";

const MyMovies = () => {
    const movies = useSelector(getMovies);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchMovies());
    }, [])

    const onAddMovie = (data) => {
        dispatch(addMovie(data));
    }

    const onDeleteMovie = (id) => {
        dispatch(deleteMovie(id));
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.blocks}>
                <MyMoviesBlock title="Add movie">
                    <MyMoviesForm onSubmit={onAddMovie} />
                </MyMoviesBlock>
                <MyMoviesBlock title="Movie list">
                    <MyMoviesList items={movies} onDeleteMovie={onDeleteMovie} />
                </MyMoviesBlock>
            </div>
        </div>
    )
}

export default MyMovies;

