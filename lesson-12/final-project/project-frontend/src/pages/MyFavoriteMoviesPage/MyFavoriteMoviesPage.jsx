import { useSelector } from "react-redux";

import { getFavoriteMovies } from "../../redux/movies/movies-selectors";

const MyFavoriteMoviesPage = () => {
    const favoriteMovies = useSelector(getFavoriteMovies);

    const elements = favoriteMovies.map(({id, title, director})=> (
        <li key={id}>Title: {title}. Director: {director}.</li>
    ));

    return (
        <div className="container">
            <h1 className="page-title">My favorite movies page</h1>
            <ol>
                {elements}
            </ol>
        </div>
    )
}

export default MyFavoriteMoviesPage;