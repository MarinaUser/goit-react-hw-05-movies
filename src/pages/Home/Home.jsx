import { useEffect, useState, Suspense } from 'react';
import MovieList from 'components/MovieList/MovieList';
import { toast } from 'react-toastify';
import { Container, Title } from './Home.styled';
import Loader from 'components/Loader/Loader';
import * as API from 'services/api';


const Home = () => {
  const [movies, setMovies] = useState([]);
 
    useEffect(() => {
      const fetchData = async () => {
    try {
      const response = await API.getTrending();
      setMovies(response);
    } catch {
      toast.error('Oops, something went wrong ...');
    }
  };
    fetchData();
  }, []);

 
  return (
    <>
        <Container>
        {movies && <Title>Trending today</Title>}
         <Suspense fallback={<Loader />}>
          {movies && <MovieList movies={movies} />}
          </Suspense>
        </Container>
    
    </>
  );
};

export default Home;


