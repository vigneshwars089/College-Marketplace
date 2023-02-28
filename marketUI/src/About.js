
import './App.css';


import './css/header.css'
import './css/services.css'
import './css/responsive.css'


function About() {
  return (
    <div className="App">
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
  <section style={{marginTop:"40px"}} className="about_section layout_padding2-top layout_padding-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div  className="detail-box">
            <h2 style={{fontSize:"2rem"}} >About</h2>
            <p style={{fontSize:"1.5rem"}}>
              The purpose of UTA maverick alley is to serve the UTA and UTA
              communication as a cooperative by providing quality merchandise
              and services. Our operations ought to be profitable, to share some
              of these profits with our members within the type of a specific
              member discount, and to support a capital budget which can
              guarantee our viability.
            </p>
            <h2 style={{fontSize:"2rem"}} >Why choose us?</h2>
            <p style={{fontSize:"1.5rem"}}>
              We offer enormous services packed in one conveninet place.We are
              obsessed with our goal of bringing UTA community
              together.Protecting your privacy is of the top priority to us.
              Your data is 100% safe after you search with us.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img-box">
            <img style={{width:"500px"}} src="images/student2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
}

export default About;
