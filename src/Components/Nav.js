import React,{useEffect} from "react";

import { Link, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Navbarcomp = () => {
  let location = useLocation();
  const navigate=useNavigate();
  const handleLogOut=()=>{
    localStorage.removeItem("token");
    navigate("/login");
  }
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">iNoteBook</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === '/'?"active" : ""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === '/about'?"active" : ""}`} to="/about">About</Link>
        </li>
      </ul>
      {!localStorage.getItem("token")?<div>
      <Link className="btn btn-primary mx-2" to='/login'  role="button">Login</Link>
      <Link className="btn btn-primary mx-2"  to='/signup' role="button">SignUp</Link>
      </div>:<button onClick={handleLogOut} className="btn btn-primary mx-2" >Logout</button>}
    </div>
  </div>
</nav>
    </div>
  );
};

export default Navbarcomp;