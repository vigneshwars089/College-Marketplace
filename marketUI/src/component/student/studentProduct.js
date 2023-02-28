import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

import '../../css/newstyles.css'
import '../../css/styles.css' 
import '../../css/header.css'
import '../../css/services.css'
import '../../css/responsive.css'


function StudentProduct() {
  return (
    <div className="App">
         <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css/manage-products.css" />
  <link rel="stylesheet" href="css/manage-advertisements.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link rel="icon" href="images/logo.png" type="image/png" sizes="16x16" />
  <link rel="stylesheet" href="css/main.min.css" />
  <link rel="stylesheet" href="css/responsive.css" />
  {/* slider stylesheet */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css"
  />
  <link rel="stylesheet" href="css/header.css" />
  <link rel="stylesheet" type="text/css" href="css/style2.css" />
  {/* fonts style */}
  <link
    href="https://fonts.googleapis.com/css?family=Baloo+Chettan|Poppins:400,600,700&display=swap"
    rel="stylesheet"
  />
  {/* Custom styles for this template */}
  {/* responsive style */}
  <link href="css/responsive1.css" rel="stylesheet" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
  />
  <link rel="stylesheet" href="css/styles.css" />
  <title>Product Description</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    .header {\n      position: relative;\n      min-height: 10vh;\n      overflow-x: inherit;\n    }\n  "
    }}
  />
  <header className="header">
    <nav className="navbar">
      <img src="images/logo-escolar.png" width={150} height={40} alt="" />
      <ul className="nav-menu">
        <li className="nav-item"> <Link to={"/studenthome"}>
          <a href="./home.html" className="nav-link">
            Home
          </a></Link>
        </li>
        <li className="nav-item"> <Link to={"/about"}>
          <a href="./about.html" className="nav-link">
            About
          </a></Link>
        </li>
        <li className="nav-item"> <Link to={"/services"}>
          <a href="./services.html" className="nav-link">
            Services
          </a></Link>
        </li>
        <li className="nav-item"> <Link to={"/contactus"}>
          <a href="./contact.html" className="nav-link">
            Contact us
          </a></Link>
        </li>
        <li className="nav-item"> <Link to={"/studentcart"}>
          <a className="nav-link" href="cart.html">
            <i className="bx bx-cart" />
          </a></Link>
        </li>
        <li className="nav-item">
          <div className="nav-dropdown" id="nav-dropdown">
            <div className="role-title">
              Student
              <i className="fa fa-caret-down" />
            </div>
            <div className="dropdown-content">
              <a className="nav-link">
              <Link to={"/studenthome"}>Student</Link>
              </a>
              <a >  <Link to={"/login"}>Logout</Link></a>
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
  <section className="section product-detail">
    <div className="details container">
      <div className="left image-container">
        <div className="main">
          <img src="./images/product1.webp" id="zoom" alt="" />
        </div>
      </div>
      <div className="right">
        <span>Home/Shirt</span>
        <h1>Casual Short-Sleeved Shirt</h1>
        <div className="price">$50</div>
        <br />
        <div className="right">
          <form>
            <select>
              <option value={1}>Select Size</option>
              <option value={2}>32</option>
              <option value={3}>36</option>
              <option value={4}>38</option>
              <option value={5}>40</option>
              <option value={6}>42</option>
            </select>
            <i className="bx bx-chevron-down" />
          </form>
          <form className="form">
            <input type="text" placeholder={1} />
            <a href="cart.html" className="addCart">
              Add To Cart
            </a>
          </form>
        </div>
        <h3>Product Detail</h3>
        <p>
          Its a unique colored Regular wear shirt with Short-Sleeved and its
          suitable for daily, vacation wear. The pattern used here is Striped
          and Geometric one and suitable for summer season
        </p>
      </div>
    </div>
  </section>
</>

    </div>
  );
}

export default StudentProduct;
