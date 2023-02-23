import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';
// import Notification from 'components/Notification/Notification';
import { toast } from 'react-toastify';
import { Container, Title } from './Home.styled';
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
        {movies &&<Title>Trending today</Title>}
        {movies && <MovieList movies={movies} />}
        </Container>
    
    </>
  );
};

export default Home;


