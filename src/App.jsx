import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'; // Изменил NavLink для активных ссылок
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About'; // Предполагаемый компонент для страницы "Обо мне"
import Projects from './Components/Projects/Projects'; // Предполагаемый компонент для страницы "Проекты"
import Contact from './Components/Contact/Contact'; // Предполагаемый компонент для страницы "Контакты"


export default class App extends Component {
    render() {
      return (
        <Router>
          <div>
            <Header/>
            <Switch>
              <Route path="/about" component={Portfolio} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route path="/" exact component={Projects} /> {/* Добавлен exact */}
            </Switch>
            <Footer/>
          </div>
        </Router>
      );
    }
}
