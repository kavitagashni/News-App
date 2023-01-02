import './App.css';
import React, { useEffect, useState } from "react";
import NewsComp from './component/NewsComp.js'
import Navbar from './component/Navbar.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [userData, setUserData] = useState([]);
  const [headings, setHeadings] = useState("Top Heading")


  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e098a790ee134064b6b04b74bbd62e43")
      .then((response) => response.json())
      .then((newsdata) => { setUserData(newsdata.articles) });
  }, []);

  function clickOnHeading(abc) {
    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${abc}&apiKey=e098a790ee134064b6b04b74bbd62e43`)
      .then((response) => response.json())
      .then((newsdata) => { setUserData(newsdata.articles) });
    setHeadings(abc)
  };


  return (
    <BrowserRouter>
      <div className="App">
        <h1>LATEST NEWS</h1>
        <Navbar clickOnHeading={clickOnHeading} />
        <h2>{headings}</h2>
        <NewsComp userData={userData} />
      </div>
    </BrowserRouter>
  );
}

export default App;