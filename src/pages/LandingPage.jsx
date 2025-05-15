import Header from "../components/Header";
import headerImg from "../Images/Background-Header.jpg";
import "../css/LandingPage.css";

function LandingPage() {
  return (
    <div className="container">
      <div className="header-wrapper">
        <Header />
        <img src={headerImg} alt="Header Background" className="header-bg" />
        <div className="find-fit">
          <h3>Find Your Fit</h3>
          <p>
            Search through our collection of clothing and put your best fit
            together for the best prices
          </p>
          <button>Shop Now</button>
        </div>
      </div>
      <section>
        <div className="clothes womens">
          <h2>Womens</h2>
        </div>
        <div className="clothes mens">
          <h2>Mens</h2>
        </div>
        <div className="clothes kids">
          <h2>Kids</h2>
        </div>
      </section>
    </div>
  );
}
export default LandingPage;
