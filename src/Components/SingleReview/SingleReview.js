import React from 'react';
import './SingleReview.css'
const SingleReview = (props) => {
    const {name, rating, picture } = props.review;
    return (
        <div className='single-review-container'>
            <img src={picture} alt="product-pic" />
            <div>
                <h2> Name :{name} </h2>
                <p> Review :{rating}  </p>
            </div>
        </div>
    );
};

export default SingleReview;