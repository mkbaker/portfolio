import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import './Navbar.css';

const Navbar = props => (
  <div className="nav">
    <div className="left-nav">
      <Link className="nav-link" to="/about">
        About
      </Link>
      <Link className="nav-link" to="/work">
        Work
      </Link>
    </div>

    <div className="navTitle">
      <h2>Kellen Baker</h2>
    </div>

    <div className="right-nav">
      <Link className="nav-link" to="/play">
        Play
      </Link>
      <Link className="nav-link" to="/contact">
        Contact
      </Link>
    </div>
  </div>
);

export default Navbar;

// const Nav = props => (
//   <div className="nav">
//     <Link to="/home">
//       <h2 className="nav-title">Silent Action</h2>
//     </Link>
//     <div className="nav-right">
//       <Link className="nav-link" to="/home">
//         {/* Show this link if they are logged in or not,
//         but call this link 'Home' if they are logged in,
//         and call this link 'Login / Register' if they are not */}
//         {props.user.id ? "Home" : "Login / Register"}
//       </Link>
//       {/* Always show this link since the about page is not protected */}
//       <Link className="nav-link" to="/about">
//         About
//       </Link>
//       {/* Show the link to the info page and the logout button if the user is logged in */}
//       {props.user.id && (
//         <>
//           <LogOutButton className="nav-link" />
//         </>
//       )}
//     </div>
//   </div>
// );