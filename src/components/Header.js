import React, { useEffect, useState } from 'react'
// import logo from '../assets/images/logo/logo-dark.png'
import logo from '../assets/images/logo/site.png'
import { Link } from 'react-router-dom'

import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
const [show, setShow] = useState(false)
  const [scroll, setScroll] = useState(false)
  const [dropMenu, setDropMenu] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
    })
  }, [])

  const handleNavigation = () => {
    setShow(!show)
  }

  const openDropMenu = () => {
    setDropMenu(!dropMenu);
  }

  return (
    <>
    <div className={scroll ? "naviagtion naviagtion-white fixed-top transition nav-bg": "naviagtion naviagtion-white fixed-top transition"}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <Link className="navbar-brand p-0" to="/">
          {/* <h3 style={{color: '#007bff'}}>Integrodata</h3> */}
            <img src={logo} alt="Integrodata" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation" onClick={handleNavigation}>
            <span className="navbar-toggler-icon" />
          </button>
          <div className={!show ? "collapse navbar-collapse text-center" : "navbar-collapse text-center"} id="navigation">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown">
                <Link to="/" className="nav-link text-dark active text-capitalize" >Home</Link>
              </li>
              <li className="nav-item">
                {/* <Link to="/about-us" className="nav-link text-dark text-capitalize">about</Link> */}
              </li>
              {/* <li className="nav-item">
                <a className="nav-link text-dark text-capitalize" href="services.html">services</a>
              </li> */}
              {/* <li className="nav-item dropdown">
                <Link className="nav-link text-dark text-capitalize dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >What we do</Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item text-color" to="/services" state={{ key: "DataEngineering" }}>Data Engineering</Link>
                  <Link className="dropdown-item text-color" to="/services" state={{ key: "CloudSolutions" }}>Cloud Offering</Link>
                  <Link className="dropdown-item text-color" to="/services" state={{ key: "WebsiteAndAppDevelopment" }}>Website & App Development</Link>
                  <Link className="dropdown-item text-color" to="/services" state={{ key: "DigitalAnalyticsAndCustomerExperience" }}>Digital Analytics & Customer Experience</Link>
                </div>
              </li> */}

<Dropdown as="li" className="nav-item">
      <Dropdown.Toggle
        as={Link}
        className="nav-link text-dark text-capitalize"
        to="#"
        role="button"
      >
        What we do
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/services" state={{ key: "DataEngineering" }}>
          Data Engineering
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/services" state={{ key: "CloudSolutions" }}>
          Cloud Offering
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/services" state={{ key: "WebsiteAndAppDevelopment" }}>
          Website & App Development
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/services" state={{ key: "DigitalAnalyticsAndCustomerExperience" }}>
          Digital Analytics & Customer Experience
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

              {/* <li className="nav-item">
                <Link className="nav-link text-dark text-capitalize" to="/blogs">blog</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link text-dark text-capitalize" to="/contact-us">contact</Link>
              </li>
            </ul>
            {/* <a className="btn btn-outline-primary text-white ml-3">sign up</a> */}
          </div>
        </nav>
      </div>
    </div>
    </>
  )
}

export default Header