import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';


import '../../css/header.css'
import '../../css/services.css'
import '../../css/responsive.css'


function BusinessHome() {
  return (
    <div className="App">
       <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  <title>Business</title>
  <link rel="icon" href="images/logo.png" type="image/png" sizes="16x16" />
  <link rel="stylesheet" href="css/main.min.css" />
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/header.css" />
  <link rel="stylesheet" href="css/color.css" />
  <link rel="stylesheet" type="text/css" href="css/style2.css" />
  {/* slider stylesheet */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  {/* fonts style */}
  <link
    href="https://fonts.googleapis.com/css?family=Baloo+Chettan|Poppins:400,600,700&display=swap"
    rel="stylesheet"
  />
  {/* Custom styles for this template */}
  <link href="css/style5.css" rel="stylesheet" />
  {/* responsive style */}
  <link href="css/responsive1.css" rel="stylesheet" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\t\t  .scroll {\n      overflow-y: scroll;\n      height: 306px;\n      width: 700px;\n      margin: 10px 5px; padding: 5px;\n      text-align: justify;\n  }\n  .scroll::-webkit-scrollbar {\n      width:5px;\n  }\n  .scroll::-webkit-scrollbar-track {\n      -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3); \n      border-radius:5px;\n  }\n  .scroll::-webkit-scrollbar-thumb {\n      border-radius:5px;\n      -webkit-box-shadow: inset 0 0 6px #007bff; \n  }\n  .responsive {\n\twidth: 100%;\n  max-width: 400px;\n  height: auto;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n \n  }\n\t\t.open-button {\n\t\t  background-color: #555;\n\t\t  color: white;\n\t\t  padding: 16px 20px;\n\t\t  border: none;\n\t\t  cursor: pointer;\n\t\t  opacity: 0.8;\n\t\t  position: fixed;\n\t\t  bottom: 23px;\n\t\t  right: 28px;\n\t\t  width: 280px;\n\t\t}\n\t\t\n\t\t/* The popup chat - hidden by default */\n\t\t.chat-popup {\n\t\t  display: none;\n\t\t  position: fixed;\n\t\t  bottom: 0;\n\t\t  right: 15px;\n\t\t  border: 3px solid #f1f1f1;\n\t\t  z-index: 9;\n\t\t}\n\t\t\n\t\t/* Add styles to the form container */\n\t\t.form-container {\n\t\t  max-width: 300px;\n\t\t  padding: 10px;\n\t\t  background-color: white;\n\t\t}\n\t\t\n\t\t/* Full-width textarea */\n\t\t.form-container textarea {\n\t\t  width: 100%;\n\t\t  padding: 15px;\n\t\t  margin: 5px 0 22px 0;\n\t\t  border: none;\n\t\t  background: #f1f1f1;\n\t\t  resize: none;\n\t\t  min-height: 200px;\n\t\t}\n\t\t\n\t\t/* When the textarea gets focus, do something */\n\t\t.form-container textarea:focus {\n\t\t  background-color: #ddd;\n\t\t  outline: none;\n\t\t}\n\t\t\n\t\t/* Set a style for the submit/send button */\n\t\t.form-container .btn {\n\t\t  background-color: #009f;\n\t\t  color: white;\n\t\t  padding: 16px 20px;\n\t\t  border: none;\n\t\t  cursor: pointer;\n\t\t  width: 100%;\n\t\t  margin-bottom:10px;\n\t\t  opacity: 0.8;\n\t\t}\n\t\t\n\t\t/* Add a red background color to the cancel button */\n\t\t.form-container .cancel {\n\t\t  background-color: red;\n\t\t}\n\t\t\n\t\t/* Add some hover effects to buttons */\n\t\t.form-container .btn:hover, .open-button:hover {\n\t\t  opacity: 1;\n\t\t}\n\t\t.bg-img {\n  /* The image used */\n \n\n  min-height: 380px;\n\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  align-items: center;\n  justify-content: center;\n\n\n\n}\n.container {\n  position: absolute;\n  bottom: 8px;\n  right: 300px;\n left: 500px;\n  \n  margin: 20px;\n \n  max-width: 300px;\n  padding: 16px;\n  background-color: white;\n\n}\n.cards-list {\n  z-index: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.card {\n  margin: 30px auto;\n  width: 300px;\n  height: 300px;\n  border-radius: 0px;\nbox-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);\n  cursor: pointer;\n  transition: 0.4s;\n}\n\n.card .card_image {\n  width: inherit;\n  height: inherit;\n  /* border-radius: 40px; */\n}\n\n.card .card_image img {\n  width: inherit;\n  height: inherit;\n  /* border-radius: 40px; */\n  object-fit: cover;\n}\n\n.card .card_title {\n  text-align: center;\n  border-radius: 0px 0px 40px 40px;\n  font-family: sans-serif;\n  font-weight: bold;\n  font-size: 60px;\n  margin-top: -80px;\n  height: 40px;\n  color: black;\n  background-color: white;\n}\n\n.card:hover {\n\tbox-shadow: 0 0 11px rgba(33,33,33,.2); \n}\n\n.title-white {\n  color: white;\n}\n\n.title-black {\n  color: black;\n}\n\n@media all and (max-width: 500px) {\n  .card-list {\n    /* On small screens, we are no longer using row direction but column */\n    flex-direction: column;\n  }\n}\n\n\t\tbody {font-family: Arial, Helvetica, sans-serif;}\n\t\t* {box-sizing: border-box;}\n\t\t\n\t\t/* Button used to open the chat form - fixed at the bottom of the page */\n\t\t.open-button {\n\t\t  background-color: #555;\n\t\t  color: white;\n\t\t  padding: 16px 20px;\n\t\t  border: none;\n\t\t  cursor: pointer;\n\t\t  opacity: 0.8;\n\t\t  position: fixed;\n\t\t  bottom: 23px;\n\t\t  right: 28px;\n\t\t  width: 280px;\n\t\t}\n\t\t\n\t\t/* The popup chat - hidden by default */\n\t\t.chat-popup {\n\t\t  display: none;\n\t\t  position: fixed;\n\t\t  bottom: 0;\n\t\t  right: 15px;\n\t\t  border: 3px solid #f1f1f1;\n\t\t  z-index: 9;\n\t\t}\n\t\t\n\t\t/* Add styles to the form container */\n\t\t.form-container {\n\t\t  max-width: 300px;\n\t\t  padding: 10px;\n\t\t  background-color: white;\n\t\t}\n\t\t\n\t\t/* Full-width textarea */\n\t\t.form-container textarea {\n\t\t  width: 100%;\n\t\t  padding: 15px;\n\t\t  margin: 5px 0 22px 0;\n\t\t  border: none;\n\t\t  background: #f1f1f1;\n\t\t  resize: none;\n\t\t  min-height: 200px;\n\t\t}\n\t\t\n\t\t/* When the textarea gets focus, do something */\n\t\t.form-container textarea:focus {\n\t\t  background-color: #ddd;\n\t\t  outline: none;\n\t\t}\n\t\t\n\t\t/* Set a style for the submit/send button */\n\t\t.form-container .btn {\n\t\t  background-color: #009f;\n\t\t  color: white;\n\t\t  padding: 16px 20px;\n\t\t  border: none;\n\t\t  cursor: pointer;\n\t\t  width: 100%;\n\t\t  margin-bottom:10px;\n\t\t  opacity: 0.8;\n\t\t}\n\t\t\n\t\t/* Add a red background color to the cancel button */\n\t\t.form-container .cancel {\n\t\t  background-color: red;\n\t\t}\n\t\t\n\t\t/* Add some hover effects to buttons */\n\t\t.form-container .btn:hover, .open-button:hover {\n\t\t  opacity: 1;\n\t\t}\n\t\t.bg-img {\n  /* The image used */\n \n\n  min-height: 380px;\n\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  align-items: center;\n  justify-content: center;\n\n\n}\n\n.navbar-brand {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t}\n\n\t\t.navbar-brand img {\n\t\t\twidth: 150px;\n\t\t\tmargin-right: 40px;\n\t\t}\n\n    .content {\n  padding: 2rem;\n}\n\n.btn {\n  padding: 0.5rem 1.5rem;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n}\n.view-button {\n  background-color: #47525e;\n}\n.update-button {\n  background-color: #d11a2a;\n}\n@media (max-width: 768px) {\n  .content {\n    padding-left: 10px;\n  }\n  .btn {\n    margin-bottom: 10px;\n  }\n  .filters {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n\t\t"
    }}
  />
  <div className="theme-layout">
    <header  style={{overflowX:"inherit"}} className="header">
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
    <div>
      <div className="row">
        <div style={{ width: "50%" }} className="column">
          <div className="card">
          <Link to={"/businessmanageproduct"} style={{textDecoration:"none",position:"absolute",height:"100%",width:"100%"}}>

            <h5 style={{ textAlign: "center",backgroundColor:"rgba(169, 169, 169, 3.6)" }}>
              {" "}
              <b style={{fontSize:"20px",color:"black",backgroundColor:"rgba(169, 169, 169, 3.6)"}}> Manage Products</b>
            </h5></Link>
            <img style={{paddingTop:"44px"}}  src="images/Add product.png" />
          </div>
        </div>
        <div style={{ display: "contents" }} className="column">
          <div className="card">
          <Link to={"/businessmanageadvertisement"} style={{textDecoration:"none",position:"absolute",height:"100%",width:"100%"}}>
            <h5  style={{ textAlign: "center",backgroundColor:"rgba(169, 169, 169, 3.6)" }}>
              {" "}
              <b style={{fontSize:"20px",color:"black",backgroundColor:"rgba(169, 169, 169, 3.6)"}}>Manage Advertisments</b>
            </h5></Link>
            <img  src="images/advertising.png" />
          </div>
        </div>
      </div>
      <div className="row">
        <div style={{ display: "contents" }} className="column">
          <div className="card">
          <Link to={"/businessmanagebusiness"} style={{textDecoration:"none",position:"absolute",height:"100%",width:"100%"}}>

            <h5 style={{ textAlign: "center" ,backgroundColor:"rgba(169, 169, 169, 3.6)"}}>
              {" "}
              <b style={{fontSize:"20px",color:"black",backgroundColor:"rgba(169, 169, 169, 3.6)"}}>Manage Business</b>
            </h5></Link>
            <img  src="images/business.png" />
          </div>
          <div style={{ display: "contents" }} className="column">
            <div className="card">
            <Link to={"/businesschat"} style={{textDecoration:"none",position:"absolute",height:"100%",width:"100%"}}>

              <h5 style={{ textAlign: "center" ,backgroundColor:"rgba(169, 169, 169, 3.6)"}}>
                {" "}
                <b style={{fontSize:"20px",color:"black",backgroundColor:"rgba(169, 169, 169, 3.6)"}}>Chat</b>
              </h5></Link>
              <img to  src="images/pic5.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default BusinessHome;
