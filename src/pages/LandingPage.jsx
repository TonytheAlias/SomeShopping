import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import headerImg from "../Images/Background-Header.jpg";
import "../css/LandingPage.css";
import { getFashionArticle } from "../services/api";

function LandingPage() {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const fetchedArticle = await getFashionArticle();
      setArticle(fetchedArticle);
    };

    fetchArticle();
  }, []);

  return (
    <div className="container">
      {/* Header Section */}
      <div className="header-wrapper">
        <Header />
        <img src={headerImg} alt="Header Background" className="header-bg" />
        <div className="find-fit">
          <h3>Choose Your Fit</h3>
          <hr />
          <p>
            Search through our collection of clothing and put your best fit
            together for the best prices
          </p>
          <button>Shop Now</button>
        </div>
      </div>
      {/*Women, Mens, and Kids Category*/}
      <section>
        <div className="section-title">
          <h2>New Collections</h2>
          <p>
            Search through our collection to <strong>Find Your Fit </strong>for
            youself or the whole family
          </p>
        </div>
        <div className="categories">
          <div className="clothes womens">
            <h2>Womens</h2>
          </div>
          <div className="clothes mens">
            <h2>Mens</h2>
          </div>
          <div className="clothes kids">
            <h2>Kids</h2>
          </div>
        </div>
        <div className="box-section">
          <div className="box box1">
            <h6>#SomeShoppingRewards</h6>
            <h2>The Benefits are Unfair</h2>
            <p>Join US today and get 50% off selected products</p>
            <button>Become a Member</button>
          </div>
          <div className="box box2">
            <h5>Stay Up to Date on the Latest Fashion News</h5>
            {article ? (
              <>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <h3>{article.title}</h3>
                </a>
                <p>{article.description}</p>
                <small>{new Date(article.publishedAt).toLocaleString()}</small>
              </>
            ) : (
              <p>Loading article...</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
export default LandingPage;
