import React, { useEffect, useState } from "react";
import {
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";

const NavbarPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      let url;
      if (query) {
        url = `https://gnews.io/api/v4/search?q=${query}&token=a2c0769df580c64f7b27c4c74f10d0c4`;
      } else {
        url = `https://gnews.io/api/v4/top-headlines?token=a2c0769df580c64f7b27c4c74f10d0c4`;
      }
      console.log("url", url);
      const data = await fetch(url);
      const result = await data.json();
      console.log("haha", result);
    };
    getData();
  }, [query]);

  const handleInput = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  const confirmSearch = () => {
    setQuery(searchInput);
  };
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">CoderNews</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <InputGroup className="mb-3 ">
            <FormControl
              // placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={searchInput}
              onChange={handleInput}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={confirmSearch}
            >
              Search
            </Button>
          </InputGroup>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPage;
