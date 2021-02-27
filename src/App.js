import React, { Component } from 'react'
import generateUniqueId from 'generate-unique-id'


import styles from './components/styles/PhoneBook.module.css'
import './App.css';

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from './components/Filter';

class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  handleNewContactsItem = (contactstItem) => {
    let newId;
    if (contactstItem) newId = generateUniqueId();
    contactstItem.id = newId

    const contacts = this.state.contacts;
    const checkName = contacts.find(el => el.name.toLowerCase() === contactstItem.name.toLowerCase())

    !checkName ? this.setState(({ contacts }) => ({
      contacts: [contactstItem, ...contacts]
    }))
      : alert(`${contactstItem.name} already in contacts`)
  }

  handleFilterValue = event => {
    this.setState({ filter: event.currentTarget.value });
  }

  handleDeleteContact = id => {
    this.setState(prevState =>
      ({ contacts: prevState.contacts.filter(el => el.id !== id) }))
  }

  render() {
    const { contacts, filter } = this.state;
    const normolizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(contact => (contact.name.toLowerCase().includes(normolizedFilter)))

    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm options={['name', 'number']} handleSubmit={this.handleNewContactsItem} />
        <h2>Contacts: </h2>
        <Filter handleCnange={this.handleFilterValue} filterList={filter} />
        <ContactList contactsList={filteredContacts} handleClick={this.handleDeleteContact} />
      </div>
    );
  }
}

export default App;


 // первая версия фильтра(функция получает готовые данные)
    // const contacts = this.state.contacts;
    // console.log('get', value)

    // const filteredContacts = contacts.filter(contact => (contact.name.toLowerCase().includes(value.toLowerCase())));
    // this.setState({ filter: filteredContacts });
    // console.log('filer', this.state.filter)
