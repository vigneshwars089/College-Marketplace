import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

import '../../css/newstyles.css'
import '../../css/styles.css' 
import '../../css/header.css'
import '../../css/services.css'
import '../../css/responsive.css'
import '../../css/style2.css'

function BusinessManageProduct() {
  return (
    <div className="App">

<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  <title>manage product business</title>
  <link rel="stylesheet" href="css/main.min.css" />
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/style2.css" />
  <link rel="stylesheet" href="css/header.css" />
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
        '\n\t\t.scroll {\n\t\t\toverflow-y: scroll;\n\t\t\theight: 306px;\n\t\t\twidth: 700px;\n\t\t\tmargin: 10px 5px;\n\t\t\tpadding: 5px;\n\t\t\ttext-align: justify;\n\t\t}\n\n\t\t.scroll::-webkit-scrollbar {\n\t\t\twidth: 5px;\n\t\t}\n\n\t\t.scroll::-webkit-scrollbar-track {\n\t\t\t-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n\t\t\tborder-radius: 5px;\n\t\t}\n\n\t\t.scroll::-webkit-scrollbar-thumb {\n\t\t\tborder-radius: 5px;\n\t\t\t-webkit-box-shadow: inset 0 0 6px #007bff;\n\t\t}\n\n\t\t.responsive {\n\t\t\twidth: 100%;\n\t\t\tmax-width: 400px;\n\t\t\theight: auto;\n\t\t\tdisplay: block;\n\t\t\tmargin-left: auto;\n\t\t\tmargin-right: auto;\n\n\t\t}\n\n\t\t.open-button {\n\t\t\tbackground-color: #555;\n\t\t\tcolor: white;\n\t\t\tpadding: 16px 20px;\n\t\t\tborder: none;\n\t\t\tcursor: pointer;\n\t\t\topacity: 0.8;\n\t\t\tposition: fixed;\n\t\t\tbottom: 23px;\n\t\t\tright: 28px;\n\t\t\twidth: 280px;\n\t\t}\n\n\t\t/* The popup chat - hidden by default */\n\t\t.chat-popup {\n\t\t\tdisplay: none;\n\t\t\tposition: fixed;\n\t\t\tbottom: 0;\n\t\t\tright: 15px;\n\t\t\tborder: 3px solid #f1f1f1;\n\t\t\tz-index: 9;\n\t\t}\n\n\t\t/* Add styles to the form container */\n\t\t.form-container {\n\t\t\tmax-width: 300px;\n\t\t\tpadding: 10px;\n\t\t\tbackground-color: white;\n\t\t}\n\n\t\t/* Full-width textarea */\n\t\t.form-container textarea {\n\t\t\twidth: 100%;\n\t\t\tpadding: 15px;\n\t\t\tmargin: 5px 0 22px 0;\n\t\t\tborder: none;\n\t\t\tbackground: #f1f1f1;\n\t\t\tresize: none;\n\t\t\tmin-height: 200px;\n\t\t}\n\n\t\t/* When the textarea gets focus, do something */\n\t\t.form-container textarea:focus {\n\t\t\tbackground-color: #ddd;\n\t\t\toutline: none;\n\t\t}\n\n\t\t/* Set a style for the submit/send button */\n\t\t.form-container .btn {\n\t\t\tbackground-color: #009f;\n\t\t\tcolor: white;\n\t\t\tpadding: 16px 20px;\n\t\t\tborder: none;\n\t\t\tcursor: pointer;\n\t\t\twidth: 100%;\n\t\t\tmargin-bottom: 10px;\n\t\t\topacity: 0.8;\n\t\t}\n\n\t\t/* Add a red background color to the cancel button */\n\t\t.form-container .cancel {\n\t\t\tbackground-color: red;\n\t\t}\n\n\t\t/* Add some hover effects to buttons */\n\t\t.form-container .btn:hover,\n\t\t.open-button:hover {\n\t\t\topacity: 1;\n\t\t}\n\n\t\t.bg-img {\n\t\t\t/* The image used */\n\t\t\tbackground-image: url("images/pics/CPC-Panorama-September-2012-for-invite-copy-27byfgi.png");\n\n\t\t\tmin-height: 380px;\n\n\t\t\t/* Center and scale the image nicely */\n\t\t\tbackground-position: center;\n\t\t\tbackground-repeat: no-repeat;\n\t\t\tbackground-size: cover;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\n\n\n\t\t}\n\n\t\t.container {\n\t\t\tposition: absolute;\n\t\t\tbottom: 8px;\n\t\t\tright: 300px;\n\t\t\tleft: 500px;\n\n\t\t\tmargin: 20px;\n\n\t\t\tmax-width: 300px;\n\t\t\tpadding: 16px;\n\t\t\tbackground-color: white;\n\n\t\t}\n\n\t\t.cards-list {\n\t\t\tz-index: 0;\n\t\t\twidth: 100%;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-around;\n\t\t\tflex-wrap: wrap;\n\t\t}\n\n\t\t.card {\n\t\t\tmargin: 30px auto;\n\t\t\twidth: 300px;\n\t\t\theight: 300px;\n\t\t\tborder-radius: 0px;\n\t\t\tbox-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);\n\t\t\tcursor: pointer;\n\t\t\ttransition: 0.4s;\n\t\t}\n\n\t\t.card .card_image {\n\t\t\twidth: inherit;\n\t\t\theight: inherit;\n\t\t\t/* border-radius: 40px; */\n\t\t}\n\n\t\t.card .card_image img {\n\t\t\twidth: inherit;\n\t\t\theight: inherit;\n\t\t\t/* border-radius: 40px; */\n\t\t\tobject-fit: cover;\n\t\t}\n\n\t\t.card .card_title {\n\t\t\ttext-align: center;\n\t\t\tborder-radius: 0px 0px 40px 40px;\n\t\t\tfont-family: sans-serif;\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 60px;\n\t\t\tmargin-top: -80px;\n\t\t\theight: 40px;\n\t\t\tcolor: black;\n\t\t\tbackground-color: white;\n\t\t}\n\n\t\t.card:hover {\n\n\t\t\tbox-shadow: 0 0 11px rgba(33, 33, 33, .2);\n\t\t}\n\n\n\t\t.title-white {\n\t\t\tcolor: white;\n\t\t}\n\n\t\t.title-black {\n\t\t\tcolor: black;\n\t\t}\n\n\t\t@media all and (max-width: 500px) {\n\t\t\t.card-list {\n\t\t\t\t/* On small screens, we are no longer using row direction but column */\n\t\t\t\tflex-direction: column;\n\t\t\t}\n\t\t}\n\n\t\tbody {\n\t\t\tfont-family: Arial, Helvetica, sans-serif;\n\t\t}\n\n\t\t* {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\n\t\t/* Button used to open the chat form - fixed at the bottom of the page */\n\t\t.open-button {\n\t\t\tbackground-color: #555;\n\t\t\tcolor: white;\n\t\t\tpadding: 16px 20px;\n\t\t\tborder: none;\n\t\t\tcursor: pointer;\n\t\t\topacity: 0.8;\n\t\t\tposition: fixed;\n\t\t\tbottom: 23px;\n\t\t\tright: 28px;\n\t\t\twidth: 280px;\n\t\t}\n\n\t\t/* The popup chat - hidden by default */\n\t\t.chat-popup {\n\t\t\tdisplay: none;\n\t\t\tposition: fixed;\n\t\t\tbottom: 0;\n\t\t\tright: 15px;\n\t\t\tborder: 3px solid #f1f1f1;\n\t\t\tz-index: 9;\n\t\t}\n\n\t\t/* Add styles to the form container */\n\t\t.form-container {\n\t\t\tmax-width: 300px;\n\t\t\tpadding: 10px;\n\t\t\tbackground-color: white;\n\t\t}\n\n\t\t/* Full-width textarea */\n\t\t.form-container textarea {\n\t\t\twidth: 100%;\n\t\t\tpadding: 15px;\n\t\t\tmargin: 5px 0 22px 0;\n\t\t\tborder: none;\n\t\t\tbackground: #f1f1f1;\n\t\t\tresize: none;\n\t\t\tmin-height: 200px;\n\t\t}\n\n\t\t/* When the textarea gets focus, do something */\n\t\t.form-container textarea:focus {\n\t\t\tbackground-color: #ddd;\n\t\t\toutline: none;\n\t\t}\n\n\t\t/* Set a style for the submit/send button */\n\t\t.form-container .btn {\n\t\t\tbackground-color: #009f;\n\t\t\tcolor: white;\n\t\t\tpadding: 16px 20px;\n\t\t\tborder: none;\n\t\t\tcursor: pointer;\n\t\t\twidth: 100%;\n\t\t\tmargin-bottom: 10px;\n\t\t\topacity: 0.8;\n\t\t}\n\n\t\t/* Add a red background color to the cancel button */\n\t\t.form-container .cancel {\n\t\t\tbackground-color: red;\n\t\t}\n\n\t\t/* Add some hover effects to buttons */\n\t\t.form-container .btn:hover,\n\t\t.open-button:hover {\n\t\t\topacity: 1;\n\t\t}\n\n\t\t.bg-img {\n\t\t\t/* The image used */\n\t\t\tbackground-image: url("images/CPC-Panorama-September-2012-for-invite-copy-27byfgi.png");\n\n\t\t\tmin-height: 380px;\n\n\t\t\t/* Center and scale the image nicely */\n\t\t\tbackground-position: center;\n\t\t\tbackground-repeat: no-repeat;\n\t\t\tbackground-size: cover;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t}\n\t'
    }}
  />
  <header  style={{overflowX:"inherit"}}  className="header">
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
              <a href="login">Logout</a>
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
  {/* <div style="height:30px"></div> */}
  <div className="bg-img">
    <div className="row">
      <div style={{ width: "50%" }} className="column">
        <div className="card">
        <Link to={"/businessaddproduct"} style={{textDecoration:"none",position:"absolute",height:"100%",width:"100%"}}>
          <h5 style={{ textAlign: "center" }}>
            {" "}
            <b style={{fontSize:"20px",color:"black"}}>Add products</b>
          </h5></Link>
          <img 
            onclick="myfunction()"
            style={{ paddingTop: "35px" }}
            src="images/Add product.png"
          />
          {/* <button onclick="myfunction()"> add product</button>
				<button onclick="myfunction1()">remove products </button> */}
        </div>
      </div>
      <div style={{ display: "contents" }} className="column">
        <div className="card">
        <Link to={"/businessremoveproduct"} style={{textDecoration:"none",position:"absolute",height:"100%",width:"100%"}}>
          <h5 style={{ textAlign: "center" }}>
            {" "}
            <b style={{fontSize:"20px",color:"black"}}>Remove products</b>
          </h5></Link>
          <img style={{paddingTop:"35px"}} onclick="myfun1()" src="images/remove.png" />
          {/* <button onclick="myfun()"> add  Advertisments </button>
				<button onclick="myfun1()"> remove  Advertisments </button> */}
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default BusinessManageProduct;
