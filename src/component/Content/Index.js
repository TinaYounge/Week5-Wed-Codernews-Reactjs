import React from "react";
// import { Button, Card } from "react-bootstrap";
import "./Style.css";
import EachCard from "../EachCard/Index";

const Content = ({ news }) => {
  return (
    <>
      <div>
        {news && news.map((el, idx) => <EachCard key={idx} news={el} />)}
      </div>
    </>
  );
};

export default Content;
