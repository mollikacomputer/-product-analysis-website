import React from "react";
import { useNavigate } from "react-router-dom";
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
        
      <button className="btn btn-dark btn-lg" > Show all</button>
      <div className="questions-answer">
      <section>
        <h6> Question 1. What is context API </h6>
        <p>
          React Context Api is easy to use alternative props dilling. Its easiest way to passing global variable or value around of parent to child and sibling components. 
          Context api provide some logic/function or global variable with around of his consumer. every consumer can received provider value. createContext() is building function its help for creatingContext api and useContext() function is can work like as receaver to receave value thats providing value. Context api making to share data to another react component. Its work like as tree example is Grand father to parent to me then child. 
        </p>
      </section>
      <section>
        <h6> Questions 2. Semantic tag </h6>
        <p>
          Simantic tag is Clear concept of matchine or people. Its comes from html5. This tag is matchine or people readable. Its helpfull for google robot to make google seo ranking another important things is disable people helps to read a simantic taging website. Simantic tag example is 1. header 2. footer 3. article 4. section 5, main  6, mark, 7. nav  8.  summary  9. time , 10,  title etc.
        </p>
      </section>
      </div>
    </>
  );
};

export default Home;
