import React, { Component } from 'react'
import generateUniqueId from 'generate-unique-id'


import styles from './styles/PhoneBook.module.css'

class ContactForm extends Component {

    state = {
        name: '',
        number: '',
    }

    handleNewValue = ev => {
        const { value, name } = ev.target;

        this.setState({
            [name]: value,
        })
    }

    handleNewContact = () => {
        const newContactDate = this.state;
        const contacts = this.props.contacts;
        const checkedName = contacts.find(el => el.name.toLowerCase() === newContactDate.name.toLowerCase())
        let newContact;

        const sendContactToApp = () => this.props.handleSubmit(newContact);
        const showMessage = () => alert(`${newContactDate.name} already in contacts`);
        const resetState = () => {
            this.setState({
                name: '',
                number: '',
            })
        }
        const createNewContact = () => {
            newContact = {
                id: generateUniqueId(),
                ...newContactDate
            }
        }

        if (!checkedName) {
            createNewContact();
            sendContactToApp();
        } else {
            showMessage();
        }
        resetState()
    }

    render() {
        const inputNames = this.props.options;

        return (
            <form className={styles.form}>
                {inputNames.map(inputName => (
                    <label key={inputName} className={styles.label}>
                        {inputName}
                        <input type='text' key={inputName} name={inputName} value={this.state[inputName]} onChange={this.handleNewValue} className={styles.input} />
                    </label>
                ))}
                <button onClick={this.handleNewContact} disabled={!this.state.name || !this.state.number} className={styles.btn}>Add contact</button>
            </form >
        )
    }

}

export default ContactForm;