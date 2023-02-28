import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';





function StudentCart() {
  return (
    <div className="App">
         <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  <title>Cart</title>
  <link rel="icon" href="images/logo.png" type="image/png" sizes="16x16" />
  <link rel="stylesheet" href="css/main.min.css" />
  <link rel="stylesheet" href="css/header.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n\n/* Global settings */\n/* Global "table" column settings */\n    .header {\n      position: relative;\n      min-height: 10vh;\n      overflow-x: inherit;\n    }\n  \n.product-image {\n  float: left;\n  width: 20%;\n}\n\n.product-details {\n  float: left;\n  width: 37%;\n}\n\n.product-price {\n  float: left;\n  width: 12%;\n}\n\n.product-quantity {\n  float: left;\n  width: 10%;\n}\n\n.product-removal {\n  float: left;\n  width: 9%;\n}\n\n.product-line-price {\n  float: left;\n  width: 12%;\n  text-align: right;\n}\n\n/* This is used as the traditional .clearfix class */\n.group:before, .shopping-cart:before, .column-labels:before, .product:before, .totals-item:before,\n.group:after,\n.shopping-cart:after,\n.column-labels:after,\n.product:after,\n.totals-item:after {\n  content: \'\';\n  display: table;\n}\n\n.group:after, .shopping-cart:after, .column-labels:after, .product:after, .totals-item:after {\n  clear: both;\n}\n\n.group, .shopping-cart, .column-labels, .product, .totals-item {\n  zoom: 1;\n}\n\n/* Apply clearfix in a few places */\n/* Apply dollar signs */\n.product .product-price:before, .product .product-line-price:before, .totals-value:before {\n  content: \'$\';\n}\n\n/* Body/Header stuff */\nbody {\n  /* padding: 0px 30px 30px 20px; */\n  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 100;\n}\n\nh1 {\n  font-weight: 100;\n}\n\nlabel {\n  color: #aaa;\n}\n\n.shopping-cart {\n  margin-top: -45px;\n}\n\n/* Column headers */\n.column-labels label {\n  padding-bottom: 15px;\n  margin-bottom: 15px;\n  border-bottom: 1px solid #eee;\n}\n.column-labels .product-image, .column-labels .product-details, .column-labels .product-removal {\n  text-indent: -9999px;\n}\n\n/* Product entries */\n.product {\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee;\n}\n.product .product-image {\n  text-align: center;\n}\n.product .product-image img {\n  width: 100px;\n}\n.product .product-details .product-title {\n  margin-right: 20px;\n  font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium";\n}\n.product .product-details .product-description {\n  margin: 5px 20px 5px 0;\n  line-height: 1.4em;\n}\n.product .product-quantity input {\n  width: 40px;\n}\n.product .remove-product {\n  border: 0;\n  padding: 4px 8px;\n  background-color: rgb(90, 165, 226);\n  color: #fff;\n  font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium";\n  font-size: 12px;\n  border-radius: 3px;\n}\n.product .remove-product:hover {\n  background-color:  #007bff;\n}\n\n/* Totals section */\n.totals .totals-item {\n  float: right;\n  clear: both;\n  width: 100%;\n  /* margin-bottom: 10px; */\n}\n.totals .totals-item label {\n  float: left;\n  clear: both;\n  width: 79%;\n  text-align: right;\n}\n.totals .totals-item .totals-value {\n  float: right;\n  width: 21%;\n  text-align: right;\n}\n.totals .totals-item-total {\n  font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium";\n}\n\n.checkout {\n  float: right;\n  border: 0;\n  /* margin-top: 20px; */\n  padding: 6px 25px;\n  background-color: #007bff;\n  color: #fff;\n  font-size: 18px;\n  border-radius: 3px;\n}\n\n.checkout:hover {\n  background-color:rgb(90, 165, 226);\n}\n\n/* Make adjustments for tablet */\n@media screen and (max-width: 650px) {\n  .shopping-cart {\n    margin: 0;\n    padding-top: 20px;\n    border-top: 1px solid #eee;\n  }\n\n  .column-labels {\n    display: none;\n  }\n\n  .product-image {\n    float: right;\n    width: auto;\n  }\n  .product-image img {\n    margin: 0 0 10px 10px;\n  }\n\n  .product-details {\n    float: none;\n    margin-bottom: 10px;\n    width: auto;\n  }\n\n  .product-price {\n    clear: both;\n    width: 70px;\n  }\n\n  .product-quantity {\n    width: 100px;\n  }\n  .product-quantity input {\n    margin-left: 20px;\n  }\n\n  .product-quantity:before {\n    content: \'x\';\n  }\n\n  .product-removal {\n    width: auto;\n  }\n\n  .product-line-price {\n    float: right;\n    width: 70px;\n  }\n}\n/* Make more adjustments for phone */\n@media screen and (max-width: 350px) {\n  .product-removal {\n    float: right;\n  }\n\n  .product-line-price {\n    float: right;\n    clear: left;\n    width: auto;\n    margin-top: 10px;\n  }\n\n  .product .product-line-price:before {\n    content: \'Item Total: $\';\n  }\n\n  .totals .totals-item label {\n    width: 60%;\n  }\n  .totals .totals-item .totals-value {\n    width: 40%;\n  }\n}\n\n\n  .scroll {\n      overflow-y: scroll;\n      height: 306px;\n      width: 700px;\n      margin: 10px 5px; padding: 5px;\n      text-align: justify;\n  }\n  .scroll::-webkit-scrollbar {\n      width:5px;\n  }\n  .scroll::-webkit-scrollbar-track {\n      -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3); \n      border-radius:5px;\n  }\n  .scroll::-webkit-scrollbar-thumb {\n      border-radius:5px;\n      -webkit-box-shadow: inset 0 0 6px #007bff; \n  }\n  .responsive {\n\twidth: 100%;\n  max-width: 400px;\n  height: auto;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n \n  }\n  \n\n/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the "cart" column go on top) */\n@media (max-width: 800px) {\n  .row {\n    flex-direction: column-reverse;\n  }\n  .col-25 {\n    margin-bottom: 20px;\n  }\n}\n\n.navbar-brand {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t}\n\n\t\t.navbar-brand img {\n\t\t\twidth: 150px;\n\t\t\tmargin-right: 40px;\n\t\t}\n\n    .content {\n  padding: 2rem;\n}\n\n.btn {\n  padding: 0.5rem 1.5rem;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n}\n.view-button {\n  background-color: #47525e;\n}\n.update-button {\n  background-color: #d11a2a;\n}\n@media (max-width: 768px) {\n  .content {\n    padding-left: 10px;\n  }\n  .btn {\n    margin-bottom: 10px;\n  }\n  .filters {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n\n  '
    }}
  />
  {/*<div class="se-pre-con"></div>*/}
  
  <header style={{overflow:"inherit"}} className="header">
    <nav className="navbar">
      <img src="images/logo-escolar.png" width={150} height={40} alt="" />
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="./home.html" className="nav-link">
            Home
          </a>
        </li>
        <Link to={"/about"}>
        <li className="nav-item">
          <a href="./about.html" className="nav-link">
            About
          </a>
        </li></Link>
        <Link to={"/services"}>
        <li className="nav-item">
          <a href="./services.html" className="nav-link">
            Services
          </a>
        </li></Link>
        <Link to={"/contactus"}>
        <li className="nav-item">
          <a href="./contact.html" className="nav-link">
            Contact us
          </a>
        </li></Link>
        <li className="nav-item">
          <div className="nav-dropdown" id="nav-dropdown">
            <div className="role-title">
              Student
              <i className="fa fa-caret-down" />
            </div>
            <div className="dropdown-content">
              <a href="student.html" className="nav-link">
                Student
              </a>
              <a href="login.html">Logout</a>
            </div>
          </div>
        </li>
      </ul>
      <div className="hamburger">
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
    </nav>
  </header>
    <section>
      <div style={{ marginTop: "2%" }} className="container">
        <h2 style={{ fontSize: "25px",margin:"40px" }}>Cart</h2>
        <div className="shopping-cart" style={{ background: "#ffffff" }}>
          <div className="column-labels">
            <label className="product-image">Image</label>
            <label className="product-details">Product</label>
            <label className="product-price">Price</label>
            <label className="product-quantity">Quantity</label>
            <label className="product-removal">Remove</label>
            <label className="product-line-price">Total</label>
          </div>
          <div className="product">
            <div className="product-image">
              <img src="images/tee.png" />
            </div>
            <div className="product-details">
              <div className="product-title">Tshirt</div>
              <p className="product-description" />
            </div>
            <div className="product-price">12.99</div>
            <div className="product-quantity">
              <input type="number" defaultValue={2} min={1} />
            </div>
            <div className="product-removal">
              <button className="remove-product">Remove</button>
            </div>
            <div className="product-line-price">25.98</div>
          </div>
          <div className="product">
            <div className="product-image">
              <img src="images/hat.png" />
            </div>
            <div className="product-details">
              <div className="product-title">Backbag</div>
              <p className="product-description" />
            </div>
            <div className="product-price">15.99</div>
            <div className="product-quantity">
              <input type="number" defaultValue={1} min={1} />
            </div>
            <div className="product-removal">
              <button className="remove-product">Remove</button>
            </div>
            <div className="product-line-price">15.99</div>
          </div>
          <div className="totals">
            <div className="totals-item">
              <label>Subtotal</label>
              <div className="totals-value" id="cart-subtotal">
                41.97
              </div>
            </div>
            <div className="totals-item">
              <label>Tax (5%)</label>
              <div className="totals-value" id="cart-tax">
                3.60
              </div>
            </div>
            <div className="totals-item">
              <label>Shipping</label>
              <div className="totals-value" id="cart-shipping">
                15.00
              </div>
            </div>
            <div className="totals-item totals-item-total">
              <label>Grand Total</label>
              <div className="totals-value" id="cart-total">
                60.57
              </div>
            </div>
          </div>
          <a href="/studentcheckout"><button  className="checkout">Checkout</button></a>
        </div>
      </div>
    </section>
  
    </div>
  );
}

export default StudentCart;
