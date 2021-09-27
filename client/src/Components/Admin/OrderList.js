import AdminNav from "./AdminNav";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdDone, MdVisibility } from "react-icons/md";

import { fetchOrders } from "../../Services/API";

function OrderList() {
  const [orders, setOrders] = useState([]);
  const [selected, setSelected] = useState();
  const [info, setInfo] = useState(false);
  useEffect(() => {
    fetchOrders().then((res) => setOrders(res.data.orders));
  }, []);
  return (
    <div className="container flex" style={{ position: "realtive" }}>
      <AdminNav />
      {info === true && OrderInfo()}
      <div className="admin-section">
        <h2 className="admin-heading">Order List</h2>
        <table>
          <tr>
            <th>Customer Name</th>
            <th>Total Order</th>
            <th>View Order</th>
            <th>FullFilled</th>
          </tr>
          {orders.map((order) => (
            <tr>
              <td>{order.firstName}</td>
              <td>${order.total}</td>
              <td>
                <MdVisibility
                  onClick={() => {
                    setInfo(true);
                    setSelected(order);
                  }}
                />
              </td>
              <td>
                <MdDone />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );

  function OrderInfo() {
    return (
      <div
        style={{
          position: "absolute",
          background: "grey",
          width: "300px",
          height: "400px",
          marginLeft: "240px",
        }}
      >
        <button onClick={() => setInfo(false)}>Close</button>
        <h3>Order Information</h3>
        {selected.firstName}
        {selected.cart.map((order) => (
          <>
            <h4>{order.name}</h4>
            <h4>{order.quantity}</h4>
            <h4>{order.price}</h4>
          </>
        ))}
        <h4>Total: {selected.total}</h4>
      </div>
    );
  }
}

export default OrderList;
