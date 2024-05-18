import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Импортируем Link из React Router DOM
import './Header.css'; // Подключаем CSS для стилизации

export default class Header extends Component {
  render() {
    return (
      <Navbar className="custom-navbar" expand="lg">
        <Navbar.Brand  to="/">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/projects">Проекты</Nav.Link>
            <Nav.Link as={Link} to="/about">Обо мне</Nav.Link>
            <Nav.Link as={Link} to="/contact">Контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
