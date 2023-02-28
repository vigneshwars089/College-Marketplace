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
import '../../css/style2.css'

function StudentAdvertisement() {

  const [product, setProduct] = useState([]);
  const [psw, setPsw] = useState("");
  useEffect(()=>{
    const currentUser = window.sessionStorage.getItem("userEmail");
    const role = window.sessionStorage.getItem("role");

    const fetchData = async () => {
      try{
        const res= await axios.get('http://localhost:8000/api/getadvs')
      console.log(res.data);
      setProduct(res.data.ads); 
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

  return (
    <div className="App">

<header  style={{overflowX:"inherit"}} className="header">
    <nav className="navbar">
      <img src="images/logo-escolar.png" width={150} height={40} alt="" />
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="/studenthome" className="nav-link">
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
              Student
              <i className="fa fa-caret-down" />
            </div>
            <div className="dropdown-content">
              <a href="/studenthome" className="nav-link">
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
  <div style={{fontSize:"2rem"}} className="main-div">
    <div className="content-div">
      <div className="single-option">
        <div className="sub-content">
          <div>
            <div className="sub-title">
              <b>View all advertisements</b>
            </div>
            <div className="delete-adv-title" />
            <table className="styled-table" id="adv-table">
              <thead>
                <tr>
                
                  <td>Product</td>
                  <td>Discount</td>
                
                </tr>
              </thead>
              <tbody>
              {/* <ul>
                {product.map(c => (  <li key={c.productName}>
                <option name={c.productName} value={c.productName}>{c.productName}</option><div><button name={c.productName} type="button" onClick={removeprod}>
                Remove
              </button></div></li> ))}</ul> */}
                <tr><ul>
                {product.map(c => (  <li key={c.product}>
                  <td>{c.productName}</td>
                  {/* <td>Samuel - Learn from your mistakes</td> */}
                  <td> {c.discount} </td>
     </li> ))}</ul>
                </tr>
                {/* <tr>
                  <td>Dress</td>
                  <td>Floral Printed Women's Frock</td>
                  <td>Save up to 20%</td>
                  <td>
                    <input style={{width:"100%"}}
                      type="button"
                      defaultValue="Delete advertisement"
                      className="delete-btn"
                    />
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>


    </div>
  );
}

export default StudentAdvertisement;
