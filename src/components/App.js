import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Header from './Header';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuIsHidden: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menuIsHidden: !this.state.menuIsHidden });
  }

  render() {
    const { menuIsHidden } = this.state;

    return (
      <section className="App">
        <Header handleOnClick={this.toggleMenu} menuIsHidden={menuIsHidden} />
        <Route exact path="/" component={About} />
      </section>
    );
  }
}

export default App;
