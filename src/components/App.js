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
      contactIsHidden: true,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleContactForm = this.toggleContactForm.bind(this);
  }

  toggleMenu() {
    this.setState({ menuIsHidden: !this.state.menuIsHidden });
  }

  toggleContactForm() {
    this.setState({ contactIsHidden: !this.state.contactIsHidden });
  }

  render() {
    const { menuIsHidden, contactIsHidden } = this.state;

    return (
      <section className="App">
        <Header 
          handleToggleMenu={this.toggleMenu} 
          handleToggleForm={this.toggleContactForm} 
          menuIsHidden={menuIsHidden} 
          contactIsHidden={contactIsHidden} 
        />
        <Route exact path="/" component={About} />
      </section>
    );
  }
}

export default App;
