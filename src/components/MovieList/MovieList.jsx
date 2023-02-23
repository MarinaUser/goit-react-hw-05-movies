import PropTypes from 'prop-types';
import MovieItem from './MovieItem/MovieItem';
import { Gallery } from './MovieList.styled';

const MovieList = ({ movies }) => {
  return (
    <Gallery>
      {movies.map(({ id, title, poster_path, vote_average }) => {
        const base_url = 'https://image.tmdb.org/t/p/w500';
        return (
          <MovieItem
            key={id}
            id={id}
            src={base_url + poster_path}
            title={title}
            vote={vote_average}
          >
            {title}
          </MovieItem>
        );
      })}
    </Gallery>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
    }).isRequired
  ),
};