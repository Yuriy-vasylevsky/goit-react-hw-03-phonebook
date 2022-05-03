import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Section from './Components/Section/Section ';
import Forms from './Components/Form/Forms';
import PhoneList from './Components/PhoneList/PhoneList';
import FilterInput from './Components/FilterInput/FilterInput';
import Modal from './Components/Modal/modal';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    modal: false,
  };

  componentDidMount() {
    let sevContact = localStorage.getItem('contact');
    let parsedContact = JSON.parse(sevContact);
    if (parsedContact) {
      this.setState({ contacts: parsedContact });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      let contact = this.state.contacts;
      localStorage.setItem('contact', JSON.stringify(contact));
    }
  }

  addNumber = obj => {
    if (
      this.state.contacts.find(({ name }) => {
        return name === obj.name;
      })
    ) {
      return this.openModal();
    }

    this.setState(prev => {
      return { contacts: [...prev.contacts, obj] };
    });
  };

  openModal = () => {
    this.setState(prev => ({ modal: !prev.modal }));
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  filteredContact = () => {
    const { filter, contacts } = this.state;

    let filtered = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return filtered;
  };

  delNumber = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter, modal } = this.state;

    return (
      <div className="box">
        {modal && <Modal openModal={this.openModal} />}
        <Section title="Телефонная книга">
          <Forms addNumber={this.addNumber} contact={contacts} />
        </Section>
        <Section title="Знайти">
          <FilterInput handleChange={this.handleChange} value={filter} />
        </Section>
        <Section title="Номера телефонов">
          <PhoneList contacts={this.filteredContact()} del={this.delNumber} />
        </Section>
      </div>
    );
  }
}
