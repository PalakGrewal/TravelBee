import React from 'react';
import './Navbar.css';
import './ResponsiveNav.css'
const Navbar = () => {
  return (
    <header className='head'>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">

                  <a className="navbar-brand d-flex align-items-center  justify-content-center" href="/">
                      <img src="Logo3.png" className='logo img-fluid' alt="" />
                      {/* <img src="Images/logo.png" alt="" className="img-fluid" style="width: 40px; height: 40px;"/> */}
                      {/* <h2 className="mb-0" style={{color: "rgb(10,57,152)"}}>&nbsp;Travel<span style={{ color: "rgb(212, 175, 55)" }}>Bee</span></h2> */}
                  </a>

                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      {/* <!-- <span className="navbar-toggler-icon"></span> --> */}
                      <i className="fa-solid fa-bars toggle-icon" ></i>
                  </button>

                  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                      <ul className="navbar-nav menu-nav align-items-center">
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="/home">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/about">Locations</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/rooms">Packages</a>
                          </li>
                          <li className="nav-item ">
                              <a className="btn" href="/">Contact Us</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
    </header>
  )
}

export default Navbar
