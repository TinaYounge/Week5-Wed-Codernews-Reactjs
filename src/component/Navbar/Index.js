import React, { useEffect, useState } from "react";
import {
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";

const NavbarPage = ({ setQuery1 }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInput = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  const confirmSearch = () => {
    setQuery1(searchInput);
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
