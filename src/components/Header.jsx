import userIcon from "../Images/user-3-line.svg";
import heartIcon from "../Images/heart-3-line.svg";
import cartIcon from "../Images/shopping-cart-line.svg";
import searchIcon from "../Images/search-line.svg";
import "../css/header.css";

function Header() {
  return (
    <div className="container">
      <header>
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

        <h2>SomeShopping</h2>
        <div className="right-header">
          <div className="Search-bar">
            <input type="text" placeholder="Search..." />
            <img src={searchIcon} alt="search icon" />
          </div>
          <div className="icons-header"></div>
          <img src={userIcon} alt="User icon" />
          <img src={heartIcon} alt="heart icon" />
          <img src={cartIcon} alt="Shopping cart icon" />
        </div>
      </header>
    </div>
  );
}
export default Header;
