export const getMovies = ({movies}) => movies.items;

export const getFavoriteMovies = ({movies}) => {
    return movies.items.filter(({favorite}) => favorite);
}
