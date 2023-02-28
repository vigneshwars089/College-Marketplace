import React,{Component,useState} from 'react';
import $ from "jquery";
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from "axios";

import '../../css/newstyles.css'
import '../../css/styles.css' 
import '../../css/header.css'
import '../../css/services.css'
import '../../css/responsive.css'
import '../../css/style2.css'

function StudentAddProduct() {

  const [productName, setPname] = useState("");
  const [productDesc, setpdesc] = useState("");
  const [quantity, setquantity] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");

  const [result, setResult] = useState("");

  const [state, setState] = React.useState({
    pname: "",
    pdesc: "",
    quantity: "",
    price: "",
    result: "",
    
  })
  const handleChange1 = (e) => {
    setPname(e.target.value);
  };
  const handleChange6 = (e) => {
    setcategory(e.target.value);
  };

  const handleChange2 = (e) => {
    setpdesc(e.target.value);
  };
  const handleChange3 = (e) => {
    setprice(e.target.value);
  };
  // const handleChange4 = (e) => {
  //   setprice(e.target.value);
  // };
  const handleChange5 = (e) => {
    setResult(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const currentUser = window.sessionStorage.getItem("userEmail");
    const role = window.sessionStorage.getItem("role");

    const form = $(e.target);

    const fetchData = async () => {
      try{
        const res= await axios.post('http://localhost:8000/api/addproduct',null, {params: {
          productName:productName,productDesc:productDesc,price:price,category:category,createdBy:currentUser,role:role
      } })
      console.log(res.data); 
    }catch (error) {
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
      }
      window.location.reload();
      alert("Product added successfully");
      }
      fetchData();
    // $.ajax({
    //     type: "POST",
    //     url: form.attr("action"),
    //     data: form.serialize() +"&createdBy="+currentUser+ "&role="+role,
    //     success(data) {
    //         setResult(data);
    //         alert("Product added successfully");
    //     },
    // });
};
 
  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // this.setState({ [name]: value },
    //   () => { this.validateField(name, value) });
  }
  return (
    <div className="App">

  <header style={{overflowX:"inherit"}} className="header">
    <nav className="navbar">
      <img src="images/logo-escolar.png" width={150} height={40} alt="" />
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="./studenthome" className="nav-link">
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
  <div className="main-div">
    <div style={{fontSize:"2rem"}}>
      <br />
      <div className="sub-title">
        <b>Add Product</b>
      </div>
      <form action="http://localhost:8000/addproduct.php"
                method="post"
                onSubmit={(event) => handleSumbit(event)}>
        <div className="buy-product">
          <div className="single-option">
            <div>
              <select
                name="da-product-name"
                id="da-product-name"
                title="select a product"
                required=""
                 value={category}
            onChange={(event) => handleChange6(event)}
              >
                <option disabled="" selected="" value="">
                  -- Select a Category --
                </option> 
                <option value="clothing">clothing</option>
                <option value="electronics">electronics</option>
                <option value="books">books</option>
                <option value="others">others</option>
              </select>
            </div>
            <div>
              <input name="productName" value={productName}
            onChange={(event) => handleChange1(event)} type="textarea" placeholder="Product Name" />
            </div>
            <div>
              <input name="productDesc" value={productDesc}
            onChange={(event) => handleChange2(event)} type="textarea" placeholder="Product description" />
            </div>
            {/* <div>
              <input  value={quantity}
            onChange={(event) => handleChange3(event)} type="text" placeholder="Quantity" />
            </div> */}
            <div>
              <input name="price" value={price}
            onChange={(event) => handleChange3(event)} type="text" placeholder="Price" />
            </div>
          </div>
          <div className="button-div">
            <div>
              <a href="./studentaddproduct"><button type="buy" className="delete-btn">
                Add
              </button></a>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>


    </div>
  );
}

export default StudentAddProduct;
