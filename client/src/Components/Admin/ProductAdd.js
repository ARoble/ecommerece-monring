import axios from "axios";
import { useState } from "react";
import AdminNav from "./AdminNav";
import { addProduct } from "../../Services/API";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
function ProductAdd() {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    category: "",
    quantity: 0,
    description: "",
    image: "",
  });
  let history = useHistory();
  function save(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("category", product.category);
    formData.append("quantity", product.quantity);
    formData.append("description", product.description);
    formData.append("image", product.image);

    addProduct(formData).then((res) => console.log(res));
    toast.success("Product added");
    history.push("/product/list");
  }

  return (
    <div className="container flex">
      <AdminNav />
      <div className="admin-section">
        <form className="product-form" enctype="multipart/form-data">
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
          <input
            type="file"
            name="image"
            onChange={(e) => {
              setProduct({ ...product, image: e.target.files[0] });
            }}
          />
          <button className="btn-review hover" onClick={(e) => save(e)}>
            Save Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductAdd;
