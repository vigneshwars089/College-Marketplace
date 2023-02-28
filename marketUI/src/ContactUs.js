
import './App.css';


import './css/header.css'
import './css/services.css'
import './css/responsive.css'


function ContactUs() {
  return (
    <div className="App">
      <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css/newstyles.css" />
  <link rel="stylesheet" href="css/contact.css" />
  <title>Contact</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n        html {\n    scroll-behavior: smooth;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    font-size: 20px;\n    font-family: Helvetica, Arial, sans-serif;\n    color: #47525e;\n    height: 100%;\n}\n\nli {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n}\n\n.backgd-img {\n    background-image: url("https://utamavs.com/images/2021/9/2/College_Park_Center_District.jpg?preset=large.socialmediaimage");\n    min-height: 500px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    align-items: center;\n    justify-content: center;\n}\n\n.header {\n    background-color: #0096ff;\n    border-bottom: 1px solid #e2e8f0;\n    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;\n}\n\n.navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 1rem;\n}\n\n.hamburger {\n    display: none;\n}\n\n.bar {\n    display: block;\n    width: 25px;\n    height: 3px;\n    margin: 5px auto;\n    -webkit-transition: all 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out;\n    background-color: #101010;\n}\n\n.nav-menu {\n    display: flex;\n    align-items: center;\n    margin-right: 2rem;\n}\n\n.nav-item {\n    margin-left: 3rem;\n}\n\n.nav-link {\n    color: #000;\n}\n\n.nav-link-active {\n    background-color: #76c893;\n    color: #fff;\n}\n\n.nav-link:hover {\n    color: #ffff;\n}\n\n.nav-logo {\n    font-size: 25px;\n    background: #76c0c80b;\n    color: #ffffff;\n    padding: 0.5rem;\n    border-radius: 5px;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n}\n\n.dropdown-content a {\n    float: none;\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n    text-align: left;\n}\n\n.dropdown-content a:hover {\n    background-color: #ddd;\n}\n\n.nav-dropdown:hover .dropdown-content {\n    display: block;\n}\n\n.role-title {\n    cursor: pointer;\n    color: #000000d6;\n}\n\n.styled-table {\n    border-collapse: collapse;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\n    margin-top: 1rem;\n}\n\n.styled-table thead tr {\n    background-color: #0096ff;\n    color: #ffffff;\n    text-align: left;\n}\n\n.styled-table th,\n.styled-table td {\n    padding: 12px 15px;\n}\n\n.styled-table tbody {\n    text-align: left;\n}\n\n.styled-table tbody tr {\n    border-bottom: thin solid #dddddd;\n    background-color: #ffffff;\n}\n\n.styled-table tbody tr:nth-of-type(even) {\n    background-color: #f3f3f3;\n}\n\n.styled-table tbody tr:last-of-type {\n    border-bottom: 2px solid #47525e;\n}\n\n@media (max-width: 768px) {\n    .nav-menu {\n        position: fixed;\n        left: -100%;\n        top: 5rem;\n        flex-direction: column;\n        background-color: #fff;\n        width: 100%;\n        border-radius: 10px;\n        text-align: center;\n        transition: 0.5s;\n        padding: 0;\n        height: 100%;\n        overflow-y: auto;\n        margin: 0;\n        z-index: 9999;\n    }\n\n    .header {\n        padding: 2rem 0;\n    }\n\n    .nav-menu.active {\n        left: 0;\n    }\n\n    .nav-item {\n        margin: 2.5rem 0;\n    }\n\n    .hamburger {\n        display: block;\n        cursor: pointer;\n    }\n\n    .hamburger.active .bar:nth-child(2) {\n        opacity: 0;\n    }\n\n    .hamburger.active .bar:nth-child(1) {\n        -webkit-transform: translateY(8px) rotate(45deg);\n        transform: translateY(8px) rotate(45deg);\n    }\n\n    .hamburger.active .bar:nth-child(3) {\n        -webkit-transform: translateY(-8px) rotate(-45deg);\n        transform: translateY(-8px) rotate(-45deg);\n    }\n}\n\ninput[type="email"],\ninput[type="text"],\ninput[type="textarea"],\ninput[type="password"],\ninput[type="date"] {\n    width: 250px;\n    padding: 0.7rem;\n    outline: none;\n    border: 1px solid #a9a9a9;\n    border-radius: 5px;\n    font-size: 15px;\n}\n\ninput[type="date"] {\n    width: 200px;\n    padding: 0.5rem;\n    outline: none;\n    border: 1px solid #a9a9a9;\n    border-radius: 5px;\n    font-size: 16px;\n    cursor: pointer;\n}\n\ninput[type="number"] {\n    -moz-appearance: textfield;\n    -webkit-appearance: textfield;\n    appearance: textfield;\n    width: 250px;\n    padding: 0.7rem;\n    outline: none;\n    border: 1px solid #a9a9a9;\n    border-radius: 5px;\n    font-size: 15px;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n}\n\n.float-left {\n    float: left;\n}\n\n.float-right {\n    float: right;\n}\n\n.clearfix::after {\n    content: " ";\n    display: block;\n    height: 0;\n    clear: both;\n}\n\n.pad-top-2 {\n    padding-top: 2rem;\n}\n\n.pad-top {\n    padding-top: 1rem;\n}\n\n.align-center {\n    text-align: center;\n}\n\nbutton:disabled,\nbutton[disabled] {\n    padding: 1rem;\n    width: -moz-fit-content;\n    width: fit-content;\n    cursor: not-allowed;\n    border-radius: 5px;\n    outline: none;\n    border: none;\n    background-color: #ddd;\n}\n\n.main-div {\n    height: calc(100% - 65px);\n    overflow-y: auto;\n}\n\n.sub-title {\n    padding-bottom: 1rem;\n    font-weight: bold;\n}\n\n.main-title {\n    background: #0096ff;\n    color: #ffffff;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n@media (max-width: 768px) {\n    .main-div {\n        height: calc(100% - 110px);\n    }\n\n    .sub-title {\n        padding-left: 1rem;\n    }\n}\n.contact-title {\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .contact-us {\n    height: calc(100% - 65px);\n    overflow-y: auto;\n  }\n  .content-div {\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  }\n  .form-div {\n    display: flex;\n  }\n  .ctm-text {\n    width: 515px;\n    text-align: start;\n  }\n  .left-div {\n    margin-right: 1rem;\n  }\n  .second-row {\n    padding-top: 2rem;\n  }\n  textarea {\n    resize: none;\n    border-radius: 5px;\n    border: 1px solid #a9a9a9;\n    padding: 0.5rem;\n    width: 515px;\n    height: 125px;\n  }\n  \n  .submit-btn {\n    padding: 0.5rem 3rem;\n    color: white;\n    background-color:#0096ff;\n    font-size: 16px;\n    cursor: pointer;\n    border-radius: 5px;\n  }\n  #wait {\n    position: absolute;\n    top: 40%;\n    background-color: white;\n    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;\n    width: 300px;\n    height: 250px;\n    left: 40%;\n    display: none;\n    align-items: center;\n    z-index: 999;\n  }\n  #block {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: black;\n    opacity: 0.1;\n    z-index: 99;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    display: none;\n  }\n  @media (max-width: 768px) {\n    .form-div {\n      flex-direction: column;\n    }\n    .ctm-text {\n      width: 300px;\n    }\n    .left-div {\n      margin-right: 0;\n      margin-bottom: 1rem;\n    }\n    .second-row {\n      padding-top: 1rem;\n    }\n    textarea {\n      width: 250px;\n    }\n    .contact-us {\n      height: calc(100% - 110px);\n    }\n  }\n  \n    '
    }}
  />
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
  <div className="contact-us">
    <div className="contact-title">Contact us</div>
    <div className="pad-top align-center content-div">
      <div className="pad-top-2">
        <form method="post" id="contact-form">
          <div className="form-div">
            <div className="left-div">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required=""
                autoComplete="off"
                id="firstName"
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required=""
                autoComplete="off"
              />
            </div>
          </div>
          <div className="form-div second-row">
            <div className="left-div">
              <input
                name="phoneNumber"
                placeholder="Phone Number(optional)"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                type="number"
                maxLength={10}
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
                autoComplete="off"
                id="email"
              />
            </div>
          </div>
          <div className="pad-top-2">
            <textarea
              name="query"
              placeholder="Enter your comments"
              required=""
              defaultValue={""}
            />
          </div>
          <div className="pad-top-2">
            <input type="submit" className="submit-btn" defaultValue="Submit" />
          </div>
        </form>
      </div>
    </div>
  </div>
</>

    </div>
  );
}

export default ContactUs;
