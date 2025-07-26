import axios from 'axios';

const API_KEY = '606f409c02e646c3bab76dadb1e34be5';
const URL = `https://newsapi.org/v2/everything?q=clothing%20OR%20apparel%20OR%20outfits%20OR%20runway%20OR%20wardrobe&language=en&sortBy=publishedAt&pageSize=10&apiKey=${API_KEY}`;


export const getFashionArticle = async () => {
  const cachedArticle = JSON.parse(localStorage.getItem('fashionArticle'));
  const cachedTime = localStorage.getItem('fashionArticleTime');

  const isExpired = (timestamp) => {
    const now = new Date().getTime();
    return now - timestamp > 24 * 60 * 60 * 1000; // 24 hours
  };

  if (cachedArticle && cachedTime && !isExpired(Number(cachedTime))) {
    return cachedArticle;
  } else {
    try {
      const response = await axios.get(URL);
      const articles = response.data.articles;
      const randomArticle = articles[Math.floor(Math.random() * articles.length)];

      localStorage.setItem('fashionArticle', JSON.stringify(randomArticle));
      localStorage.setItem('fashionArticleTime', new Date().getTime().toString());

      return randomArticle;
    } catch (error) {
      console.error('Error fetching fashion article:', error);
      return null;
    }
  }
};