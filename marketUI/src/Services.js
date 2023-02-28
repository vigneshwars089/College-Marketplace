
import './App.css';


import './css/header.css'
import './css/services.css'
import './css/responsive.css'


function Services() {
  return (
    <div className="App">
     
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  <title>Services</title>
  <link rel="stylesheet" href="css/main.min.css" />
  <link rel="stylesheet" href="css/header.css" />
  <link rel="stylesheet" href="css/services.css" />
  <header className="header">
    <nav className="navbar">
      <img src="images/logo-escolar.png" width={150} height={40} alt="" />
      <ul className="nav-menu">
        <li className="nav-item">
        <a href="/" className="nav-link">
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
          <a href="/login" className="nav-link">
            Login/Register
          </a>
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
    <div className="contents">
      <div className="content-div">
        <div className="single-service">
          <div>
            <img src="images/Clubs.jpg" className="service-image" />
          </div>
          <div style={{fontSize:"2rem"}} className="service-title">Manage clubs</div>
          <div className="service-desc">
            To join the clubs and to plan the activities.so that people can
            share their thoughts
          </div>
        </div>
        <div className="single-service">
          <div>
            <img src="images/buying.jpg" className="service-image" />
          </div>
          <div  style={{fontSize:"2rem"}} className="service-title">Buying Products</div>
          <div className="service-desc">Students can buy the products</div>
        </div>
        <div className="single-service">
          <div>
            <img src="images/selling.jpg" className="service-image" />
          </div>
          <div  style={{fontSize:"2rem"}} className="service-title">Selling Products</div>
          <div className="service-desc">
            Students or Business Owners can sell their products in this portal.
          </div>
        </div>
      </div>
      <div className="content-div">
        <div className="single-service">
          <div>
            <img src="images/business.jpg" className="service-image" />
          </div>
          <div  style={{fontSize:"2rem"}} className="service-title">Managing Business </div>
          <div className="service-desc">
            Business owners can manage the business pages
          </div>
        </div>
        <div className="single-service">
          <div>
            <img
              src="images/studentinteraction.jpg"
              className="service-image"
            />
          </div>
          <div  style={{fontSize:"2rem"}} className="service-title">
            Exchange information between peers
          </div>
          <div className="service-desc">
            Students can insteract between them through this portal
          </div>
        </div>
        <div className="single-service">
          <div>
            <img src="images/questions.jpg" className="service-image" />
          </div>
          <div  style={{fontSize:"2rem"}} className="service-title">Posting Queries</div>
          <div className="service-desc">
            Students can chat with business owner reqarding the queries
          </div>
        </div>
      </div>
    </div>
  </div>


    </div>
  );
}

export default Services;
