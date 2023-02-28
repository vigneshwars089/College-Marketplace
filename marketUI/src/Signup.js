
import './App.css';
import React, { Component,useState } from 'react'
import axios from "axios";
import $ from "jquery";
import './css/header.css'
import './css/services.css'
import './css/responsive.css'
import { Link } from 'react-router-dom';



function SignUp() {

  // state = {
  //   email: "",
  //   pwd: "",
  //   univ:"",
  //   signupRole: "student",
  //   formErrors: { email: '', univ: '', pwd: '', cpwd: '' },
  //   emailValid: false,
  //   formValid: false,
  //   fnameValid: false,
  //   pwdValid: false,
  //   cpwdValid: false,
  //   Response:""
  // };
  // handleUserInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   this.setState({ [name]: value },
  //     () => { this.validateField(name, value) });
  // }

  // handleSubmit = (e, onSubmitProps) => {
  //   e.preventDefault();
  //   console.log(this.state.fname);
  //   console.log(this.state.signupRole);
  //   let formData = new FormData();
  //   formData.append("email", this.state.email);
  //   formData.append("pwd", this.state.pwd);
  //   formData.append("univ", this.state.univ);
  //   formData.append("signupRole", this.state.signupRole);
  //   const url = './backend/register.php';
  //   axios.post(url, formData)
  //     .then(res =>{ console.log(res.data);
  //       this.setState({Response:res.data});
  //     })
  //     .catch(err => console.log(err));
  //   console.log('fname', this.state.fname);
  //   this.setState({ fname: "",lname: "",
  //   email: "",
  //   pwd: "",
  //   cpwd: "", });
  //   console.log('fname', this.state.fname);

  //   e.target.reset();

  // } 
  const [emaildId, setEmail] = useState("");
  const [password, setPsw] = useState("");
  const [pswrenter, setpswrenter] = useState("");
  const [university, setschool] = useState("");
  const [role, setRole] = useState("");
  const [result, setResult] = useState("");
  const [firstName, setfname] = useState("");
  const [lastName, setlname] = useState("");

  const [state, setState] = React.useState({
    email: "",
    password: "",
    pswrenter: "",
    university: "",
    role: "",
    result: "",
  })
  const handleChange1 = (e) => {
    setEmail(e.target.value);
  };

  const handleChange2 = (e) => {
    setPsw(e.target.value);
  };
  const handleChange3 = (e) => {
    setpswrenter(e.target.value);
  };
  const handleChange4 = (e) => {
    setschool(e.target.value);
  };
  const handleChange5 = (e) => {
    setRole(e.target.value);
  };
  const handleChange6 = (e) => {
    setfname(e.target.value);
  };
  const handleChange7 = (e) => {
    setlname(e.target.value);
  };

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // this.setState({ [name]: value },
    //   () => { this.validateField(name, value) });
  }
  
  const validateField =(fieldName, value) => {
    console.log('formValid', this.state.formValid);
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let fnameValid = this.state.fnameValid;
    let pwdValid = this.state.pwdValid;
    let cpwdValid = this.state.cpwdValid;


    switch (fieldName) {
      case 'email':
        emailValid = /\S+@\S+\.\S+/.test(value);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        console.log('emailValid', emailValid);
        console.log('fieldValidationErrors', fieldValidationErrors)
        break;
      case 'fname':
        fnameValid = value.length >= 6
        console.log('fnameValid', fnameValid);
        fieldValidationErrors.fname = fnameValid ? '' : ' is too short';
        break;
      case 'pwd':
        pwdValid = value.length >= 6
        console.log('fnameValid', fnameValid);
        fieldValidationErrors.pwd = pwdValid ? '' : ' is too short';
        break;
      case 'cpwd':
        console.log('passwordMatchvalues', (this.state.cpwd),(this.state.pwd));
        console.log('passwordMatch', (this.state.cpwd)===(this.state.pwd));
        cpwdValid = (value.length >= 6 && (this.state.cpwd)===(this.state.pwd));
        console.log('fnameValid', fnameValid);
        fieldValidationErrors.cpwd = cpwdValid ? '' : ' is too short,does not match with pasword';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      fnameValid: fnameValid,
      pwdValid: pwdValid,
      cpwdValid: cpwdValid
    }, this.validateForm);
  }
  const validateForm=()=> {
    console.log('formValidemail', this.state.emailValid);
    console.log('fnamevalidemail', this.state.fnameValid);
    this.setState({ formValid: this.state.emailValid && this.state.fnameValid && this.state.pwdValid && this.state.cpwdValid });
    console.log('formValid', this.state.formValid);
  }
  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setState({
  //     ...state,
  //     [e.target.name]: value
  //   });
  // };
  const handleSumbit = async (e) => {
    const msg="";
      e.preventDefault();
      const form = $(e.target);
      // $.ajax({
      //     type: "POST",
      //     url: form.attr("action"),
      //     data: form.serialize(),
      //     success(data) {
      //         setResult(data);
      //         alert(data);
      //     },
      // });
      try{
        const res= await axios.post('http://localhost:8000/api/adduser',null, {params: {
          firstName:firstName.toString(),
          lastName:lastName.toString(),
          emailId:emaildId.toString(),
          lastName:lastName.toString(),
          password:password.toString(),
          university:university.toString(),
          role:role.toString()
      } })
        if(res.data.status===200)
    {
      window.location.reload();
       alert("Order placed successfully");
    }
    }catch (error) {
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
      }



      
  };
  
  
  return (
    
    <div className="App">
      
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
  />
  <link rel="stylesheet" href="./css/styles.css" />
  <link rel="stylesheet" href="css/responsive.css" />
  <title>SignUp</title>
  <style
  dangerouslySetInnerHTML={{
    __html:
      '\n        .backgd-img {\n            background-image: url("https://utamavs.com/images/2021/9/2/College_Park_Center_District.jpg?preset=large.socialmediaimage");\n            min-height: 380px;\n            background-position: center;\n            background-repeat: no-repeat;\n            background-size: cover;\n            align-items: center;\n            justify-content: center;\n        }\n\n        body {\n           overflow-x: auto;\n           overflow-y: auto; \n\n        }\n        .login-form input{\n            width: 100%;\n        }\n        .login-form label{\n            font-size: 14px;\n        }\n    '
  }}
  />
  <div style={{ backgroundColor: "#0096ff" }}>
    <div className="navigation">
      <div className="nav-center container d-flex">
        <a className="navbar-brand" href="index.html">
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
                  {" "}
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
                <a className="nav-link" href="/login">
                  Login/Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="backgd-img">
    <div className="container">
      <div className="login-form">
        <form  
                onSubmit={(event) => handleSumbit(event)} >
          <h1>Sign Up</h1>
          <p>
            <b style={{ fontSize:"14px" }}>Please fill in this form to create an account or</b>
            <Link to={"/login"}><a  href="">
              <b style={{ fontSize:"14px" }}>Login</b>
            </a></Link>
          </p>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="emaildId"
            id="emaildId"
            value={emaildId}
            onChange={(event) => handleChange1(event)}
            required=""
          />
           <label htmlFor="firstName">
            <b>First name</b>
          </label>
          <input
            type="text"
            placeholder="Enter First name"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(event) => handleChange6(event)}
            required=""
          />
           <label htmlFor="lastName">
            <b>Last name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Last name"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(event) => handleChange7(event)}
            required=""
          />
          {/* <label htmlFor="DOB">
            <b>Date Of Birth</b>
          </label>
          <input type="date" placeholder="DOB" name="psw" required="" />
          <label htmlFor="Address">
            <b>Address</b>
          </label>
          <input type="text" placeholder="Address" name="Address" required="" /> */}
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(event) => handleChange2(event)}
            required=""
          />
          <label htmlFor="pswrenter">
            <b>Renter Password</b>
          </label>
          <input
            type="password"
            placeholder="Renter Password"
            name="pswrenter"
            value={pswrenter}
            onChange={(event) => handleChange3(event)}
            required=""
          />
          <label htmlFor="university">
            <b>University</b>
          </label>
          <select style={{ height: 40 }} id="university" name="university" value={university}
            onChange={(event) => handleChange4(event)}>
            <option value="none" selected="" disabled="" hidden="">
              Select an Option
            </option>
            <option value="school1">University of Texas at Arlington</option>
            <option value="school2">University of Texas at Austin</option>
            <option value="school3">University of Texas at Dallas</option>
            <option value="school4">University of Texas at Houston</option>
          </select>
          <br />
          <label htmlFor="role">
            <b>Roles</b>
          </label>
          <select style={{ height: 40 }} id="role" name="role" value={role}
            onChange={(event) => handleChange5(event)}>
            <option value="role1" selected="">
              Student
            </option>
            <option value="role2">Business Owner</option>
            <option value="role3">School Admin</option>
            <option value="role4">Super Admin</option>
          </select>
          <br />
          <label>
            <input
              type="checkbox"
              defaultChecked="checked"
              name="remember"
              style={{ marginBottom: 15 }}
            />
            <b>Remember me</b>
          </label>
          <p>
            <strong>By creating an account you agree to our</strong>
            <a href="#">Terms &amp; Privacy</a>
          </p>
          <div className="buttons">
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
            <button type="button" className="cancelbtn">
              Cancel
            </button>
          </div>
        </form>
        {/* <h1>{result}</h1> */}
      </div>
    </div>
  </div>


    </div>
  );

}

export default SignUp;
