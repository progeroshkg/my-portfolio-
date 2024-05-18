import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    try {
      await axios.post('/send-message', { name, email, message });
      console.log('Message sent successfully to Telegram!');
      this.setState({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
    }
  }

  handleCall = () => {
    window.open('tel:+996505001093');
  }

  handleWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=996505001093');
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="contact-container">
        <h1>Contact Us</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={email} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea name="message" value={message} onChange={this.handleChange} />
          </div>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-options">
          <button className="call-btn" onClick={this.handleCall}>Call</button>
          <button className="whatsapp-btn" onClick={this.handleWhatsApp}>WhatsApp</button>
        </div>
      </div>
    );
  }
}
