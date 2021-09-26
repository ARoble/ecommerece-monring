import axios from "axios";
import { useState, useEffect } from "react";
import AdminNav from "./AdminNav";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
function ProductEdit() {
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => setProduct(res.data.data));
  }, []);

  function editProduct(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/product/${id}`, product)
      .then((res) => {
        toast.success("Edited Product");
        history.push("/product/list");
      })
      .catch((e) => toast.error(e.response.data.message));
  }

  return (
    <div className="container flex">
      <AdminNav />
      <div className="admin-section">
        <form className="product-form" enctype="multipart/form-data">
          <h2 className="admin-heading">Edit Product</h2>
          <input
            type="text"
            className="input"
            placeholder="Product Name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
          <input
            type="text"
            className="input"
            placeholder="Product Category"
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
          />
          <input
            type="text"
            className="input"
            placeholder="Product Price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
          <input
            type="text"
            className="input"
            placeholder="Product Quantity"
            value={product.quantity}
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
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          ></textarea>
          <input type="file" name="image" />
          <button className="btn-review hover" onClick={(e) => editProduct(e)}>
            Edit Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductEdit;
