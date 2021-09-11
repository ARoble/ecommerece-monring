import { MdStar, MdShoppingBasket } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Review from "./Review";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [stars, setStars] = useState(1);
  useEffect(() => {
    //code
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => setProduct(res.data.data));
  });

  return (
    <div className="container ">
      <div className="flex">
        <div className="details-image">
          <img src="./../iphone.png" alt="iphone" />
        </div>
        <div className="details-desc">
          <h2>{product.name}</h2>
          <span>
            <b>${product.price}</b>
          </span>
          <div>
            <button className="btn-qty">-</button>0
            <button className="btn-qty">+</button>
          </div>
          <button className="btn-addCart hover">
            <MdShoppingBasket />
          </button>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex">
        <div className="review-list">
          <h3>Latest Reviews</h3>
          <Review />
        </div>

        <div className="review-form">
          <h3>Add a new review</h3>
          <div className="flex add-review">
            <input type="text" Placeholder="Review Title" className="input" />
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
              <MdStar className="review-star " />
              <MdStar className="review-star " />
            </div>
            <textarea placeholder="Review" rows="4" />
            <button className="btn-review hover">Submit Review</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
