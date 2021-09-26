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
import ReviewForm from "./ReviewForm";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [review, setReview] = useState([]);
  const [qty, setQty] = useState(0);
  useEffect(() => {
    //code
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => setProduct(res.data.data));

    axios
      .get(`http://localhost:8000/api/review/${id}`)
      .then((res) => setReview(res.data.reviews));
  });

  function addCart(product) {
    //code
    const cart = localStorage.getItem("cart");
    if (cart === null) {
      product.quantity = qty;
      let item = [product];
      localStorage.setItem("cart", JSON.stringify(item));
    } else {
      let prevItem = JSON.parse(localStorage.getItem("cart"));
      product.quantity = qty;
      let items = [...prevItem, product];
      localStorage.setItem("cart", JSON.stringify(items));
    }
  }

  return (
    <div className="container ">
      <div className="flex">
        <div className="details-image">
          <img src={`http://localhost:8000/${product.image}`} alt="iphone" />
        </div>
        <div className="details-desc">
          <h2>{product.name}</h2>
          <span>
            <b>${product.price}</b>
          </span>
          <div>
            <button
              className="btn-qty"
              onClick={() => qty > 0 && setQty(qty - 1)}
            >
              -
            </button>
            {qty}
            <button
              className="btn-qty"
              onClick={() => qty < product.quantity && setQty(qty + 1)}
            >
              +
            </button>
          </div>
          {qty > 0 && (
            <button
              className="btn-addCart hover"
              onClick={() => addCart(product)}
            >
              <MdShoppingBasket />
            </button>
          )}
          <p>{product.description}</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex">
        <div className="review-list">
          <h3>Latest Reviews</h3>
          {review.map((review) => (
            <Review review={review} />
          ))}
        </div>
        <ReviewForm />
      </div>
    </div>
  );
}

export default Product;
