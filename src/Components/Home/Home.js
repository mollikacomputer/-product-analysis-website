import React from "react";
import useReviews from "../../Hook/useReview";
import ReviewSection from "../ReviewSection/ReviewSection";
import "./Home.css";
const Home = (props) => {
  const [reviews, setReviews] = useReviews();
  return (
    <>
      <div className="home-container">
        <div className="product-desc">
          <h2> ANDROID SMART PHONE </h2>
          <h3> Welcome to our website</h3>
          <p>
            This smart phone is Number One class Smart Android phone. You got
            all kinds of mobile feature, like as youtube, facebook, all kinds of
            popular sociel media icons. Blootooth, WiFi, Reacording Function
            etc. You can add extra memory if you need. you can check out. One
            month money back guarantee. One years product replacement guarantee
            and 3 years service guarantee. Before you buy you can check publick
            review action. Thanks for your time.
          </p>
          <button className="btn btn-dark btn-lg">Live Demo</button>
        </div>
        <div className="product-pic">
          <img
            className="img-fluid"
            src="https://img.joomcdn.net/e6f6ac39feaee0948419883c468e235df99860f9_original.jpeg"
            alt="watch-pic"
          />
        </div>
      </div>
      <div className="comment-section">
        {reviews.map((review) => (
          <ReviewSection review={review}></ReviewSection>
        ))}
      </div>
    </>
  );
};

export default Home;
