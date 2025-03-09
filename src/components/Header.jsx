import userIcon from "../Images/user-3-line.svg";
import heartIcon from "../Images/heart-3-line.svg";
import cartIcon from "../Images/shopping-cart-line.svg";
import searchIcon from "../Images/search-line.svg";
import "../css/header.css";

function Header() {
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

        <div className="right-header">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <i className="ri-search-line"></i>
          </div>

          <i id="icon-header" className="ri-user-3-line"></i>
          <i id="icon-header" className="ri-heart-3-line"></i>
          <i id="icon-header" className="ri-shopping-cart-line"></i>
        </div>
      </header>
    </div>
  );
}
export default Header;
