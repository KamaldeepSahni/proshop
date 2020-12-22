import React from 'react';
import { Row, Col, Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="align-items-center justify-content-center"
        collapseOnSelect
      >
        <Row>
          <Col className="text-center text-white py-3">
            Copyright &copy; ProShop 2020. All rights reserved.
          </Col>
        </Row>
      </Navbar>
    </footer>
  );
};

export default Footer;
