import { MdStar } from "react-icons/md";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ReviewForm() {
  const [stars, setStars] = useState(1);
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const { id } = useParams();

  function saveReview() {
    //code
    axios
      .post("http://localhost:8000/api/review/", {
        title,
        review,
        rating: stars,
        product: id,
        user: "612c9a9c2bd6126e2ae26dd8",
      })
      .then((res) => console.log(res));
  }

  return (
    <div className="review-form">
      <h3>Add a new review</h3>
      <div className="flex add-review">
        <input
          type="text"
          Placeholder="Review Title"
          className="input"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          <MdStar
            className={stars >= 1 ? "review-star star" : "review-star"}
            onClick={() => setStars(1)}
          />
          <MdStar
            className={stars >= 2 ? "review-star star" : "review-star"}
            onClick={() => setStars(2)}
          />
          <MdStar
            className={stars >= 3 ? "review-star star" : "review-star"}
            onClick={() => setStars(3)}
          />
          <MdStar
            className={stars >= 4 ? "review-star star" : "review-star"}
            onClick={() => setStars(4)}
          />
          <MdStar
            className={stars >= 5 ? "review-star star" : "review-star"}
            onClick={() => setStars(5)}
          />
        </div>
        <textarea
          placeholder="Review"
          rows="4"
          onChange={(e) => setReview(e.target.value)}
        />
        <button className="btn-review hover" onClick={() => saveReview()}>
          Submit Review
        </button>
      </div>
    </div>
  );
}

export default ReviewForm;
