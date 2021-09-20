import { useState, useEffect } from "react";
import axios from "axios";
function CheckOut() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(false);
  const [shipping, setShipping] = useState({
    firstName: "",
    secondName: "",
    email: "",
    shipping: "",
    phone: "",
  });
  const [cart, setCart] = useState();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setCart(cart);
    setLoading(false);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      // total += cart[i].quantity * cart[i].price;
      total += cart[i].quantity * cart[i].price;
    }
    setTotal(total);
  }, []);
  function placeOrder() {
    const data = { ...shipping, cart, total };
    axios.post("http://localhost:8000/api/order", data);
    localStorage.removeItem("cart");
  }
  return <div>{loading === true ? <h1>Loading..</h1> : render()}</div>;

  function render() {
    return (
      <div className="container ">
        <h1 className="admin-heading">CheckOut</h1>
        <div className="checkout">
          <table>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>

            {cart.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.quantity * item.price}</td>
              </tr>
            ))}
            <tr className="table-total">
              <td colspan="2"></td>
              <td>TOTAL</td>
              <td>{total}</td>
            </tr>
          </table>
          <div className="flex" style={{ justifyContent: "flex-end" }}>
            {info ? (
              <button
                className="btn-checkout"
                style={{ background: "red" }}
                onClick={() => setInfo(false)}
              >
                close
              </button>
            ) : (
              <button className="btn-checkout" onClick={() => setInfo(true)}>
                Proceed to checkout
              </button>
            )}
          </div>
        </div>
        {info && form()}
      </div>
    );
  }

  function form() {
    return (
      <div className="flex shipping-info">
        <div className="shipping-form">
          <h3>Shipping information</h3>
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="input"
              onChange={(e) =>
                setShipping({ ...shipping, firstName: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Second Name"
              className="input"
              onChange={(e) =>
                setShipping({ ...shipping, secondName: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="input"
              onChange={(e) =>
                setShipping({ ...shipping, email: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Shipping Address"
              className="input"
              onChange={(e) =>
                setShipping({ ...shipping, shipping: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone Number"
              className="input"
              onChange={(e) =>
                setShipping({ ...shipping, phone: e.target.value })
              }
            />
          </div>
          <div>
            <button
              className="btn-checkout"
              style={{ float: "right" }}
              onClick={() => placeOrder()}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckOut;
