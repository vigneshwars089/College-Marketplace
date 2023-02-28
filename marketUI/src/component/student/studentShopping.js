import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { useState,useEffect } from 'react';
import axios from "axios";
import '../../css/newstyles.css'
import '../../css/styles.css' 
import '../../css/header.css'
import '../../css/services.css'
import '../../css/responsive.css'
import { useNavigate } from 'react-router-dom';


function StudentShopping() {

  const [product, setProduct] = useState([]);
  const [product1, setProduct1] = useState([]);
  const [product2, setProduct2] = useState([]);
  const [product3, setProduct3] = useState([]);

  const [psw, setPsw] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    const currentUser = window.sessionStorage.getItem("userEmail");
    const role = window.sessionStorage.getItem("role");

    const fetchData = async () => {
      try{
        const res= await axios.get('http://localhost:8000/api/getproducts',null, {params: {
          createdBy:currentUser
      } })
      const filtered =res.data.products;
      const clist=filtered.filter( (car) => car.category === "clothing");
      const elist=filtered.filter( (car) => car.category === "electronics");
      const blist=filtered.filter( (car) => car.category === "books");
      const olist=filtered.filter( (car) => car.category === "others");
      console.log(clist);
      console.log(elist);
      console.log(blist);
      console.log(res.data);
      setProduct(clist);
      setProduct1(elist);
      setProduct2(blist);
      setProduct3(olist); 
    }catch (error) {
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
      
      }
      }
      fetchData();
  //   $.ajax({
  //     type: "GET",
  //     url: 'http://localhost:8000/listproduct.php',
  //     data:{ 
  //       createdBy: currentUser, 
  //       role: role
  //     },
  //     dataType:"json",
  //     success(data) {
  //       console.log('success');
  //       console.log(JSON.stringify(data));
  //       const stringifiedData=JSON.stringify(data);
  //       //console.log(stringifiedData);
  //       setProduct(data); // will print "message"
  //     }
  // });
  },
  
  
  [])

  function checkout(e){
    console.log(e.target.getAttribute('name'));
    const paramet=e.target.getAttribute('name');
    window.sessionStorage.setItem("pname",paramet);
    const currentUser = window.sessionStorage.getItem("userEmail");
    const fetchData = async () => {
      try{
        const res= await axios.post('http://localhost:8000/api/buyproduct',null, {params: {
          productName:paramet,createdBy:currentUser,isPlaced:0
      } })
      console.log(res.data); 
    }catch (error) {
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
      }
      navigate("/studentcheckout"); 
      //window.location.reload();
      //alert("Product ordered successfully");
      }
      fetchData();
 
  }
  return (
    <div className="App">
          <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* Box icons */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
  />
  {/* Custom StyleSheet */}
  <link rel="stylesheet" href="css/styles.css" />
  <link rel="stylesheet" href="css/responsive.css" />
  <link rel="stylesheet" href="css/newstyles.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
  dangerouslySetInnerHTML={{
    __html:
      "\n\nli {\n    list-style: none;\n}\n\n.header {\n    background-color: #0096ff;\n    border-bottom: 1px solid #e2e8f0;\n    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;\n}\n\n.navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 1rem;\n}\n\n.hamburger {\n    display: none;\n}\n\n.bar {\n    display: block;\n    width: 25px;\n    height: 3px;\n    margin: 5px auto;\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n    background-color: #101010;\n}\n\n\n.nav-menu {\n    display: flex;\n    align-items: center;\n    margin-right: 2rem;\n}\n\n.nav-item {\n    margin-left: 1rem;\n    margin-top: 0.5rem;\n    font-size: 18px;\n}\n\n.nav-link {\n    color: #000;\n}\n\n.nav-link-active {\n    background-color: #76c893;\n    color: #fff;\n}\n\n.nav-link:hover {\n    color: #ffff;\n}\n\n.nav-logo {\n    font-size: 25px;\n    background: #76c0c80b;\n    color: #ffffff;\n    padding: 0.5rem;\n    border-radius: 5px;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n}\n\n.dropdown-content a {\n    float: none;\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n    text-align: left;\n}\n\n.dropdown-content a:hover {\n    background-color: #ddd;\n}\n\n.nav-dropdown:hover .dropdown-content {\n    display: block;\n}\n/* \nbody {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    font-size: 20px;\n    font-family: Helvetica, Arial, sans-serif;\n    color: #47525e;\n    height: 100%;\n} */\n"
  }}
/>
  <title>Products</title>
  <header style={{overflow:"inherit"}} className="header">
    <nav className="navbar">
      <img src="images/logo-escolar.png" width={150} height={40} alt="" />
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="./studenthome" className="nav-link">
            Home
          </a>
        </li>
        <Link to={"/about"}>
        <li className="nav-item">
          <a href="./aboutus" className="nav-link">
            About
          </a>
        </li></Link>
        <Link to={"/services"}>
        <li className="nav-item">
          <a href="./services" className="nav-link">
            Services
          </a>
        </li></Link>
        <Link to={"/contactus"}>
        <li className="nav-item">
          <a href="./contactus" className="nav-link">
            Contact us
          </a>
        </li></Link>
        {/* <Link to={"/studentcart"}>
        <li className="nav-item">
        <a href="/studentcart" class="icon">
                <i class="bx bx-cart"></i></a>
        </li></Link> */}
        <li className="nav-item">
          <div className="nav-dropdown" id="nav-dropdown">
            <div className="role-title">
              Student
              <i className="fa fa-caret-down" />
            </div>
            <div className="dropdown-content">
              <a href="studenthome" className="nav-link">
                Student
              </a>
              <a href="/login">Logout</a>
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
  <section style={{overflow:"inherit",
    overflowY: "scroll",
    position: "relative",height: "706px"}} className="section all-products" id="products">
    <div className="top container">
      <h1>All Products</h1>
      {/* <form>
        <select>
          <option value={1}>Defualt Sorting</option>
          <option value={2}>Sort By Price</option>
          <option value={3}>Sort By Popularity</option>
          <option value={4}>Sort By Sale</option>
          <option value={5}>Sort By Rating</option>
        </select>
        <span>
          <i className="bx bx-chevron-down" />
        </span>
      </form> */}
    </div>
    <div className="product-center container">
      {/* <div className="product-item">
        <div className="overlay">
          <a href="productDetails.html" className="product-thumb">
          </a>
         
        </div>
        <div className="product-info">
          <span>MEN'S CLOTHES</span>
          <a>Casual Short-Sleeved Shirt</a>
          <h4>50</h4>
        </div>
        <ul className="icons">
          <li>
          <a href="./studentcheckout">
            <i className="bx bx-cart" /></a>
          </li>
        </ul>
      </div> */}



      <ul>
                {product.map(c => (  <li key={c.productId}>
                <option name={c.productName} value={c.productName}>{c.category}</option>
                <div className="product-item">
        <div className="overlay">
          <a  className="product-thumb">
          <img src="./images/product1.webp" alt="" />
          </a>
        </div>
        <div className="product-info">
          {/* <span>MEN'S CLOTHES</span> */}
          <a>{c.productName}</a>
          <h4>{c.price}</h4>
        </div>
        <ul className="icons">
          <li>
          <a  name={c.productName}>
            {/* <button  type="button"></button> */}
            <i onClick={checkout} name={c.productName} className="bx bx-cart" /></a>
          </li>
        </ul>
      </div>
                {/* <div><button name={c.productId} type="button">
                Remove
              </button></div> */}
              </li> ))}</ul>
              <ul>
                {product1.map(c => (  <li key={c.productId}>
                <option name={c.productName} value={c.productName}>{c.category}</option>
                <div className="product-item">
        <div className="overlay">
          <a  className="product-thumb">
          <img src="./images/product2.webp" alt="" />
          </a>
        </div>
        <div className="product-info">
          {/* <span>MEN'S CLOTHES</span> */}
          <a>{c.productName}</a>
          <h4>{c.price}</h4>
        </div>
        <ul className="icons">
          <li>
          <a  name={c.productName}>
            {/* <button  type="button"></button> */}
            <i onClick={checkout} name={c.productName} className="bx bx-cart" /></a>
          </li>
        </ul>
      </div>
                {/* <div><button name={c.productId} type="button">
                Remove
              </button></div> */}
              </li> ))}</ul>
              <ul>
                {product2.map(c => (  <li key={c.productId}>
                <option name={c.productName} value={c.productName}>{c.category}</option>
                <div className="product-item">
        <div className="overlay">
          <a  className="product-thumb">
          <img src="./images/product4.jpg" alt="" />
          </a>
        </div>
        <div className="product-info">
          {/* <span>MEN'S CLOTHES</span> */}
          <a>{c.productName}</a>
          <h4>{c.price}</h4>
        </div>
        <ul className="icons">
          <li>
          <a  name={c.productName}>
            {/* <button  type="button"></button> */}
            <i onClick={checkout} name={c.productName} className="bx bx-cart" /></a>
          </li>
        </ul>
      </div>
                {/* <div><button name={c.productId} type="button">
                Remove
              </button></div> */}
              </li> ))}</ul>
              <ul>
                {product3.map(c => (  <li key={c.productId}>
                <option name={c.productName} value={c.productName}>{c.category}</option>
                <div className="product-item">
        <div className="overlay">
          <a  className="product-thumb">
          <img src="./images/product3.webp" alt="" />
          </a>
        </div>
        <div className="product-info">
          {/* <span>MEN'S CLOTHES</span> */}
          <a>{c.productName}</a>
          <h4>{c.price}</h4>
        </div>
        <ul className="icons">
          <li>
          <a  name={c.productName}>
            {/* <button  type="button"></button> */}
            <i onClick={checkout} name={c.productName} className="bx bx-cart" /></a>
          </li>
        </ul>
      </div>
                {/* <div><button name={c.productId} type="button">
                Remove
              </button></div> */}
              </li> ))}</ul>




      {/* <div className="product-item">
        <div className="overlay">
          <a href="" className="product-thumb">
            <img src="./images/product2.webp" alt="" />
          </a>
          <span className="discount">10%</span>
        </div>
        <div className="product-info">
          <span>BACKPACK</span>
          <a href="">Medium 25 L Laptop Backpack(Blue)</a>
          <h4>$150</h4>
        </div>
        <ul className="icons">
          <li>
          <a href="./studentcheckout">
            <i className="bx bx-cart" /></a>
          </li>
        </ul>
      </div> */}
      {/* <div className="product-item">
        <div className="overlay">
          <a href="" className="product-thumb">
            <img src="./images/product3.webp" alt="" />
          </a>
        </div>
        <div className="product-info">
          <span>ELECTRONICS</span>
          <a href="">Beats Studio3 Wireless HeadPhone</a>
          <h4>$85</h4>
        </div>
        <ul className="icons">
          <li><a href="./studentcheckout">
            <i className="bx bx-cart" /></a>
          </li>
        </ul>
      </div> */}
      {/* <div className="product-item">
        <div className="overlay">
          <a href="" className="product-thumb">
            <img src="./images/product4.jpg" alt="" />
          </a>
        </div>
        <div className="product-info">
          <span>BOOKS</span>
          <a href="">The Wish - by Nicholas Sparks</a>
          <h4>$20</h4>
        </div>
        <ul className="icons">
          <li>
          <a href="./studentcheckout">
            <i className="bx bx-cart" /></a>
          </li>
        </ul>
      </div> */}
    </div>
  </section>
  <section className="pagination">
    <div className="container">
      <span>1</span> <span>2</span> <span>3</span>
      <span>
        <i className="bx bx-right-arrow-alt" />
      </span>
    </div>
  </section>
    </div>
  );
}

export default StudentShopping;
