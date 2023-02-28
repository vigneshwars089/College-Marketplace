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
import axios from 'axios';

function BusinessAddAdvertisement() {
  const [productName, setPname] = useState("");
  const [pdesc, setpdesc] = useState("");
  const [quantity, setquantity] = useState("");
  const [discount, setprice] = useState("");
  const [name, setname] = useState("");
  const [course, setcourse] = useState("");

  const [result, setResult] = useState("");
  const [product, setProduct] = useState([]);
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

  const handleSumbit =async (e) => {
    e.preventDefault();
    const currentUser = window.sessionStorage.getItem("userEmail");
    const role = window.sessionStorage.getItem("role");

    const form = $(e.target);
    console.log(productName); 

    const fetchData = async () => {
      try{
        const res= await axios.post('http://localhost:8000/api/addadv',null, {params: {
          productId:productName,discount:discount,createdBy:currentUser,isValid:1
      } })
      console.log(res.data); 
    }catch (error) {
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
      }
       window.location.reload();
       alert("Advertisement added successfully");
      }
      fetchData();
    
    // if(res.data.status===200)
    // {
    //   console.log(res.data.message);
    // }

    // $.ajax({
    //     type: "POST",
    //     url: form.attr("action"),
    //     data: form.serialize() +"&postedBy="+currentUser,
    //     success(data) {
    //         setResult(data);
    //         alert("Product added successfully");
    //     },
    // });
};

useEffect(()=>{
  const currentUser = window.sessionStorage.getItem("userEmail");
  const role = window.sessionStorage.getItem("role");

  const fetchData = async () => {
    try{
      const res= await axios.get('http://localhost:8000/api/getproducts')
    console.log(res.data); 
    setProduct(res.data.products); 

  }catch (error) {
      console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
    }
    }
    fetchData();
  //   $.ajax({
//     type: "POST",
//     url: 'http://localhost:8000/listproductrole.php',
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


  return (
    <div className="App">
 
<meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css/manage-products.css" />
  <link rel="stylesheet" href="css/manage-advertisements.css" />
  <link rel="stylesheet" href="css/newstyles.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <title>Add Advertisement - Business</title>
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
          <a href="/contactus" className="nav-link">
            Contact us
          </a>
        </li>
        <li className="nav-item">
          <div className="nav-dropdown" id="nav-dropdown">
            <div className="role-title">
              BusinessOwner
              <i className="fa fa-caret-down" />
            </div>
            <div className="dropdown-content">
              <a href="/businesshome" className="nav-link">
                BusinessOwner
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
        <b>Add Advertisement</b>
      </div>
      <form action="http://localhost:8000/addads.php"
                method="post"
                onSubmit={(event) => handleSumbit(event)}>
        <div className="add-advertisement">
          <div className="single-option">
            <div style={{marginTop:"10px"}}>
              {/* <select
                name="da-product-name"
                id="da-product-name"
                title="select a business"
                required=""
              >
                <option disabled="" selected="" value="">
                  -- Select a Business --
                </option>
                <option value="b1">b1</option>
                <option value="b2">b2</option>
                <option value="b3">b3</option>
              </select> */}
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
            <div style={{marginTop:"10px"}}>
              <select
                // name="da-product-name"
                id="da-product-name"
                title="select a product"
                required=""
                name="productName" value={productName}
            onChange={(event) => handleChange1(event)}
              >
                <option disabled="" selected="" value="">
                  -- Select a Product --
                </option>
                {product.map((item) => <option key={item.productId} value={item.productId}>{item.productName}</option>)}
              </select>
            </div>
            <div style={{marginTop:"10px"}}>
              <input name="discount" value={discount}
            onChange={(event) => handleChange3(event)} type="text" placeholder="Discounted price" />
            </div>
          </div>
          <div className="button-div">
            <div style={{marginTop:"10px"}}>
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

export default BusinessAddAdvertisement;
