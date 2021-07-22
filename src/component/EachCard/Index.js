import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Style.css";
const EachCard = ({ news }) => {
  return (
    <>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>{news.title}</Card.Title>
          <Card.Text>{news.description}</Card.Text>
          <Button variant="primary">Read</Button>
        </Card.Body>
        <Card.Footer className="text-muted">{news.publishedAt}</Card.Footer>
      </Card>
    </>
  );
};

export default EachCard;
