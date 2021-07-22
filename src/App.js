import React from "react";
// import ReactDOM from "react-dom";
import Content from "./component/Content/Index";
import NavbarPage from "./component/Navbar/Index";
import Page from "./component/Pagination/Index";
// import Search from "./component/Search/Index";
const myKey = process.env.REACT_APP_KEY;

const App = () => {
  // let url = "GET https://gnews.io/api/v4/top-headlines?token=";
  console.log(myKey);
  return (
    <>
      <h1>
        <center>Coder new</center>
      </h1>
      <NavbarPage />
      <Content />
      <Page />
      {/* <Search /> */}
    </>
  );
};

export default App;
