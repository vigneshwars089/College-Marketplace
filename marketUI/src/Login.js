
import './App.css';
import React, { useState } from "react";
import axios from "axios";
import './css/header.css'
import './css/services.css'
import './css/responsive.css'
import { Link } from 'react-router-dom';
import $ from "jquery";
import { useNavigate } from 'react-router-dom';


function Login() {

  const [emailId, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loaded, setLoaded] = useState(true);
  const navigate = useNavigate();
  // function checkUser(e) {
    
  //   axios({
  //     method: 'post',
  //     url: "https://lxs0671.uta.cloud/backend/login.php",
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     data: { email: email, password: password }
  //   })
  //     .then(result => {

  //       if (result.data === 'wrong password') {
  //         alert("Please check username and password.")
  //         setLoaded(true);
  //       }
  //       else {
  //         window.sessionStorage.setItem("userDetails", JSON.stringify(result.data[0]));
  //         let path = result.data[0].role;
  //         //history.push('/' + path);
  //       }
  //     })
  //     .catch(error => { alert("Please check username and password"); setLoaded(true); }

  //     );
  //   e.preventDefault();
  // }

  const checkUser = async (e) =>{
    e.preventDefault();

  try{
    const res= await axios.get('http://localhost:8000/api/getusers')
  console.log(typeof res.data.users)
  const found=0;
  res.data.users.some(function(el) {
      if(el.emailId === emailId && el.password === password)
      {
        //console.log("found")
          window.sessionStorage.setItem("userEmail", emailId);
          window.sessionStorage.setItem("role", el.role);
          window.sessionStorage.setItem("fname", el.firstName);

          //let path = result.data[0].role;
          //history.push('/' + path);
          if(el.role=='role1'){
            navigate("/studenthome"); }
          else if(el.role=='role2'){
          navigate("/businesshome");}  
          else if(el.role=='role3'){
            navigate("/schooladminhome");} 
            else if(el.role=='role4'){
              navigate("/superadminhome");}
              found=1;
      }
    
    }); 
  if(found==0)
  {
              alert("Please check username and password.")
          //setLoaded(true);
  }
  
  

}catch (error) {
    console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
  }

 
  }
  
  
  

  return (
    <div className="App">
      <>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
  />
  <link rel="stylesheet" href="./css/styles.css" />
  <link rel="stylesheet" href="css/responsive.css" />
  <title>Login</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n        .backgd-img {\n            background-image: url("https://utamavs.com/images/2021/9/2/College_Park_Center_District.jpg?preset=large.socialmediaimage");\n            min-height: 380px;\n            background-position: center;\n            background-repeat: no-repeat;\n            background-size: cover;\n            align-items: center;\n            justify-content: center;\n        }\n    '
    }}
  />

<header className="header">
    <nav className="navbar">
      <img src="images/logo-escolar.png" width={150} height={40} alt="" />
      <ul className="nav-menu">
        <li className="nav-item">
          <a  className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
        <Link to={"/about"}> <a className="nav-link">
            About
          </a></Link>
        </li>
        <li className="nav-item">
          <Link to={"/services"}> <a  className="nav-link">
            Services
          </a></Link>
        </li>
        <li className="nav-item">
        <Link to={"/contactus"}><a   className="nav-link">
            Contact us
          </a></Link>
        </li>
        <li className="nav-item">
        <Link to={"/login"}><a className="nav-link">
            Login/Register
          </a></Link>
        </li>
        <li className="nav-item">
        <a href="http://lxs0671.uta.cloud/escolarapplication/" className="nav-link">
            Blog
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
  {/* <div style={{ backgroundColor: "#0096ff" }}>
    <div className="navigation">
      <div className="nav-center container d-flex">
        <a className="navbar-brand">
          <img src="images/logo-escolar.png" width={150} height={40} alt="" />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
            <ul className="nav-list d-flex">
              <li className="nav-item active">
                <a className="nav-link" href="home.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="services.html" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact us
                </a>
              </li>
              <li className="nav-item">
                <a href="./login.html" className="nav-link">
                  Login/Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  <div className="backgd-img">
    <div className="container">
      <div className="login-form">
        <form onSubmit={checkUser}>
          <h1 style={{ fontSize:"34px" }}>Login</h1>
          <p>
            <b style={{ fontSize:"14px" }}>Already have an account? Login in or</b>
            <Link to={"/signup"}><a href="">
              <b>Sign Up</b>
            </a></Link>
          </p>
          <label htmlFor="email">
            <b style={{ fontSize:"20px" }}>Email</b>
          </label>
          <input style={{  width: "100%" }}
            type="text"
            placeholder="Enter Email"
            name="emailId"
            value={emailId}
            required=""
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="psw">
            <b style={{ fontSize:"20px" }}>Password</b>
          </label>
          <input style={{ width: "100%" }}
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required=""
          />
          <label>
            <input 
              type="checkbox"
              defaultChecked="checked"
              name="remember"
              style={{ width: "100%" }}
            />
            <b style={{ fontSize:"14px" }}>Remember me</b>
          </label>
          <p>
            <a href="forgotpassword.html">
              <b style={{ fontSize:"14px" }}>Forgot Password</b>
            </a>
          </p>
          <div className="buttons">
            <button type="submit" className="signupbtn">
              Login
            </button>
            <button type="button" className="cancelbtn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</>

    </div>
  );
}

export default Login;
