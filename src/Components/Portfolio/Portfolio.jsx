import React, { Component } from 'react';
import './Portfolio.css'; // Подключаем CSS для стилизации

export default class AboutMe extends Component {
  render() {
    return (
      <div className="about-me">
        <h2>Обо мне</h2>
        <p>Привет! Меня зовут Вася, мне 23 года. Я увлекаюсь разработкой около 16 лет, начиная с момента, когда пошёл в школу. 
        Создание классных проектов для меня не только хобби, но и способ развиваться и применять свои знания. 
        В свободное время я также увлекаюсь баскетболом и волейболом.</p>
        <p>У меня опыт middle, что позволяет мне успешно реализовывать проекты и работать в команде.</p>
      </div>
    );
  }
}
