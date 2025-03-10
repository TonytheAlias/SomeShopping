import Header from "../components/Header";
import "../css/LandingPage.css";

function LandingPage() {
  return (
    <div className="containter">
      <header>
        <Header />
        <div className="find-fit">
          <h3>Find Your Fit</h3>
          <p>
            Search through our collection of clothing and put your best fit
            together for the best prices
          </p>
          <button>Shop Now</button>
        </div>
      </header>
    </div>
  );
}
export default LandingPage;
