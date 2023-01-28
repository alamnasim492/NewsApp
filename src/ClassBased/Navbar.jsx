import { Component } from "react";
import{Link} from "react-router-dom"
import "./mystyle.css"

export default class Navbar extends Component{
  render(){
    return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light background">
      <div className="container-fluid">
      <Link className="navbar-brand text-light fs-3 fw-bold" to="/">News App</Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse"data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light fs-5" aria-current="page"to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fs-5" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fs-5" to="/technology">Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fs-5" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fs-5" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fs-5" to="/politics">Politics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fs-5" to="/education">Education</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fs-5" to="/crime">Crime</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fs-5" to="/jokes">Jokes</Link>
        </li>
      </ul>
    </div>
  </div>
 </nav>
      </>
    )
  }
}