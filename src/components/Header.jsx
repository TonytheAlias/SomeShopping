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
            <img src={searchIcon} alt="search icon" />
          </div>

          <img className="icons-header" src={userIcon} alt="User icon" />
          <img className="icons-header" src={heartIcon} alt="heart icon" />
          <img
            className="icons-header"
            src={cartIcon}
            alt="Shopping cart icon"
          />
        </div>
      </header>
    </div>
  );
}
export default Header;
