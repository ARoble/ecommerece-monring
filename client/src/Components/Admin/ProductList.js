import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import AdminNav from "./AdminNav";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function ProductList() {
  const [products, setProducts] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/")
      .then((res) => setProducts(res.data.products));
  });
  function deleteProduct(id) {
    //code

    axios.delete(`http://localhost:8000/api/product/${id}`).then((res) => {
      toast.success("Product Deleted");
      history.push("/product/list");
    });
  }
  return (
    <div className="container flex">
      <AdminNav />
      <div className="admin-section">
        <h2 className="admin-heading">Product List</h2>
        <table>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {products.map((product) => (
            <tr>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`/product/edit/${product._id}`}>
                  <MdModeEdit />
                </Link>
              </td>
              <td>
                <MdDelete onClick={() => deleteProduct(product._id)} />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default ProductList;
