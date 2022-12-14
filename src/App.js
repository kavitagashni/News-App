import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import NewsComp from './component/NewsComp.js'
import Navbar from './component/Navbar.js';


function App() {
  const [userData, setUserData] = useState([]);
  const [headings, setHeadings] = useState("Top Heading")


  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=apple&from=2022-12-13&to=2022-12-13&sortBy=popularity&apiKey=e098a790ee134064b6b04b74bbd62e43")
      .then((response) => response.json())
      .then((newsdata) => { setUserData(newsdata.articles) });
  }, []);

  function clickOnHeading(id) {
    fetch(`https://newsapi.org/v2/everything?country=in&category=${id}  q=apple&from=2022-12-13&to=2022-12-13&sortBy=popularity&apiKey=e098a790ee134064b6b04b74bbd62e43`)
      .then((response) => response.json())
      .then((newsdata) => {setUserData(newsdata.articles) });
    setHeadings(id)
  };

  return (
    <div className="App">
      <h1>LATEST NEWS</h1>
      <Navbar clickOnHeading={clickOnHeading} />
      <h2 >{headings}</h2>
      <NewsComp userData={userData} />
    </div>
  );
}

export default App;