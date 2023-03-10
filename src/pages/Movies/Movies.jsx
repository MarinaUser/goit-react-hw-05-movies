import { useState, useEffect } from 'react';
import { useSearchParams} from 'react-router-dom';

import * as API from 'services/api';

import Search from 'components/Search/Search';
import MovieList from 'components/MovieList//MovieList';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';


import { Container } from './Movies.styled';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  

  const userQuery = searchParams.get('query') ?? '';

  useEffect(() => {
  
      if (userQuery === '') return;
      
      const fetchData = async query => {
    try {
      setIsLoading(true);
     
      const response = await API.getMoviesQuery(query.toLowerCase());
      
      if (response.length === 0) {
        return toast.warn(
          'Search Failure. There is no movie for your query. Please enter other query.'
        );
      }

      setMovies(response);
    } catch {
         toast.error(
          'Oops, something went wrong ...'
        );
     
    } finally {
      setIsLoading(false);
    }
  };
    fetchData(userQuery);
  }, [userQuery]);


  const handleSearchbarSubmit = newQuery => {
    if (query.toLowerCase() !== newQuery.toLowerCase()) {
      setSearchParams({ query: newQuery });
      setQuery(newQuery);
    }
  };


  return (
    <>
      <Search value={movies} onSubmit={handleSearchbarSubmit} />
              <Container>
                  {isLoading && <Loader />}
                  {!isLoading && <MovieList movies={movies} />}
              </Container>
      
    </>
  );
};

export default Movies;

