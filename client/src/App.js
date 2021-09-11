import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";
import Header from "./Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Product from "./Components/Product";
import CheckOut from "./Components/CheckOut";
import ProductAdd from "./Components/Admin/ProductAdd";
import ProductList from "./Components/Admin/ProductList";
import OrderList from "./Components/Admin/OrderList";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/checkOut" exact component={CheckOut} />
          <Route path="/product/add" component={ProductAdd} />
          <Route path="/product/list" component={ProductList} />
          <Route path="/order/list" component={OrderList} />
          <Route path="/product/:id" component={Product} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
