import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReviewsContext } from "../contexts/Reviews";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const { reviews } = useContext(ReviewsContext);
  let navigate = useNavigate();
  return (
    <section className="reviews">
      <br />
      <button
        className="reviews_add_button"
        onClick={() => {
          navigate("/reviews/add");
        }}>
        Add Review
      </button>
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </section>
  );
};

export default Reviews;
