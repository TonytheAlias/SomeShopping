import "../css/header.css";
import { useState } from "react";
import Search from "../Images/search-white.svg";
import HamburgerIcon from "../Images/hambugerPixel.svg";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <a>
              <li>Latest</li>
            </a>
            <a>
              <li>Collection</li>
            </a>
            <a>
              <li>About</li>
            </a>
          </ul>
        </nav>

        <h2 className="title">SomeShopping</h2>

        <div id="right-header">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="search-input desktop-search"
            />
          </div>
          <img
            src={Search}
            alt="Search"
            className="search-toggle"
            onClick={() => setSearchOpen(!searchOpen)}
          />
          <div className={searchOpen ? "mobile-search open" : "mobile-search"}>
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>

          <div className={menuOpen ? "nav-menu open" : "nav-menu"}>
            <div className="menu-item">
              <i className="ri-user-3-line icon"></i>
              <span className="icon-label">
                <strong>Profile</strong>
              </span>
            </div>
            <div className="menu-item">
              <i className="ri-heart-3-line icon"></i>
              <span className="icon-label">
                <strong>Favorites</strong>
              </span>
            </div>
            <div className="menu-item">
              <i className="ri-shopping-cart-line icon"></i>
              <span className="icon-label">
                <strong>Cart</strong>
              </span>
            </div>
          </div>
        </div>

        <img
          src={HamburgerIcon}
          alt="Menu"
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </header>
    </div>
  );
}
export default Header;
