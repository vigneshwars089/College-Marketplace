import React,{Component,useState} from 'react';
import axios from "axios";

import '../../App.css';
import $ from "jquery";
import { Link } from 'react-router-dom';
import '../../css/newstyles.css'
import '../../css/styles.css' 
import '../../css/header.css'
import '../../css/services.css'
import '../../css/responsive.css'
 

function StudentCheckout() {


  const [fullName, setfullName] = useState("");
  const [address, setaddress] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [email, setemail] = useState("");
  const [zip, setzip] = useState("");
  const [result, setResult] = useState("");

  const [nameOnCard, setnameOnCard] = useState("");
  const [creditCardNumber, setcreditCardNumber] = useState("");
  const [expMonth, setexpMonth] = useState("");
  const [expYear, setexpYear] = useState("");
 
  const [cvv, setcvv] = useState("");
 
    const handleSumbit = (e) => {
        e.preventDefault();
        const currentUser = window.sessionStorage.getItem("userEmail");
        const role = window.sessionStorage.getItem("role");
        const pname=window.sessionStorage.getItem("pname")
        console.log(pname);
        const form = $(e.target);
        const fetchData = async () => {
          try{
            const res= await axios.post('http://localhost:8000/api/orderpayment',null, {params: {
              createdBy:currentUser, isPlaced:1,productName:pname,
              fullName:fullName,
              emailId:email,
              address:address,
              city:city,
              state:state,
              zip:zip,
              nameOnCard:nameOnCard,
              creditCard:creditCardNumber,
              expMonth:expMonth,
              expYear:expYear,
              cvv:cvv
          } })
          console.log(res.data); 
        }catch (error) {
            console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
          }
          window.location.reload();
       alert("Order placed successfully");
   
          }
          fetchData();
  // try {
  //   let result = await axios.post(          // any call like get
  //     "http://localhost:8000/api/orderpayment",         // your URL
  //     {                                     // data if post, put
  //       some: "data",
  //     }
  //   );
  //   console.log(result.response.data);
  // } catch (error) {
  //   console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
  // }
        // }
        // fetchData();
  };
// };
  return (
    <div className="App">
 <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  <title>Checkout</title>
  <link rel="icon" href="images/logo.png" type="image/png" sizes="16x16" />
  <link rel="stylesheet" href="css/main.min.css" />
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/style2.css" />
  <link rel="stylesheet" href="css/header.css" />
  <link rel="stylesheet" href="css/responsive.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n .header {\n      position: relative;\n      min-height: 10vh;\n      overflow-x: inherit;\n    }\n \n.dropdown-content a:hover {\n    background-color: #fff;\n    color: #000;\n}\n.dropdown-content a {\n    background-color: #007bff;\n    \n}\n  .scroll {\n      overflow-y: scroll;\n      height: 306px;\n      width: 700px;\n      margin: 10px 5px; padding: 5px;\n      text-align: justify;\n  }\n  .scroll::-webkit-scrollbar {\n      width:5px;\n  }\n  .scroll::-webkit-scrollbar-track {\n      -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3); \n      border-radius:5px;\n  }\n  .scroll::-webkit-scrollbar-thumb {\n      border-radius:5px;\n      -webkit-box-shadow: inset 0 0 6px #007bff; \n  }\n  .responsive {\n\twidth: 100%;\n  max-width: 400px;\n  height: auto;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n \n  }\n  \n* {\n  box-sizing: border-box;\n}\n\n.row {\n  display: -ms-flexbox; /* IE10 */\n  display: flex;\n  -ms-flex-wrap: wrap; /* IE10 */\n  flex-wrap: wrap;\n  margin: 0 -16px;\n}\n\n.col-25 {\n  -ms-flex: 25%; /* IE10 */\n  flex: 25%;\n}\n\n.col-50 {\n  -ms-flex: 50%; /* IE10 */\n  flex: 50%;\n}\n\n.col-75 {\n  -ms-flex: 75%; /* IE10 */\n  flex: 75%;\n}\n\n.col-25,\n.col-50,\n.col-75 {\n  padding: 0 16px;\n}\n\n.container {\n  background-color: #f2f2f2;\n  padding: 5px 20px 15px 20px;\n \n  border-radius: 3px;\n  width: 61%;\n}\n\ninput[type=text] {\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n}\n\nlabel {\n  margin-bottom: 10px;\n  display: block;\n}\n\n.icon-container {\n  margin-bottom: 20px;\n  padding: 7px 0;\n  font-size: 24px;\n}\n\n.btn {\n  background-color: #007bff;\n  color: white;\n  padding: 12px;\n  margin: 10px 0;\n  border: none;\n  width: 25%;\n  border-radius: 3px;\n  cursor: pointer;\n  font-size: 17px;\n  float: right;\n}\n\n.btn:hover {\n  background-color: #007bff;\n}\n\na {\n  color: #ffff;\n}\n\nhr {\n  border: 1px solid lightgrey;\n}\n\nspan.price {\n  float: right;\n  color: grey;\n}\n\n/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the "cart" column go on top) */\n@media (max-width: 800px) {\n  .row {\n    flex-direction: column-reverse;\n  }\n  .col-25 {\n    margin-bottom: 20px;\n  }\n}\n.container {\n \n  background-color: #0000;\n  border-radius: 5px;\n  padding: 10px;\n  /* margin: 10px 0; */\n}\n\n.darker {\n  border-color: #ccc;\n  background-color: #ddd;\n}\n\n.container::after {\n  content: "";\n  clear: both;\n  display: table;\n}\n\n.container img {\n  float: left;\n  max-width: 60px;\n  width: 100%;\n  margin-right: 20px;\n  border-radius: 50%;\n}\n\n.container img.right {\n  float: right;\n  margin-left: 20px;\n  margin-right:0;\n}\n\n.time-right {\n  float: right;\n  color: #aaa;\n}\n\n.time-left {\n  float: left;\n  color: #999;\n}\n  '
    }}
  />
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
    <div className="row">
      <div className="col-75">
        <div className="container">
          <form action="http://localhost:8000/payment.php"
                method="post"
                onSubmit={(event) => handleSumbit(event)} >
            <div className="row">
              <div className="col-50">
                <h3>Address</h3>
                <label style={{fontSize:"14px"}} htmlFor="fullName"> Full Name</label>
                <input name="fullName" value={fullName}
            onChange={e=> setfullName(e.target.value)} type="text" id="fullName"  />
                <label style={{fontSize:"14px"}} htmlFor="email"> Email</label>
                <input name="email" value={email}
            onChange={e=> setemail(e.target.value)}  type="text" id="email" />
                <label style={{fontSize:"14px"}} htmlFor="address"> Address</label>
                <input name="address" value={address}
            onChange={e=> setaddress(e.target.value)}  type="text" id="address"  />
                <label style={{fontSize:"14px"}} htmlFor="city"> City</label>
                <input name="city" value={city}
            onChange={e=> setcity(e.target.value)}  type="text" id="city"  />
                <div className="row">
                  <div className="col-50">
                    <label style={{fontSize:"14px"}} htmlFor="state">State</label>
                    <input name="state" value={state}
            onChange={e=> setstate(e.target.value)}  type="text" id="state" />
                  </div>
                  <div className="col-50">
                    <label htmlFor="zip">Zip</label>
                    <input name="zip" value={zip}
            onChange={e=> setzip(e.target.value)}  type="text" id="zip"  />
                  </div>
                </div>
              </div>
              <div className="col-50">
                <h3>Payment</h3>
                <div className="icon-container">
                  <i className="fa fa-cc-visa" style={{ color: "blue" }} />
                  <i
                    className="fa fa-cc-mastercard"
                    style={{ color: "orange" }}
                  />
                  <i className="fa fa-cc-paypal" style={{ color: "blue" }} />
                  <i
                    className="fa fa-cc-discover"
                    style={{ color: "rgb(203, 69, 69)" }}
                  />
                </div>
                <label style={{fontSize:"14px"}} htmlFor="cname">Name on Card</label>
                <input  value={nameOnCard}
            onChange={e=> setnameOnCard(e.target.value)} type="text" id="nameOnCard" name="nameOnCard" />
                <label style={{fontSize:"14px"}} htmlFor="ccnum">Credit card number</label>
                <input  value={creditCardNumber}
            onChange={e=> setcreditCardNumber(e.target.value)} type="text" id="creditCardNumber" name="creditCardNumber" />
                <label style={{fontSize:"14px"}} htmlFor="expmonth">Exp Month</label>
                <input  value={expMonth}
            onChange={e=> setexpMonth(e.target.value)} type="text" id="expMonth" name="expmonth" />
                <div className="row">
                  <div className="col-50">
                    <label style={{fontSize:"14px"}} htmlFor="expyear">Exp Year</label>
                    <input  value={expYear}
            onChange={e=> setexpYear(e.target.value)} type="text" id="expyear" name="expyear" />
                  </div>
                  <div className="col-50">
                    <label style={{fontSize:"14px"}} htmlFor="cvv">CVV</label>
                    <input  value={cvv}
            onChange={e=> setcvv(e.target.value)} type="text" id="cvv" name="cvv" />
                  </div>
                </div>
              </div>
            </div>
            <label>
              <input type="checkbox" defaultChecked="checked" name="sameadr" />{" "}
              Billing address same as Shipping address
            </label>
            <input type="submit" defaultValue="Place order" className="btn" />
          </form>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
}

export default StudentCheckout;
