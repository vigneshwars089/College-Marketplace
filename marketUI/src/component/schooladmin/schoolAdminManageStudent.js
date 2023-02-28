import React ,{component, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import $ from "jquery";
import { useState } from 'react';
import axios from "axios";
import '../../css/newstyles.css'
import '../../css/styles.css' 
import '../../css/header.css'
import '../../css/services.css'
import '../../css/responsive.css'
import '../../css/style2.css'
 
function SchoolAdminManageStudent() {

  const [content, setContent] = useState([]);
  const [psw, setPsw] = useState("");
  useEffect(()=>{
  
    const fetchData = async () => {
      try{
        const res= await axios.get('http://localhost:8000/api/getusers')
      console.log(res.data);
      const filtered = res.data.users;
       const flist=filtered.filter( (car) => car.role === "role1");
      // filtered = filtered.filter(employee => {
      //   return employee.role === 'role1';
      // });
      console.log(flist);
      setContent(flist); 
    }catch (error) {
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
      
      }

      }
      fetchData();
      
//console.log(array);
},


[])
function removeprod(e){
  console.log( e.target.name);
  const paramet=e.target.name;
  const currentUser = window.sessionStorage.getItem("userEmail");
  const currentRole = window.sessionStorage.getItem("role");

  const fetchData = async () => {
    try{
      const res= await axios.post('http://localhost:8000/api/removeuser',null, {params: {
        id:e.target.name
    } })
    console.log(res.data); 
  }catch (error) {
      console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
    }
    window.location.reload();
    alert("user deleted successfully");
    }
    fetchData();

}


  return (
    <div className="App">

<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css/header.css" />
  <link rel="stylesheet" href="css/manage-student-schoolAdmin.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <title>Manage Students - School Admin</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    .content {\n  padding: 2rem;\n}\n.filters {\n  display: flex;\n  column-gap: 5rem;\n  row-gap: 2rem;\n}\ninput[type="date"] {\n  width: 200px;\n}\nselect {\n  width: 200px;\n  height: 40px;\n  cursor: pointer;\n  border-radius: 5px;\n  border: 1px solid #a9a9a9;\n  font-size: 15px;\n}\n.table-div {\n  overflow-x: auto;\n}\n.btn {\n  padding: 0.5rem 1.5rem;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n}\n.view-button {\n  background-color:  #0096ff;\n}\n.update-button {\n  background-color: #47525e;\n}\n@media (max-width: 768px) {\n  .content {\n    padding-left: 10px;\n  }\n  .btn {\n    margin-bottom: 10px;\n  }\n  .filters {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n  '
    }}
  />
  <header className="header">
    <nav className="navbar">
      <img src="images/logo-escolar.png" width={150} height={40} alt="" />
      <ul className="nav-menu">
        <li className="nav-item">
        <a href="/schooladminhome" className="nav-link">
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
              School Admin
              <i className="fa fa-caret-down" />
            </div>
            <div className="dropdown-content">
              <a href="/schooladminhome" className="nav-link">
                School Admin
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
  <div style={{overflow:"inherit",
    overflowY: "scroll",
    position: "relative",height: "706px",fontSize:"20px"}}  className="main-div">
    <br />
    <div className="main-title">Manage Students</div>
    <div className="content">
      {/* <div className="filters">
        <div>
          <label htmlFor="visitDate">Registered Date:</label>
          <input type="date" id="visitDate" name="visitDate" required="" />
        </div>
      </div> */}
      <div className="table-div">
      <table className="styled-table" id="visitor-table">
          <thead>
            <tr >
              <td>First Name</td>
              <td>Last Name</td>
              <td>University</td>
              <td>Email</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
          {content.map(c => ( <tr key={c.id}>
              <td>{c.firstName}</td>
              <td>{c.lastName}</td>
              <td>{c.university}</td>
              <td>{c.emailId}</td>
          
              <td>
  
              <input style={{width:"100%",height:"45px"}}
                      type="button"
                      defaultValue="Delete"
                      className="delete-btn" name={c.id}
                      onClick={removeprod}
                    />
              </td>
            </tr>
            ))}
            {/* <tr>
              <td>student2</td>
              <td>Last2</td>
              <td>1234567890</td>
              <td>student2@test.com</td>
              <td>club1,club2</td>
              <td>Posts1,post2</td>
              <td>
                <button type="button" className="btn view-button">
                  View
                </button>
                <button type="button" className="btn update-button">
                  Update
                </button>
              </td>
            </tr>
            <tr>
              <td>Student3</td>
              <td>Last3</td>
              <td>1234567890</td>
              <td>student3@test.com</td>
              <td>club1,club2</td>
              <td>Posts1,post2</td>
              <td>
                <button type="button" className="btn view-button">
                  View
                </button>
                <button type="button" className="btn update-button">
                  Update
                </button>
              </td>
            </tr>
            <tr>
              <td>Student4</td>
              <td>Last4</td>
              <td>1234567890</td>
              <td>student4@test.com</td>
              <td>club1,club2</td>
              <td>Posts1,post2</td>
              <td>
                <button type="button" className="btn view-button">
                  View
                </button>
                <button type="button" className="btn update-button">
                  Update
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>

       
        {/* <ul>
        {content.map(c => (
          <li key={c.firstName}> <h1>{c.lastName}</h1>  <button type="button" disabled="">
          Request to add
        </button>
        <p>
          {" "}
          {c.emailId}
        </p></li>
        ))}

{content.map(job => (
                  <tr key={job.firstName}>
                     <td>id: {job.lastName}</td>
                     <td>company: {job.emailId}</td>
                     <td>company: {job.university}</td>
                   </tr>
             ))}
      </ul> */}
      </div>
    </div>
  </div>
</>

    </div>
  );
}

export default SchoolAdminManageStudent;
