import React from "react";
import { FiSearch } from "react-icons/fi";
import { GiAries } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";

function Header() {
  return (
    <div className="header">
      <div className="main">
        <div className="body">
          <div className="logo">
            <img src="./static/logo2.png" className="logo-img" />
          </div>
          
          <div className="right">
            <div className="search">
                <input type="text" placeholder="Search Manga" />
                <button className="searchbutton">SEARCH</button>
                {/* <FiSearch /> */}
            </div>
            <div className="account">
              <GiAries className="icon" />
              <CgMenuGridO className="icon" />
              <div className="account">
                <img src="https://avatarfiles.alphacoders.com/209/209229.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
