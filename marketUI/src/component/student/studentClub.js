import React ,{component, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from "axios";

import $, { data } from "jquery";
import '../../css/newstyles.css'
import '../../css/styles.css' 
import '../../css/header.css'
import '../../css/services.css'
import '../../css/responsive.css'
import '../../css/style2.css'
import { useState } from 'react';

function StudentClub() {

  const [content, setContent] = useState([]);
  const [content1, setContent1] = useState([]);
  const [userclub, setUserclub] = useState([]);
  const [psw, setPsw] = useState("");
  const [result, setResult] = useState("");

  useEffect(()=>{
    const currentUser = window.sessionStorage.getItem("userEmail");
  //   $.ajax({
  //     type: "GET",
  //     url: 'http://localhost:8000/listclubs.php',
  //     //data: {emailID: currentUser },
  //     dataType:"json",
  //     success(response) {
  //       console.log('success');
  //       console.log(JSON.stringify(response));
  //       const stringifiedData=JSON.stringify(response);
  //       console.log(stringifiedData);
  //       setContent(response); // will print "message"
  //     }
  // });

  const fetchData = async () => {
    try{
      const res= await axios.get('http://localhost:8000/api/getclubs')
    console.log(res.data);
    setContent(res.data.clubs); 
  }catch (error) {
      console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
    
    }
    }
    fetchData();

    const fetchData1 = async () => {
      try{
        const res= await axios.post('http://localhost:8000/api/getclubsByUser',null, {params: {
          emailId:currentUser
      } })
      console.log(res.data);
      setUserclub(res.data.clubs); 
    }catch (error) {
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
      
      }
      }
      fetchData1();


//   $.ajax({
//     type: "GET",
//     url: 'http://localhost:8000/listUserclubs.php',
//     //data: {emailID: currentUser },
//     dataType:"json",
//     success(response) {
//       console.log('success');
//       console.log(JSON.stringify(response));
//       const stringifiedData=JSON.stringify(response);
//       console.log(stringifiedData);
//       setUserclub(response); // will print "message"
//     }
// });
  
  },
  
  
  [])
  //console.log(content);


  function joinClub(e){
    console.log( e.target.name);
    const flist=userclub.filter( (car) => car.clubname === e.target.name);
    console.log(flist);
    
    
      
    
    const currentUser = window.sessionStorage.getItem("userEmail");
    const fetchData1 = async () => {
      try{
        const res= await axios.post('http://localhost:8000/api/joinclub',null, {params: {
          emailId:currentUser,clubName:e.target.name
      } })
      console.log(res.data);
      //setUserclub(res.data.clubs); 
    }catch (error) {
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
      
      }
      window.location.reload();
       alert("joined the club successfully");
      }
      fetchData1();
  // e.preventDefault();
  }

  function removeClub(e){
    console.log(e.target.getAttribute('name'));
    const paramet=e.target.getAttribute('name');
    const currentUser = window.sessionStorage.getItem("userEmail");
    const fetchData1 = async () => {
      try{
        const res= await axios.post('http://localhost:8000/api/leaveclub',null, {params: {
          emailId:currentUser,clubName:paramet
      } })
      console.log(res.data);
      //setUserclub(res.data.clubs); 
    }catch (error) {
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
      
      }
      window.location.reload();
       alert("removed from the club");
      }
      fetchData1();
  // e.preventDefault();
  }
//   useEffect = () => {
//     //e.preventDefault();
//     //const form = $(e.target);
//     $.ajax({
//         type: "GET",
//         url: 'http://localhost:8000/addpost.php',
//         //data: form.serialize(),
//         dataType:"json",
//         success(data) {
//           console.log('success');
//           console.log(data); // will print "message"
//         }
//     });
// };
  return (
    <div className="App">
  
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  <title>club</title>
  <link rel="icon" href="images/logo.png" type="image/png" sizes="16x16" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link rel="stylesheet" href="css/main.min.css" />
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/header.css" />
  <link rel="stylesheet" href="css/responsive.css" />
  <link rel="stylesheet" type="text/css" href="css/style2.css" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        ' .header {\n      position: relative;\n      min-height: 10vh;\n      overflow-x: inherit;\n    }\n\n\t\t.scroll {\n\t\t\toverflow-y: scroll;\n\t\t\theight: 306px;\n\t\t\twidth: 700px;\n\t\t\tmargin: 10px 5px;\n\t\t\tpadding: 5px;\n\t\t\ttext-align: justify;\n\t\t}\n\n\t\t.scroll::-webkit-scrollbar {\n\t\t\twidth: 5px;\n\t\t}\n\n\t\t.scroll::-webkit-scrollbar-track {\n\t\t\t-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n\t\t\tborder-radius: 5px;\n\t\t}\n\n\t\t.scroll::-webkit-scrollbar-thumb {\n\t\t\tborder-radius: 5px;\n\t\t\t-webkit-box-shadow: inset 0 0 6px #007bff;\n\t\t}\n\n\t\t.responsive {\n\t\t\twidth: 100%;\n\t\t\tmax-width: 400px;\n\t\t\theight: auto;\n\t\t\tdisplay: block;\n\t\t\tmargin-left: auto;\n\t\t\tmargin-right: auto;\n\n\t\t}\n\n\t\t/* Button used to open the chat form - fixed at the bottom of the page */\n\t\t.open-button {\n\t\t\tbackground-color: #555;\n\t\t\tcolor: white;\n\t\t\tpadding: 16px 20px;\n\t\t\tborder: none;\n\t\t\tcursor: pointer;\n\t\t\topacity: 0.8;\n\t\t\tposition: fixed;\n\t\t\tbottom: 23px;\n\t\t\tright: 28px;\n\t\t\twidth: 280px;\n\t\t}\n\n\t\t/* The popup chat - hidden by default */\n\t\t.chat-popup {\n\t\t\tdisplay: none;\n\t\t\tposition: fixed;\n\t\t\tbottom: 0;\n\t\t\tright: 15px;\n\t\t\tborder: 3px solid #f1f1f1;\n\t\t\tz-index: 9;\n\t\t}\n\n\t\t/* Add styles to the form container */\n\t\t.form-container {\n\t\t\tmax-width: 300px;\n\t\t\tpadding: 10px;\n\t\t\tbackground-color: white;\n\t\t}\n\n\t\t/* Full-width textarea */\n\t\t.form-container textarea {\n\t\t\twidth: 100%;\n\t\t\tpadding: 15px;\n\t\t\tmargin: 5px 0 22px 0;\n\t\t\tborder: none;\n\t\t\tbackground: #f1f1f1;\n\t\t\tresize: none;\n\t\t\tmin-height: 200px;\n\t\t}\n\n\t\t/* When the textarea gets focus, do something */\n\t\t.form-container textarea:focus {\n\t\t\tbackground-color: #ddd;\n\t\t\toutline: none;\n\t\t}\n\n\t\t/* Set a style for the submit/send button */\n\t\t.form-container .btn {\n\t\t\tbackground-color: #009f;\n\t\t\tcolor: white;\n\t\t\tpadding: 16px 20px;\n\t\t\tborder: none;\n\t\t\tcursor: pointer;\n\t\t\twidth: 100%;\n\t\t\tmargin-bottom: 10px;\n\t\t\topacity: 0.8;\n\t\t}\n\n\t\t/* Add a red background color to the cancel button */\n\t\t.form-container .cancel {\n\t\t\tbackground-color: red;\n\t\t}\n\n\t\t/* Add some hover effects to buttons */\n\t\t.form-container .btn:hover,\n\t\t.open-button:hover {\n\t\t\topacity: 1;\n\t\t}\n\n\t\t.bg-img {\n\t\t\tbackground-image: url("https://utamavs.com/images/2021/9/2/College_Park_Center_District.jpg?preset=large.socialmediaimage");\n\n\t\t\tmin-height: 380px;\n\t\t\tbackground-position: center;\n\t\t\tbackground-repeat: no-repeat;\n\t\t\tbackground-size: cover;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\n\n\n\t\t}\n\n\t\t.container {\n\t\t\tposition: absolute;\n\t\t\tbottom: 8px;\n\t\t\tright: 300px;\n\t\t\tleft: 500px;\n\n\t\t\tmargin: 20px;\n\n\t\t\tmax-width: 300px;\n\t\t\tpadding: 16px;\n\t\t\tbackground-color: white;\n\n\t\t}\n\n\t\t.cards-list {\n\t\t\tz-index: 0;\n\t\t\twidth: 100%;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-around;\n\t\t\tflex-wrap: wrap;\n\t\t}\n\n\t\t.card {\n\t\t\tmargin: 30px auto;\n\t\t\twidth: 300px;\n\t\t\theight: 300px;\n\t\t\tborder-radius: 40px;\n\t\t\tbox-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);\n\t\t\tcursor: pointer;\n\t\t\ttransition: 0.4s;\n\t\t}\n\n\t\t.card .card_image {\n\t\t\twidth: inherit;\n\t\t\theight: inherit;\n\t\t\tborder-radius: 40px;\n\t\t}\n\n\t\t.card .card_image img {\n\t\t\twidth: inherit;\n\t\t\theight: inherit;\n\t\t\tborder-radius: 40px;\n\t\t\tobject-fit: cover;\n\t\t}\n\n\t\t.card .card_title {\n\t\t\ttext-align: center;\n\t\t\tborder-radius: 0px 0px 40px 40px;\n\t\t\tfont-family: sans-serif;\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 60px;\n\t\t\tmargin-top: -80px;\n\t\t\theight: 40px;\n\t\t\tcolor: black;\n\t\t\tbackground-color: white;\n\t\t}\n\n\t\t.card:hover {\n\t\t\ttransform: scale(0.9, 0.9);\n\t\t\tbox-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),\n\t\t\t\t-5px -5px 30px 15px rgba(0, 0, 0, 0.22);\n\t\t}\n\n\t\t.title-white {\n\t\t\tcolor: white;\n\t\t}\n\n\t\t.title-black {\n\t\t\tcolor: black;\n\t\t}\n\n\t\t.navbar-brand img {\n\t\t\twidth: 128px;\n\t\t\tmargin-right: 5px;\n\t\t}\n\n\t\ta {\n\t\t\tcolor: #000;\n\t\t\ttext-decoration: none;\n\t\t\tbackground-color: transparent;\n\t\t}\n\n\t\t.dropdown-content a {\n\t\t\tfloat: none;\n\t\t\tbackground-color: transparent;\n\t\t\tcolor: #0000;\n\t\t\tpadding: 12px 16px;\n\t\t\ttext-decoration: none;\n\t\t\tdisplay: block;\n\t\t\ttext-align: left;\n\t\t}\n\n\t\t@media all and (max-width: 500px) {\n\t\t\t.card-list {\n\t\t\t\t/* On small screens, we are no longer using row direction but column */\n\t\t\t\tflex-direction: column;\n\t\t\t}\n\t\t}\n\t'
    }}
  />
  {/*<div class="se-pre-con"></div>*/}
  <div style={{fontSize:"1.6rem"}} className="theme-layout">
    <header className="header">
    
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="row" id="page-contents">
                <div className="col-lg-3">
                  <aside className="sidebar static">
                    <div className="widget">
                      <ul style={{paddingTop:"20%"}} className="naves">
                        <li>
                          <a style={{ paddingLeft: "10%" }}>CLUBS</a>
                        </li>
                        {userclub.map(c => (
          <li key={c.clubname}> <li>{c.clubname} <a ><i onClick={removeClub} name={c.clubname} className="fa fa-trash-o" /></a></li> 
        <p>
        </p></li>
        ))}
    
                        <li style={{marginTop:"10%"}}>
                          <a style={{ paddingLeft: "10%" }}>Upcoming Events</a>
                        </li>
                        <li>Celebrando El exido</li>
                        <li>Halloween Casino night</li>
                      </ul>
                    </div>
                  </aside>
                </div>
                {/* sidebar */}
                <div className="col-lg-6">

                  <div className="scroll">
                  <ul>
        {content.map(c => (
          <li key={c.clubName}> <h1>{c.clubName}</h1>  <button name={c.clubName} type="button" onClick={joinClub} disabled="">
          Request to add
        </button>
        <p>
          {" "}
          {c.clubActivity}
        </p></li>
        ))}
      </ul>
                    {/* <h1>UTA VOLUNTEER</h1>
                    <button type="button" disabled="">
                      Request to add
                    </button>
                    <p>
                      {" "}
                      There are many benefits to joining a club. Clubs provide a
                      sense of community and belonging. They offer opportunities
                      to meet new people, make friends, and network. Clubs can
                      also help you develop new skills and interests, and
                      provide support and encouragement.
                    </p>
                    <h1>UTA Drone club</h1>
                    <button type="button">Request to add</button>
                    <p>
                      {" "}
                      There are many benefits to joining a club. Clubs provide a
                      sense of community and belonging. They offer opportunities
                      to meet new people, make friends, and network. Clubs can
                      also help you develop new skills and interests, and
                      provide support and encouragement.
                    </p> */}
                  </div>
                </div>
                {/* <ul>
        {content.map(c => (
          <li key={c.clubName}> <h1>{c.clubName}</h1>  <button type="button" disabled="">
          Request to add
        </button>
        <p>
          {" "}
          {c.clubActivity}
        </p></li>
        ))}
      </ul> */}
              </div>
            </div>
          </div>
        </div>
       
        {/* centerl meta */}
        <img
          src="images/starbucks-font-free.jpg"
          alt="Nature"
          className="responsive"
          width={600}
          height={400}
        />
        <div className="col-lg-3">
          <aside className="sidebar static"></aside>
        </div>
        {/* sidebar */}
      </div>
    </section>
  </div>
  {/* side panel */}



    </div>
  );
}

export default StudentClub;
