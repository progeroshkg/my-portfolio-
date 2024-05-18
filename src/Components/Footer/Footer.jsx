import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'; // Подключаем CSS для стилизации

export default class Footer extends Component {
  render() {
    const currentYear = new Date().getFullYear(); // Получаем текущий год

    return (
      <footer className="custom-footer">
        <Container>
          <div className="text-center"></div>
          <div className="text-center">© {currentYear} Your Portfolio</div>
        </Container>
      </footer>
    );
  }
}
