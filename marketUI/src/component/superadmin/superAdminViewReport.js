import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Chart } from "react-google-charts";
import { useEffect } from 'react';
import axios from "axios";

import '../../css/newstyles.css'
import '../../css/styles.css' 
import '../../css/header.css'
import '../../css/services.css'
import '../../css/responsive.css'
import '../../css/style2.css'
export const data = [
  [
    "Business",
    "Sales",
    { role: "style" },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify",
    },
  ],
  ["Business1", 4, "#b87333", null],
  ["Business2", 1, "silver", null],
  ["Business3", 6, "gold", null],
  ["Business4", 3, "color: #e5e4e2", null],
];

export const data1 = [
  ["Clubs", "Student count"],
  ["student council", 2],
  ["UTA volunteer", 1],

];

export const options1 = {
  title: "Clubs and Members",
  is3D: true,
};

export const options = {
  title: "Business and Sales",
  width: 600,
  height: 400,
  bar: { groupWidth: "95%" },
  legend: { position: "none" },
};
const SuperAdminViewReport = () => {

  const [content, setContent] = useState([]);
  const [psw, setPsw] = useState("");
  const [oldpost, setOldpost] = useState([]);

  useEffect(()=>{
  
    const fetchData = async () => {
      try{
        const res= await axios.get('http://localhost:8000/api/getclubsusercount')
      console.log(res.data.clubs);
      setContent(res.data.clubs); 
    }catch (error) {
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
      
      }
      }
      fetchData();
      
//console.log(array);
},


[])

  return (
    <>
 <div className="App">

<meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css/main.min.css" />
  <link rel="stylesheet" href="css/newstyles.css" />
  <link rel="stylesheet" href="css/view-reports-admin.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <title>View Reports -School Admin</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    html {\n    scroll-behavior: smooth;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    font-size: 20px;\n    font-family: Helvetica, Arial, sans-serif;\n    color: #47525e;\n    height: 100%;\n}\n\nli {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n}\n\n.backgd-img {\n    background-image: url("https://utamavs.com/images/2021/9/2/College_Park_Center_District.jpg?preset=large.socialmediaimage");\n    min-height: 500px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    align-items: center;\n    justify-content: center;\n}\n\n.header {\n    background-color: #0096ff;\n    border-bottom: 1px solid #e2e8f0;\n    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;\n}\n\n.navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 1rem;\n}\n\n.hamburger {\n    display: none;\n}\n\n.bar {\n    display: block;\n    width: 25px;\n    height: 3px;\n    margin: 5px auto;\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n    background-color: #101010;\n}\n\n.nav-menu {\n    display: flex;\n    align-items: center;\n    margin-right: 2rem;\n}\n\n.nav-item {\n    margin-left: 3rem;\n}\n\n.nav-link {\n    color: #000;\n}\n\n.nav-link-active {\n    background-color: #76c893;\n    color: #fff;\n}\n\n.nav-link:hover {\n    color: #ffff;\n}\n\n.nav-logo {\n    font-size: 25px;\n    background: #76c0c80b;\n    color: #ffffff;\n    padding: 0.5rem;\n    border-radius: 5px;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n}\n\n.dropdown-content a {\n    float: none;\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n    text-align: left;\n}\n\n.dropdown-content a:hover {\n    background-color: #ddd;\n}\n\n.nav-dropdown:hover .dropdown-content {\n    display: block;\n}\n\n.role-title {\n    cursor: pointer;\n    color: #000000d6;\n}\n\n.styled-table {\n    border-collapse: collapse;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\n    margin-top: 1rem;\n}\n\n.styled-table thead tr {\n    background-color: #0096ff;\n    color: #ffffff;\n    text-align: left;\n}\n\n.styled-table th,\n.styled-table td {\n    padding: 12px 15px;\n}\n\n.styled-table tbody {\n    text-align: left;\n}\n\n.styled-table tbody tr {\n    border-bottom: thin solid #dddddd;\n    background-color: #ffffff;\n}\n\n.styled-table tbody tr:nth-of-type(even) {\n    background-color: #f3f3f3;\n}\n\n.styled-table tbody tr:last-of-type {\n    border-bottom: 2px solid #47525e;\n}\n\n@media (max-width: 768px) {\n    .nav-menu {\n        position: fixed;\n        left: -100%;\n        top: 5rem;\n        flex-direction: column;\n        background-color: #fff;\n        width: 100%;\n        border-radius: 10px;\n        text-align: center;\n        transition: 0.5s;\n        padding: 0;\n        height: 100%;\n        overflow-y: auto;\n        margin: 0;\n        z-index: 9999;\n    }\n\n    .header {\n        padding: 2rem 0;\n    }\n\n    .nav-menu.active {\n        left: 0;\n    }\n\n    .nav-item {\n        margin: 2.5rem 0;\n    }\n\n    .hamburger {\n        display: block;\n        cursor: pointer;\n    }\n\n    .hamburger.active .bar:nth-child(2) {\n        opacity: 0;\n    }\n\n    .hamburger.active .bar:nth-child(1) {\n        -webkit-transform: translateY(8px) rotate(45deg);\n        transform: translateY(8px) rotate(45deg);\n    }\n\n    .hamburger.active .bar:nth-child(3) {\n        -webkit-transform: translateY(-8px) rotate(-45deg);\n        transform: translateY(-8px) rotate(-45deg);\n    }\n}\n\ninput[type="email"],\ninput[type="text"],\ninput[type="textarea"],\ninput[type="password"],\ninput[type="date"] {\n    width: 250px;\n    padding: 0.7rem;\n    outline: none;\n    border: 1px solid #a9a9a9;\n    border-radius: 5px;\n    font-size: 15px;\n}\n\ninput[type="date"] {\n    width: 200px;\n    padding: 0.5rem;\n    outline: none;\n    border: 1px solid #a9a9a9;\n    border-radius: 5px;\n    font-size: 16px;\n    cursor: pointer;\n}\n\ninput[type="number"] {\n    -moz-appearance: textfield;\n    -webkit-appearance: textfield;\n    appearance: textfield;\n    width: 250px;\n    padding: 0.7rem;\n    outline: none;\n    border: 1px solid #a9a9a9;\n    border-radius: 5px;\n    font-size: 15px;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n}\n\n.float-left {\n    float: left;\n}\n\n.float-right {\n    float: right;\n}\n\n.clearfix::after {\n    content: " ";\n    display: block;\n    height: 0;\n    clear: both;\n}\n\n.pad-top-2 {\n    padding-top: 2rem;\n}\n\n.pad-top {\n    padding-top: 1rem;\n}\n\n.align-center {\n    text-align: center;\n}\n\nbutton:disabled,\nbutton[disabled] {\n    padding: 1rem;\n    width: -moz-fit-content;\n    width: fit-content;\n    cursor: not-allowed;\n    border-radius: 5px;\n    outline: none;\n    border: none;\n    background-color: #ddd;\n}\n\n.main-div {\n    height: calc(100% - 65px);\n    overflow-y: auto;\n}\n\n.sub-title {\n    padding-bottom: 1rem;\n    font-weight: bold;\n}\n\n.main-title {\n    background: #0096ff;\n    color: #ffffff;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n@media (max-width: 768px) {\n    .main-div {\n        height: calc(100% - 110px);\n    }\n\n    .sub-title {\n        padding-left: 1rem;\n    }\n}\n  '
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
    <div className="main-title">View Reports</div>
    <div className="content">
      {/* <div className="filters">
        <div>
          <select
            name="filter1"
            id="filter1"
            title="select an option"
            required=""
          >
            <option disabled="" selected="" value="">
              Graphical representaion
            </option>
            <option onClick={changeStyle} value="building">Report on Business and sales</option>
            <option value="visits">Report on student and clubs</option>
          </select>
        </div>
      </div>
      <div className="empty" id="empty">
        <div>Please select an option to view the reports</div>
      </div> */}
      <div className="reports-div">
        <div  id="building-reports" />
        {/* <div >
        <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    /></div> */}
    <div>
         <Chart
      chartType="PieChart"
      data={data1}
      options={options1}
      width={"100%"}
      height={"400px"}
    />
      </div>
        
        <div id="visit-reports" />
      <div>
 
      </div>
      </div>
    </div>
  </div>

    </div>
    </>
  );
};
export default SuperAdminViewReport;
