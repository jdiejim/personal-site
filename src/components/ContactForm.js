import React, { Component } from 'react';
import cancel from '../assets/cancel.svg';
import './styles/ContactForm.css';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
    };
  }

  render() {
    const { handleToggleForm } = this.props;
    const style = { backgroundImage: `url(${cancel})` };

    return (
      <aside className="ContactForm">
        <section className="ContactForm-banner">
          <h2 className="ContactForm-title">Contact Information</h2>
          <button className="ContactForm-cancel" onClick={handleToggleForm} style={style} />
        </section>
        <form className="ContactForm-form" action="https://formspree.io/jdiejim@gmail.com" method="POST">
          <input className="ContactForm-input" type="text" name="name" placeholder="Enter name" />
          <input required className="ContactForm-input" type="email" name="_replyto" placeholder="Enter email" />
          <textarea className="ContactForm-textarea" name="message" placeholder="Enter message" />
          <input type="hidden" name="_next" value="/#thanks" />
          <button className="ContactForm-submit" type="submit">Submit</button>
        </form>
      </aside>
    );
  }
}

export default ContactForm;
