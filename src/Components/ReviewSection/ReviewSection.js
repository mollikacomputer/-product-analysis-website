import React from 'react';
const ReviewSection = (props) => {
    const {name, rating, picture, action } = props.review;
    return (
        <div className='single-review-container'>
            <img src={picture} alt="product-pic" />
            <div>
                <h2> {name} </h2>
                <p>{action} </p>
                <p> Rating : <span className='rating'> {rating} </span>  </p>
            </div>
            
        </div>
        
    );
};

export default ReviewSection;