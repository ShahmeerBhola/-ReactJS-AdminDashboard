import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside>
      <div className="top">
        <div className="logo">
          <img src={logo} />
          <h2>
            Fast <span className="danger">Track</span>
          </h2>
        </div>
        <div className="close" id="close-btn">
          <span className="material-icons-sharp">close</span>
        </div>
      </div>
      <div className="sidebar">
        <Link to="/" className="active">
          <span className="material-icons-sharp">grid_view</span>
          <h3>Overview</h3>
        </Link>
        <Link to="/wait">
          <span className="material-icons-sharp">group</span>
          <h3>Wait Line</h3>
        </Link>
        <Link to="/revenue">
          <span className="material-icons-sharp">paid</span>
          <h3>Revenue</h3>
        </Link>
        <Link to="/surge">
          <span className="material-icons-sharp">trending_up</span>
          <h3>Surge</h3>
        </Link>
        <Link to="/inventory">
          <span className="material-icons-sharp">inventory</span>
          <h3>Inventory</h3>
        </Link>

        <Link to="/logout">
          <span className="material-icons-sharp">logout</span>
          <h3>Logout</h3>
        </Link>
      </div>
    </aside>
  );
};

export default Aside;
