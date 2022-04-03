import React from 'react';
import useReviews from '../../Hook/useReview';
import SingleReview from '../SingleReview/SingleReview';
import './Review.css';
const Review = () => {
    const [reviews, setReviews] = useReviews();
    
    return (
        <div>
            <h2> Review component</h2>
            {
               reviews.map(review => <SingleReview key = {review.id} review={review} > </SingleReview> )
            }
        </div>
    );
};

export default Review;