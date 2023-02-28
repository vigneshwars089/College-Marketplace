import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import $ from "jquery";
import '../../css/newstyles.css'
import '../../css/styles.css' 
import '../../css/header.css'
import '../../css/services.css'
import '../../css/responsive.css'
import '../../css/style2.css'
import { useState } from 'react';
import axios from "axios";

function BusinessAddProduct() {

  const [pname, setPname] = useState("");
  const [pdesc, setpdesc] = useState("");
  const [quantity, setquantity] = useState("");
  const [price, setprice] = useState("");
 
  const [result, setResult] = useState("");
  const [category, setcategory] = useState("");

  const [state, setState] = React.useState({
    pname: "",
    pdesc: "",
    quantity: "",
    price: "",
    result: "",
    
  })
  const handleChange1 = (e) => {
    setPname(e.target.value);
  };

  const handleChange2 = (e) => {
    setpdesc(e.target.value);
  };
  const handleChange3 = (e) => {
    setprice(e.target.value);
  };
  // const handleChange4 = (e) => {
  //   setprice(e.target.value);
  // };
  const handleChange5 = (e) => {
    setResult(e.target.value);
  };
  const handleChange6 = (e) => {
    setcategory(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const currentUser = window.sessionStorage.getItem("userEmail");
    const role = window.sessionStorage.getItem("role");
    const form = $(e.target);
    const fetchData = async () => {
      try{
        const res= await axios.post('http://localhost:8000/api/addproduct',null, {params: {
          productName:pname,productDesc:pdesc,price:price,category:"category",createdBy:currentUser,role:role
      } })
      console.log(res.data); 
    }catch (error) {
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
      }
      window.location.reload();
      alert("Product added successfully");
      }
      fetchData();
    
    // $.ajax({
    //     type: "POST",
    //     url: form.attr("action"),
    //     data: form.serialize() +"&createdBy="+currentUser+ "&role="+role,
    //     success(data) {
    //         setResult(data);
    //         alert("Product added successfully");
    //     },
    // });
};

  return (
    <div className="App">

  <header style={{overflowX:"inherit"}} className="header">
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
          <a href="/contactus" className="nav-link">
            Contact us
          </a>
        </li>
        <li className="nav-item">
          <div className="nav-dropdown" id="nav-dropdown">
            <div className="role-title">
              Business
              <i className="fa fa-caret-down" />
            </div>
            <div className="dropdown-content">
              <a href="/businesshome.html" className="nav-link">
                Business
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
  <div style={{fontSize:"2rem"}} className="main-div">
    <div>
      <br />
      <div className="sub-title">
        <b>Add Product</b>
      </div>
      <form action="http://localhost:8000/addproduct.php"
                method="post"
                onSubmit={(event) => handleSumbit(event)}>
        <div className="buy-product">
          <div className="single-option">
            <div>
              <select
                name="da-product-name"
                id="da-product-name"
                title="select a product"
                required="" value={category}
                onChange={(event) => handleChange6(event)}
              > 
                <option disabled="" selected="" value="">
                  -- Select a Category --
                </option>
                <option value="clothing">clothing</option>
                <option value="electronics">electronics</option>
                <option value="books">books</option>
                <option value="others">others</option>
              </select>
            </div>
            <div style={{marginTop:"10px"}}>
              <input name="pname" value={pname}
            onChange={(event) => handleChange1(event)} type="textarea" placeholder="Product Name" />
            </div>
            <div style={{marginTop:"10px"}}>
              <input name="pdesc" value={pdesc}
            onChange={(event) => handleChange2(event)} type="textarea" placeholder="Product description" />
            </div>
            {/* <div style={{marginTop:"10px"}}>
              <input name="price" value={price}
            onChange={(event) => handleChange3(event)} type="text" placeholder="Quantity" />
            </div> */}
            <div style={{marginTop:"10px"}}>
              <input name="price" value={price}
            onChange={(event) => handleChange3(event)} type="text" placeholder="Price" />
            </div>
          </div >
          <div style={{marginTop:"10px"}} className="button-div">
            <div>
              <button type="buy" className="delete-btn">
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>


    </div>
  );
}

export default BusinessAddProduct;
