import { MdAddShoppingCart, MdCopyright } from "react-icons/md";

function Home() {
  return (
    <>
      <div className="flex main-banner">
        <div className="featured-product">
          <img
            src="./iphone.jpg"
            alt="fetured product"
            className="featured-image"
          />
        </div>
        <div className="featured-info">
          <div className="featured-text">
            <span>50% off DISCOUNT!!</span>
            <h1>Iphone X</h1>
            <h3>$480.98</h3>
            <p>
              some description about the product some description about the
              product some description about the product some description about
              the product
            </p>
            <button className="btn-feature hover">See Product</button>
          </div>
        </div>
      </div>

      <div className="product-list ">
        <div className="container">
          <div className="flex heading">
            <h2>Deals of the day</h2>
            <span>See all</span>
          </div>
          <div className="deals flex">
            <div className="product-card">
              <div className="product-image">
                <img src="./iphone.png" alt="product" />
              </div>
              <div className="product-details flex">
                <div>
                  <h3>Iphone X Pro</h3>
                  <span>$890</span>
                </div>
                <MdAddShoppingCart className="cart-hover" size={"33px"} />
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src="./iphone.png" alt="product" />
              </div>
              <div className="product-details flex">
                <div>
                  <h3>Iphone X Pro</h3>
                  <span>$890</span>
                </div>
                <MdAddShoppingCart className="cart-hover" size={"33px"} />
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src="./iphone.png" alt="product" />
              </div>
              <div className="product-details flex">
                <div>
                  <h3>Iphone X Pro</h3>
                  <span>$890</span>
                </div>
                <MdAddShoppingCart className="cart-hover" size={"33px"} />
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src="./iphone.png" alt="product" />
              </div>
              <div className="product-details flex">
                <div>
                  <h3>Iphone X Pro</h3>
                  <span>$890</span>
                </div>
                <MdAddShoppingCart className="cart-hover" size={"33px"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="product-list ">
        <div>
          <h2>Deals of the day</h2>
          <h2>See all</h2>
        </div>
        <div className="container flex">
          <div className="product-card">
            <div className="product-image">
              <img src="./product-1.jpg" alt="product" />
            </div>
            <h3>Iphone X Pro</h3>
            <span>$890</span>
            <MdAddShoppingCart />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
