import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={`http://localhost:8000/${product.image}`} alt="product" />
      </div>
      <div className="product-details flex">
        <div>
          <Link className="link" to={`/product/${product._id}`}>
            <h3>{product.name}</h3>
          </Link>
          <span>${product.price}</span>
        </div>
        <MdAddShoppingCart className="cart-hover" size={"33px"} />
      </div>
    </div>
  );
}

export default ProductCard;
