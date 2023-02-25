import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/api';
import { toast, ToastContainer } from 'react-toastify';

import {
  ReviewsList,
  ReviewItem,
  ReviewAuthor,
  ReviewInfo,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewLoading, setReviewLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

    useEffect(() => {
      const fetchData = async id => {
    try {
      const response = await API.getMovieReview(id);
      setReviews(response);
      setReviewLoading(true);
    } catch {
      // const message = toast.error('Oops, something went wrong ...');
      setError(toast.error('Oops, something went wrong ...'));
    }
  };

  if (reviews.length === 0 && reviewLoading) {
    const message = toast.warn('We dont have any review for this movie');
    return message;
  }
    fetchData(movieId);
  }, [movieId]);


  return (
    <>
        <ReviewsList>
          {reviews.map(({ id, author, content }) => {
            return (
              <ReviewItem key={id}>
                <ReviewAuthor>Author: {author}</ReviewAuthor>
                <ReviewInfo>{content}</ReviewInfo>
              </ReviewItem>
            );
          })}
        </ReviewsList>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Reviews;
