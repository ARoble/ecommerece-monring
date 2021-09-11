import axios from "axios";
import { useState } from "react";
import AdminNav from "./AdminNav";
function ProductAdd() {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    category: "",
    quantity: 0,
    description: "",
    image: "image",
  });

  function save(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/product/", product)
      .then((res) => console.log(res));
  }

  return (
    <div className="container flex">
      <AdminNav />
      <div className="admin-section">
        <form className="product-form">
          <h2 className="admin-heading">Add Product</h2>
          <input
            type="text"
            className="input"
            placeholder="Product Name"
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
          <input
            type="text"
            className="input"
            placeholder="Product Category"
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
          />
          <input
            type="text"
            className="input"
            placeholder="Product Price"
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
          <input
            type="text"
            className="input"
            placeholder="Product Quantity"
            onChange={(e) =>
              setProduct({ ...product, quantity: e.target.value })
            }
          />
          <textarea
            type="text"
            className="input"
            rows="4"
            cols="28"
            placeholder="Product Description"
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          ></textarea>
          <input type="file" placeholder="Image " />
          <button className="btn-review hover" onClick={(e) => save(e)}>
            Save Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductAdd;
