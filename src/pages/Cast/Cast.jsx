import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/api';
import { toast, ToastContainer } from 'react-toastify';


import {
  CastList,
  CastItem,
  CardCast,
  Card,
  CardInfo,
  Image,
} from './Cast.styled';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [castLoading, setcastLoading] = useState(false);
 

  const { movieId } = useParams();

    useEffect(() => {
      

    fetchData(movieId);
  }, [movieId]);

  const fetchData = async id => {
    try {
      const response = await API.getMovieCast(id);
      setCasts(response);
      setcastLoading(true);
    } catch {
       toast.error('Oops, something went wrong ...');
      
    }
  };

  if (casts.length === 0 && castLoading) {
    const message = toast.warn('We dont have any information about cast of this movie');
    return message ;
  }
  
  return (
    <>
      
        <CastList>
          {casts.map(({ id, character, name, profile_path }) => {
            return (
              <CastItem key={id}>
                <CardCast>
                  <Card>
                    {
                      <Image
                        src={
                          profile_path
                            ? API.baseUrl + profile_path
                            : API.defaultUrl
                        }
                        alt={name}
                        width="200"
                        height="250"
                      />
                    }
                  </Card>

                  <CardInfo>
                    <p>{character}</p>
                    <p>{name}</p>
                  </CardInfo>
                </CardCast>
              </CastItem>
            );
          })}
        </CastList>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Cast;