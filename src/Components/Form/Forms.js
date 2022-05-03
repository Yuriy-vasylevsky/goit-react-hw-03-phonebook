import './Form.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';

export default class Forms extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // if (
    //   this.props.contact.find(({ name }) => {
    //     return name === e.target.name.value;
    //   })
    // ) {
    //   return alert('not-ok');
    // }

    const obj = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.addNumber(obj);

    this.restForm();
  };

  restForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { name, number } = this.state;
    return (
      <div>
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Имя"
              onChange={handleChange}
              value={name}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Номер</Form.Label>
            <Form.Control
              name="number"
              type="tel"
              placeholder="Номер телефона"
              onChange={handleChange}
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Записать
          </Button>
        </Form>
      </div>
    );
  }
}
