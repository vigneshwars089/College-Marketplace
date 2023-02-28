import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';


import '../../css/header.css'
import '../../css/services.css'
import '../../css/responsive.css'


function StudentHome() {
  return (
    <div className="App">
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  <title>Student</title>
  <link rel="stylesheet" href="css/main.min.css" />
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/responsive.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  {/* slider stylesheet */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css"
  />
  <link rel="stylesheet" type="text/css" href="css/style2.css" />
  {/* fonts style */}
  <link
    href="https://fonts.googleapis.com/css?family=Baloo+Chettan|Poppins:400,600,700&display=swap"
    rel="stylesheet"
  />
  {/* Custom styles for this template */}
  <link href="css/header.css" rel="stylesheet" />
  {/* responsive style */}
  <link href="css/responsive1.css" rel="stylesheet" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n   \n.dropdown-content a {\n    float: none;\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n    text-align: left;\n}\n\n.dropdown-content a:hover {\n    background-color: #ddd;\n}\n\n.nav-dropdown:hover .dropdown-content {\n    display: block;\n}     body {\n      overflow-x: auto; \n overflow-y: auto;  \n     font-family: Arial, Helvetica, sans-serif;\n        }\n\n        * {\n            box-sizing: border-box;\n        }\n\n        /* Button used to open the chat form - fixed at the bottom of the page */\n        .open-button {\n            background-color: #555;\n            color: white;\n            padding: 16px 20px;\n            border: none;\n            cursor: pointer;\n            opacity: 0.8;\n            position: fixed;\n            bottom: 23px;\n            right: 28px;\n            width: 280px;\n        }\n\n        /* The popup chat - hidden by default */\n        .chat-popup {\n            display: none;\n            position: fixed;\n            bottom: 0;\n            right: 15px;\n            border: 3px solid #f1f1f1;\n            z-index: 9;\n        }\n\n        /* Add styles to the form container */\n        .form-container {\n            max-width: 300px;\n            padding: 10px;\n            background-color: white;\n        }\n\n        /* Full-width textarea */\n        .form-container textarea {\n            width: 100%;\n            padding: 15px;\n            margin: 5px 0 22px 0;\n            border: none;\n            background: #f1f1f1;\n            resize: none;\n            min-height: 200px;\n        }\n\n        /* When the textarea gets focus, do something */\n        .form-container textarea:focus {\n            background-color: #ddd;\n            outline: none;\n        }\n\n        /* Set a style for the submit/send button */\n        .form-container .btn {\n            background-color: #009f;\n            color: white;\n            padding: 16px 20px;\n            border: none;\n            cursor: pointer;\n            width: 100%;\n            margin-bottom: 10px;\n            opacity: 0.8;\n        }\n\n        /* Add a red background color to the cancel button */\n        .form-container .cancel {\n            background-color: red;\n        }\n\n        /* Add some hover effects to buttons */\n        .form-container .btn:hover,\n        .open-button:hover {\n            opacity: 1;\n        }\n\n        .bg-img {\n            background-image: url("https://utamavs.com/images/2021/9/2/College_Park_Center_District.jpg?preset=large.socialmediaimage");\n\n            min-height: 380px;\n            background-position: center;\n            background-repeat: no-repeat;\n            background-size: cover;\n            align-items: center;\n            justify-content: center;\n\n\n\n        }\n\n        .container {\n            position: absolute;\n            bottom: 8px;\n            right: 300px;\n            left: 500px;\n\n            margin: 20px;\n\n            max-width: 300px;\n            padding: 16px;\n            background-color: white;\n\n        }\n\n        .cards-list {\n            z-index: 0;\n            width: 100%;\n            display: flex;\n            justify-content: space-around;\n            flex-wrap: wrap;\n        }\n\n        .card {\n            margin: 30px auto;\n            width: 300px;\n            height: 300px;\n            border-radius: 40px;\n            box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);\n            cursor: pointer;\n            transition: 0.4s;\n        }\n\n        .card .card_image {\n            width: inherit;\n            height: inherit;\n            border-radius: 40px;\n        }\n\n        .card .card_image img {\n            width: inherit;\n            height: inherit;\n            border-radius: 40px;\n            object-fit: cover;\n        }\n\n        .card .card_title {\n            text-align: center;\n            border-radius: 0px 0px 40px 40px;\n            font-family: sans-serif;\n            font-weight: bold;\n            font-size: 60px;\n            margin-top: -80px;\n            height: 40px;\n            color: black;\n            background-color: white;\n        }\n\n        .card:hover {\n            transform: scale(0.9, 0.9);\n            box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),\n                -5px -5px 30px 15px rgba(0, 0, 0, 0.22);\n        }\n\n        .title-white {\n            color: white;\n        }\n\n        .title-black {\n            color: black;\n        }\n\n        .navbar-brand img {\n    width: 128px;\n    margin-right: 5px;\n}\n\n        @media all and (max-width: 500px) {\n            .card-list {\n                /* On small screens, we are no longer using row direction but column */\n                flex-direction: column;\n            }\n        }\n    '
    }}
  />
  <header style={{overflow:"inherit"}} className="header">
    <nav className="navbar">
      <img src="images/logo-escolar.png" width={150} height={40} alt="" />
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="./home.html" className="nav-link">
            Home
          </a>
        </li>
        <Link to={"/about"}>
        <li className="nav-item">
          <a href="./about.html" className="nav-link">
            About
          </a>
        </li></Link>
        <Link to={"/services"}>
        <li className="nav-item">
          <a href="./services.html" className="nav-link">
            Services
          </a>
        </li></Link>
        <Link to={"/contactus"}>
        <li className="nav-item">
          <a href="./contact.html" className="nav-link">
            Contact us
          </a>
        </li></Link>
        <li className="nav-item">
          <div className="nav-dropdown" id="nav-dropdown">
            <div className="role-title">
              Student
              <i className="fa fa-caret-down" />
            </div>
            <div className="dropdown-content">
              <a href="student.html" className="nav-link">
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
  <div className="bg-img">
    <div>
      <div className="cards-list">
        <div className="card 1">
          <div className="card_image">
            {" "}
            <img src="images/pic1.jpg" />{" "}
          </div>
          <div className="card_title title-white">
          <Link to={"/studentshopping"}> <p style={{fontSize:"30px"}}>
              <b>Shopping</b>
            </p></Link>
          </div>
        </div>
        <div className="card 2">
          <div className="card_image">
            <img src="images/pic2.jpg" />
          </div>
          <div className="card_title title-white">
          <Link to={"/studentclub"}> <p style={{fontSize:"30px"}}>
              <b>Houses</b>
            </p></Link>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="cards-list">
        <div className="card 1">
          <div className="card_image">
            {" "}
            <img src="images/pic3.jpg" />{" "}
          </div>
          <div className="card_title title-white">
          <Link to={"/studentmanageproduct"}> <p style={{fontSize:"30px"}}>
              <b>Trades</b>
            </p></Link>
          </div>
        </div>
        <div className="card 2">
          <div className="card_image">
            <img src="images/pic4.jpg" />
          </div>
          <div className="card_title title-white">
          <Link to={"/studentpost"}>  <p style={{fontSize:"30px"}}>
              <b>Post</b>
            </p></Link>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="cards-list">
        <div className="card 1">
          <div className="card_image">
            {" "}
            <img src="images/pic5.jpg" />{" "}
          </div>
          <div className="card_title title-white">
          <Link to={"/studentchat"}> <p  style={{fontSize:"30px"}}>
              <b>Chat</b>
            </p></Link>
          </div>
        </div>
        <div className="card 2">
          <div className="card_image">
            <img src="images/pic6.jpg" />
          </div>
          <div className="card_title title-white">
          <Link to={"/studentadvertisement"}> <p style={{fontSize:"30px"}}>
              <b>View Ads</b>
            </p></Link> 
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default StudentHome;
