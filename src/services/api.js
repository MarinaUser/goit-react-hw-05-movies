import axios from "axios";

const API_KEY = '73310c38a21f3b9ad6a835040df80327';
const BASE_URL = 'https://api.themoviedb.org/3/';

//Запит популярних фільмів

export const getTrending = async () => {
    const { data } = await axios.get(
        `${BASE_URL}trending/movie/day?api_key=${API_KEY}&language=en-US`
    );
    const { results } = data;
  // console.log(results);
  return results;
}

// Запит повної інфо про фільм

export async function getDetails(id) {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  // console.log(data);
  return data;
}

// Запит акторів

export async function getMovieCast(id) {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

  const { cast } = data;
  // console.log(cast);
  return cast;
}

// Запит огладів

export async function getMovieReview(id) {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  const { results } = data;
  // console.log(results);
  return results;
}

// Запит пошуку за ключовим словом

export async function getMoviesQuery(query) {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`
  );
  const { results } = data;
  // console.log(results);
  return results;
}

export const baseUrl = 'https://image.tmdb.org/t/p/w500';
export const defaultUrl ='https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png';