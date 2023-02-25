import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as API from 'services/api';

import { toast } from 'react-toastify';
import MovieCard from 'components/MovieCard/MovieCard';
import Button from 'components/Button/Button';
import { Container, BtnWrapper } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
 
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

    useEffect(() => {
      const fetchData = async id => {
    try {
      const response = await API.getDetails(id);
      setMovie(response);
    } catch {
      toast.error('Oops, something went wrong ...');
    }
  };
    fetchData(movieId);
  }, [movieId]);

  

  const onBackBtnClick = () => {
    navigate(location.state?.from ?? '/');
  };

  return (
    <>
      <Container>
          <>
            {movie && (
              <>
                <BtnWrapper>
                  <Button onClick={onBackBtnClick} />
                </BtnWrapper>
                <MovieCard info={movie} />
              </>
            )}
          </>
      </Container>
    </>
  );
};

export default MovieDetails;