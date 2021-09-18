import { useState, useEffect } from "react";

function CheckOut() {
  const [loading, setLoading] = useState(true);
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
            <button className="btn-checkout">Proceed to checkout</button>
          </div>
        </div>
        <div className="flex shipping-info">
          <div className="shipping-form">
            <h3>Shipping information</h3>
            <div>
              <input type="text" placeholder="First Name" className="input" />
            </div>
            <div>
              <input type="text" placeholder="Second Name" className="input" />
            </div>
            <div>
              <input type="text" placeholder="Email" className="input" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Shipping Address"
                className="input"
              />
            </div>
            <div>
              <input type="text" placeholder="Phone Number" className="input" />
            </div>
            <div>
              <button className="btn-checkout" style={{ float: "right" }}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckOut;
