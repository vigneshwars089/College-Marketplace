import React, { Component,useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../../App.css';
import $ from "jquery";
import axios from "axios";

import '../../css/newstyles.css'
import '../../css/styles.css' 
import '../../css/header.css'
import '../../css/services.css'
import '../../css/responsive.css'
import '../../css/style2.css'



function StudentPost() {

  const [post, setpost] = useState("");
  const [result, setResult] = useState("");
  const [array, setArray] = useState([]);
  const [state, setState] = React.useState({
    post: "",
  })
  const handleChange1 = (e) => {
    setpost(e.target.value);
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    const form = $(e.target);
    const currentUser = window.sessionStorage.getItem("userEmail");
    // $.ajax({
    //     type: "POST",
    //     url: form.attr("action"),
    //     data: { content: post, createdBy: currentUser },
    //     success(data) {
    //         setResult(data);
    //     },
    // });
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
       
  try{
    const res=await axios.post('http://localhost:8000/api/addpost',null, {params: {
      emailId:currentUser,
      createdBy:currentUser,
      postedOn:today,
      content:post,
      isValid:1
  } })
  console.log(res.data); 
}catch (error) {
    console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
  }
  window.location.reload();
};

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

  return (
    <div className="App">


  <header style={{overflowX:"inherit"}} className="header">
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
  <section>
    <div className="gap gray-bg">
      <div style={{marginTop:"5%"}} className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="row" id="page-contents">
              <div className="col-lg-3">
                <aside className="sidebar static"></aside>
              </div>
              <div className="col-lg-6">
                <div className="central-meta">
                  <form action="http://localhost:8000/addpost.php"
                method="post"
                onSubmit={(event) => handleSumbit(event)} style={{fontSize:"2rem"}}>
                    <textarea  name="post"
            value={post}
            onChange={(event) => handleChange1(event)}  style={{height:"100px",width:"500px"}}
                      rows={2}
                      placeholder="write something"
                      defaultValue={""}
                    />
                    <div className="attachments">
                      <ul>
                        <li>
                          <button
                            type="submit"
                            style={{ backgroundColor: "#0096ff" }}
                          >
                            Post
                          </button>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul>
        {oldpost.map(c => (
          <li key={c.postid}>         <div style={{ marginLeft: "25%" }} className="col-lg-6">
          <div className="central-meta" style={{ textAlign:'left',paddingTop:'0px'}}>
            <i className="fa fa-user-circle-o" style={{ fontSize: 24 }} />
            <a style={{ textAlign:'left', paddingLeft: 6,fontSize:'1.5rem' }}><b>{c.firstName}</b></a>
            <p style={{ paddingLeft: 25 }}> {c.content}</p>
          </div>
        </div></li>
        ))}
      </ul>
        {/* <div style={{ marginLeft: "25%" }} className="col-lg-6">
    <div className="central-meta" style={{ textAlign:'left',paddingTop:'0px'}}>
      <i className="fa fa-user-circle-o" style={{ fontSize: 24 }} />
      <a style={{ textAlign:'left', paddingLeft: 6,fontSize:'1.5rem' }}><b>Siddhartha</b></a>
      <p style={{ paddingLeft: 25 }}> Thanks for the help</p>
    </div>
  </div>
  <div style={{ marginLeft: "25%" }} className="col-lg-6">
    <div className="central-meta" style={{ textAlign:'left',paddingTop:'0px'}}>
      <i className="fa fa-user-circle-o" style={{ fontSize: 24 }} />
      <a style={{ paddingLeft: 6 ,fontSize:'1.5rem' }}><b>Lavanya</b></a>
      <p style={{ paddingLeft: 25 }}> satisfied with customer service</p>
    </div>
  </div>
  <div style={{ marginLeft: "25%" }} className="col-lg-6">
    <div className="central-meta" style={{ textAlign:'left',paddingTop:'0px'}}>
      <i className="fa fa-user-circle-o" style={{ fontSize: 24 }} />
      <a style={{ paddingLeft: 6,fontSize:'1.5rem'  }}><b>Vignesh</b></a>
      <p style={{ paddingLeft: 25 }}> I need help with this</p>
    </div>
  </div> */}
      </div>
    </div>
  </section>


    </div>
  );
}

export default StudentPost;
