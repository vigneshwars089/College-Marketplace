import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import $ from "jquery";
import { useState,useEffect } from 'react';
import '../../css/newstyles.css'
import '../../css/styles.css' 
import '../../css/header.css'
import '../../css/services.css'
import '../../css/responsive.css'
import '../../css/style2.css'
import axios from "axios";

function BusinessRemoveProduct() {

  const [product, setProduct] = useState([]);
  const [psw, setPsw] = useState("");
  useEffect(()=>{
    const currentUser = window.sessionStorage.getItem("userEmail");
    const role = window.sessionStorage.getItem("role");

    const fetchData = async () => {
      try{
        const res= await axios.post('http://localhost:8000/api/getproductsByUser/',null, {params: {
          createdBy:currentUser
      } })
      console.log(res.data); 
      setProduct(res.data.products); 

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

  function removeprod(e){
    console.log( e.target.name);
    const paramet=e.target.name;
    const currentUser = window.sessionStorage.getItem("userEmail");
    const fetchData = async () => {
      try{
        const res= await axios.post('http://localhost:8000/api/removeproduct',null, {params: {
          productId:e.target.name
      } })
      console.log(res.data); 
    }catch (error) {
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
      }
      window.location.reload();
      alert("Product deleted successfully");
      }
      fetchData();
 
  }
  return (
    <div className="App">

  <header style={{overflowX:"inherit"}}  className="header">
    <nav className="navbar">
      <img src="images/logo-escolar.png" width={150} height={40} alt="" />
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="/businesshome" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/services" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            Contact us
          </a>
        </li>
        <li className="nav-item">
          <div className="nav-dropdown" id="nav-dropdown">
            <div className="role-title">
              Business Owner
              <i className="fa fa-caret-down" />
            </div>
            <div className="dropdown-content">
              <a href="/businesshome" className="nav-link">
                Business Owner
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
  <div style={{fontSize:"2rem"}}  className="main-div">
    <div>
      <br />
      <div className="sub-title">
        <b>Remove Product</b>
      </div>
      <form>
        <div className="buy-product">
          <div className="single-option">
            <div style={{marginTop:"10px"}}>
              <label htmlFor="da-product-name" style={{ fontSize: 15 }}>
                Select a product to remove
              </label>
            </div>
            <div style={{marginTop:"10px"}}>
            <ul>
                {product.map(c => (  <li key={c.productId}>
                <option name={c.productName} value={c.productName}>{c.productName}</option><div><button name={c.productId} type="button" onClick={removeprod}>
                Remove
              </button></div></li> ))}</ul>
            </div>
            {/* <div style={{marginTop:"10px"}}>
              <select
                name="da-product-name"
                id="da-product-name"
                title="select a product"
                required=""
              >
                <option disabled="" selected="" value="">
                  -- Select a Category --
                </option>
                <option value="c1">c1</option>
                <option value="c2">c2</option>
                <option value="c3">c3</option>
              </select>
            </div> */}
            {/* <div style={{marginTop:"10px"}}>
              <select
                name="da-product-name"
                id="da-product-name"
                title="select a product"
                required=""
              >
                <option disabled="" selected="" value="">
                  -- Quantity --
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div> */}
          </div>
          <div style={{marginTop:"10px"}} className="button-div">
            <div >
              {/* <button type="buy" className="delete-btn">
                Remove
              </button> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>



    </div>
  );
}

export default BusinessRemoveProduct;
