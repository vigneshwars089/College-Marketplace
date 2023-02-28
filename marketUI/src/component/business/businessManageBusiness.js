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

function BusinessManageBusiness() {

  const [businessName, setPname] = useState("");
  const [dbusinessName, setdbusinessName] = useState("");

  const [businessCategory, setCategory] = useState("");
  const [quantity, setquantity] = useState("");
  const [price, setprice] = useState("");
 
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

  const handleChange4 = (e) => {
    setdbusinessName(e.target.value);
  };

  const handleChange2 = (e) => {
    setCategory(e.target.value);
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

  useEffect(()=>{
    const currentUser = window.sessionStorage.getItem("userEmail");
    const role = window.sessionStorage.getItem("role");
  
    const fetchData = async () => {
      try{
        const res= await axios.get('http://localhost:8000/api/getbusiness')
      console.log(res.data); 
      setProduct(res.data.business); 
  
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
  const handleSumbit = (e) => {
    e.preventDefault();
    const currentUser = window.sessionStorage.getItem("userEmail");

    const fetchData = async () => {
      try{
        const res= await axios.post('http://localhost:8000/api/addbusiness',null, {params: {
          businessname:businessName,discount:businessCategory,createdBy:currentUser,isValid:1,isapproved:0
      } })
      console.log(res.data); 
    }catch (error) {
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
      }
       window.location.reload();
       alert("Business added successfully");
      }
      fetchData();
    // console.log(currentUser);
    // e.preventDefault();
    // const form = $(e.target);
    // $.ajax({
    //     type: "POST",
    //     url: form.attr("action"),
    //     data: {createdBy:currentUser,businessName:businessName,businessCategory:businessCategory},
    //     success(data) {
    //         setResult(data);
    //         alert("Product added successfully");
    //     },
    // });
    // e.preventDefault();


};

function removeprod(e){
  e.preventDefault();
  //console.log( e.target.name);
  const currentUser = window.sessionStorage.getItem("userEmail");

  const role = window.sessionStorage.getItem("role");
  //const form = $(e.target.name);
  console.log(dbusinessName); 
  const fetchData = async () => {
    try{
      const res= await axios.post('http://localhost:8000/api/removebusiness',null, {params: {
        businessId:dbusinessName
    } })
    console.log(res.data); 
  }catch (error) {
      console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
    }
    window.location.reload();
    alert("Business deleted successfully");
    }
    fetchData();

}


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
  <div style={{fontSize:"2rem"}} className="main-div">
    <div>
      <br />
      <div className="sub-title">
        <b>Register New Business</b>
      </div>
      <form action="http://localhost:8000/registerBusiness.php"
                method="post"
                onSubmit={(event) => handleSumbit(event)}>
        <div className="add-building">
          <div className="single-option">
            <div>
              <label htmlFor="add-building-name" style={{ fontSize: 15 }}>
                Business Name:
              </label>
            </div>
            <div>
              <input name="businessName" value={businessName}
            onChange={(event) => handleChange1(event)}
                type="text"
                placeholder="Enter Business Name"
                autoComplete="off"
                required=""
                //name="add-building-name"
                id="add-building-name"
              />
            </div>
          </div>
          <div className="single-option">
            <div>
              <label htmlFor="add-apartment-name" style={{ fontSize: 15 }}>
                Enter Product Category
              </label>
            </div>
            <div>
              <input name="businessCategory" value={businessCategory}
            onChange={(event) => handleChange2(event)}
                type="text"
                placeholder="Category Name"
                autoComplete="off"
                required=""
                //name="add-apartment-name"
                id="add-apartment-name"
              />
            </div>
          </div>
          <div className="button-div">
            <div style={{marginTop:"10px"}}>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div style={{marginTop:"20px"}} >
      <div className="sub-title">
        <b>Delete a Business</b>
      </div>
      <form>
        <div className="delete-building">
          <div className="single-option">
            <div>
              <label htmlFor="delete-building-name" style={{ fontSize: 15 }}>
                Business to Delete
              </label>
            </div>
            <div>
              <select
                name="delete-building-name"
                id="delete-building-name"
                title="select a building"
                required=""
                 value={dbusinessName}
            onChange={(event) => handleChange4(event)}
              >
                <option disabled="" selected="" value="">
                  -- Select a Business --
                </option>
                {product.map((item) => <option key={item.businessId} value={item.businessId}>{item.businessname}</option>)}
              </select>
            </div>
          </div>
          <div className="button-div">
            <div style={{marginTop:"10px"}}>
              <button onClick={removeprod} type="submit" className="delete-btn">
                Delete
              </button >
            </div>
            <div style={{marginTop:"10px"}}>
              {/* <button type="reset" className="reset-btn">
                Reset
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

export default BusinessManageBusiness;
