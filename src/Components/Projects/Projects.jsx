import React, { Component } from 'react';
import project1Image from './../../img/55.png'; // Импортируем изображение проекта 1
import project2Image from './../../img/elit.png'; // Импортируем изображение проекта 2
import project3Image from './../../img/prott1.png'; // Импортируем изображение проекта 3
import project4Image from './../../img/rr.png'; // Импортируем изображение проекта 3
import './Projects.css'; // Подключаем CSS для стилизации

export default class Projects extends Component {
  render() {
    // Переменные для изображений проектов
    const project1Img = project1Image;
    const project2Img = project2Image;
    const project3Img = project3Image; // Переименовываем переменную
    const project4Img = project4Image; // Переименовываем переменную

    return (
      <div className="projects-container">
        <h1 className="projects-header">Мои проекты</h1>
        <div className="project-card">
          <img src={project1Img} alt="Project 1" className="project-image" />
          <div className="project-details">
            <h2>Ведущая и многопрофильная больница</h2>
           
            <a href="https://bosti.kg/">Ссылка на проект</a>
          </div>
        </div>
        <div className="project-card">
          <img src={project2Img} alt="Project 2" className="project-image" />
          <div className="project-details">
            <h2>Строй компания elitehouse</h2>
            <p>Описание проекта 2</p>
            <a href="https://elitehouse.kg/">Ссылка на проект</a>
          </div>
        </div>
        <div className="project-card">
          <img src={project3Img} alt="Project 3" className="project-image" />
          <div className="project-details">
            <h2>Соцальная сеть</h2>
            <p>Описание проекта 3</p>
            <a href="#">Не доступна</a>
          </div>
        </div>
        <div className="project-card">
          <img src={ project4Img} alt="Project 3" className="project-image" />
          <div className="project-details">
            <h2>Dosmed Скорая помошь</h2>
           
            <a href="https://dosmed.kg/">Ссылка на проект</a>
          </div>
        </div>
      </div>
    );
  }
}
