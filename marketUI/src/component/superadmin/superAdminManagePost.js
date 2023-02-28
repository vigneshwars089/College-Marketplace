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

function SuperAdminManagePost() {

  const [oldpost, setOldpost] = useState([]);
  const [psw, setPsw] = useState("");
  useEffect(()=>{
  
      const fetchData = async () => {
        try{
          const res= await axios.get('http://localhost:8000/api/getposts')
        console.log(res.data);
        setOldpost(res.data.posts); 
      }catch (error) {
          console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
        
        }
        }
        fetchData();
        
  //console.log(array);
  },
  
  
  [])
  function removeprod(e){
    console.log( e.target.name);
    const paramet=e.target.name;
    const currentUser = window.sessionStorage.getItem("userEmail");
    const fetchData = async () => {
      try{
        const res= await axios.post('http://localhost:8000/api/removepost',null, {params: {
          id:e.target.name
      } })
      console.log(res.data); 
    }catch (error) {
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
      }
      window.location.reload();
      alert("post deleted successfully");
      }
      fetchData();

  }
  return (
    <div className="App">
<meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css/newstyles.css" />
  <link rel="stylesheet" href="css/manage-student-schoolAdmin.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <title>Manage Posts - School admin</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n      html {\n    scroll-behavior: smooth;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    font-size: 20px;\n    font-family: Helvetica, Arial, sans-serif;\n    color: #47525e;\n    height: 100%;\n}\n\nli {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n}\n\n.backgd-img {\n    background-image: url("https://utamavs.com/images/2021/9/2/College_Park_Center_District.jpg?preset=large.socialmediaimage");\n    min-height: 500px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    align-items: center;\n    justify-content: center;\n}\n\n.header {\n    background-color: #0096ff;\n    border-bottom: 1px solid #e2e8f0;\n    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;\n}\n\n.navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 1rem;\n}\n\n.hamburger {\n    display: none;\n}\n\n.bar {\n    display: block;\n    width: 25px;\n    height: 3px;\n    margin: 5px auto;\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n    background-color: #101010;\n}\n\n.nav-menu {\n    display: flex;\n    align-items: center;\n    margin-right: 2rem;\n}\n\n.nav-item {\n    margin-left: 3rem;\n}\n\n.nav-link {\n    color: #000;\n}\n\n.nav-link-active {\n    background-color: #76c893;\n    color: #fff;\n}\n\n.nav-link:hover {\n    color: #ffff;\n}\n\n.nav-logo {\n    font-size: 25px;\n    background: #76c0c80b;\n    color: #ffffff;\n    padding: 0.5rem;\n    border-radius: 5px;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n}\n\n.dropdown-content a {\n    float: none;\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n    text-align: left;\n}\n\n.dropdown-content a:hover {\n    background-color: #ddd;\n}\n\n.nav-dropdown:hover .dropdown-content {\n    display: block;\n}\n\n.role-title {\n    cursor: pointer;\n    color: #000000d6;\n}\n\n.styled-table {\n    border-collapse: collapse;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\n    margin-top: 1rem;\n}\n\n.styled-table thead tr {\n    background-color: #0096ff;\n    color: #ffffff;\n    text-align: left;\n}\n\n.styled-table th,\n.styled-table td {\n    padding: 12px 15px;\n}\n\n.styled-table tbody {\n    text-align: left;\n}\n\n.styled-table tbody tr {\n    border-bottom: thin solid #dddddd;\n    background-color: #ffffff;\n}\n\n.styled-table tbody tr:nth-of-type(even) {\n    background-color: #f3f3f3;\n}\n\n.styled-table tbody tr:last-of-type {\n    border-bottom: 2px solid #47525e;\n}\n\n@media (max-width: 768px) {\n    .nav-menu {\n        position: fixed;\n        left: -100%;\n        top: 5rem;\n        flex-direction: column;\n        background-color: #fff;\n        width: 100%;\n        border-radius: 10px;\n        text-align: center;\n        transition: 0.5s;\n        padding: 0;\n        height: 100%;\n        overflow-y: auto;\n        margin: 0;\n        z-index: 9999;\n    }\n\n    .header {\n        padding: 2rem 0;\n    }\n\n    .nav-menu.active {\n        left: 0;\n    }\n\n    .nav-item {\n        margin: 2.5rem 0;\n    }\n\n    .hamburger {\n        display: block;\n        cursor: pointer;\n    }\n\n    .hamburger.active .bar:nth-child(2) {\n        opacity: 0;\n    }\n\n    .hamburger.active .bar:nth-child(1) {\n        -webkit-transform: translateY(8px) rotate(45deg);\n        transform: translateY(8px) rotate(45deg);\n    }\n\n    .hamburger.active .bar:nth-child(3) {\n        -webkit-transform: translateY(-8px) rotate(-45deg);\n        transform: translateY(-8px) rotate(-45deg);\n    }\n}\n\ninput[type="email"],\ninput[type="text"],\ninput[type="textarea"],\ninput[type="password"],\ninput[type="date"] {\n    width: 250px;\n    padding: 0.7rem;\n    outline: none;\n    border: 1px solid #a9a9a9;\n    border-radius: 5px;\n    font-size: 15px;\n}\n\ninput[type="date"] {\n    width: 200px;\n    padding: 0.5rem;\n    outline: none;\n    border: 1px solid #a9a9a9;\n    border-radius: 5px;\n    font-size: 16px;\n    cursor: pointer;\n}\n\ninput[type="number"] {\n    -moz-appearance: textfield;\n    -webkit-appearance: textfield;\n    appearance: textfield;\n    width: 250px;\n    padding: 0.7rem;\n    outline: none;\n    border: 1px solid #a9a9a9;\n    border-radius: 5px;\n    font-size: 15px;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n}\n\n.float-left {\n    float: left;\n}\n\n.float-right {\n    float: right;\n}\n\n.clearfix::after {\n    content: " ";\n    display: block;\n    height: 0;\n    clear: both;\n}\n\n.pad-top-2 {\n    padding-top: 2rem;\n}\n\n.pad-top {\n    padding-top: 1rem;\n}\n\n.align-center {\n    text-align: center;\n}\n\nbutton:disabled,\nbutton[disabled] {\n    padding: 1rem;\n    width: -moz-fit-content;\n    width: fit-content;\n    cursor: not-allowed;\n    border-radius: 5px;\n    outline: none;\n    border: none;\n    background-color: #ddd;\n}\n\n.main-div {\n    height: calc(100% - 65px);\n    overflow-y: auto;\n}\n\n.sub-title {\n    padding-bottom: 1rem;\n    font-weight: bold;\n}\n\n.main-title {\n    background: #0096ff;\n    color: #ffffff;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n@media (max-width: 768px) {\n    .main-div {\n        height: calc(100% - 110px);\n    }\n\n    .sub-title {\n        padding-left: 1rem;\n    }\n}\n.content {\n  padding: 2rem;\n}\n.filters {\n  display: flex;\n  column-gap: 5rem;\n  row-gap: 2rem;\n}\ninput[type="date"] {\n  width: 200px;\n}\nselect {\n  width: 200px;\n  height: 40px;\n  cursor: pointer;\n  border-radius: 5px;\n  border: 1px solid #a9a9a9;\n  font-size: 15px;\n}\n.table-div {\n  overflow-x: auto;\n}\n.btn {\n  padding: 0.5rem 1.5rem;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n}\n.view-button {\n  background-color:  #0096ff;\n}\n.update-button {\n  background-color: #47525e;\n}\n@media (max-width: 768px) {\n  .content {\n    padding-left: 10px;\n  }\n  .btn {\n    margin-bottom: 10px;\n  }\n  .filters {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n    '
    }}
  />
  <header  style={{overflow:"inherit"}}  className="header">
    <nav className="navbar">
      <img src="images/logo-escolar.png" width={150} height={40} alt="" />
      <ul className="nav-menu">
        <li className="nav-item">
        <a href="/superadminhome" className="nav-link">
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
              Super Admin
              <i className="fa fa-caret-down" />
            </div>
            <div className="dropdown-content">
              <a href="/superadminhome" className="nav-link">
                Super Admin
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
  <div style={{overflow:"inherit",
    overflowY: "scroll",
    position: "relative",height: "706px"}} className="main-div">
    <br />
    <div className="main-title">Manage Posts</div>
    <div className="content">
      {/* <div class="filters">
    <div>
      <label for="visitDate">Registered Date:</label>
      <input type="date" id="visitDate" name="visitDate" required />
    </div>
   
  </div> */}
      <div className="table-div">
        <table className="styled-table" id="visitor-table">
          <thead>
            <tr>
              <td>Post</td>
              {/* <td>Posted on</td> */}
              <td>Posted by</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
          <tr><ul>
                {oldpost.map(c => (  <li key={c.postid}>
                  <td>{c.content}</td>
                  
                  <td>{c.firstName}</td>
                  <td>
                    <input 
                      type="button"
                      defaultValue="Delete"
                      className="delete-btn" name={c.postid}
                      onClick={removeprod}
                    />
                  </td></li> ))}</ul></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

    </div>
  );
}

export default SuperAdminManagePost;
