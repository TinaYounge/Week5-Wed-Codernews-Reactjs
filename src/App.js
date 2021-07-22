import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import Content from "./component/Content/Index";
import NavbarPage from "./component/Navbar/Index";
import Page from "./component/Pagination/Index";
import EachCard from "./component/EachCard/Index";

// import Search from "./component/Search/Index";
const myKey = process.env.REACT_APP_KEY;

const App = () => {
  const [query, setQuery] = useState("");
  const [news, setNews] = useState("news");

  useEffect(() => {
    const getData = async () => {
      let url;
      if (query) {
        url = `https://gnews.io/api/v4/search?q=${query}&token=` + myKey;
      } else {
        url = `https://gnews.io/api/v4/top-headlines?token=` + myKey;
      }
      const data = await fetch(url);
      const result = await data.json();
      const { articles } = result;
      console.log("articles", articles);
      setNews(articles);
      console.log("news[0]", news[0]);
    };
    getData();
  }, [query]);

  return (
    <>
      <h1>
        <center>Coder new</center>
      </h1>
      <NavbarPage setQuery={setQuery} />
      <Content />
      {/* <EachCard news={news[0]} /> */}
      <Page />
    </>
  );
};

export default App;
