import React, { Component } from 'react'

import styles from './styles/PhoneBook.module.css'

const generateUniqueId = require('generate-unique-id');


class ContactForm extends Component {

    state = {
        id: generateUniqueId(),
        name: '',
        number: '',
    }


    heandleNewValue = ev => {
        const newValue = ev.currentTarget.value;
        const turget = ev.currentTarget.name;
        this.setState({
            [turget]: newValue,
        })
    }

    heandelData = ev => {
        ev.preventDefault();
        this.props.onSubmit(this.state);

        this.setState({
            id: generateUniqueId(),
            name: '',
            number: ''
        })

    }

    render() {
        const inputNames = this.props.options;

        return (
            <form action="form" type="submit" onSubmit={this.heandelData} className={styles.form}>
                {inputNames.map(inputName => (
                    <label key={inputName} className={styles.label}>
                        {inputName}
                        <input type='text' key={inputName} name={inputName} value={this.state[inputName]} onChange={this.heandleNewValue} className={styles.input} />
                    </label>
                ))}
                <button type="submit" disabled={!!!this.state.name || !!!this.state.number ? true : false} className={styles.btn}>Add contact</button>
            </form >
        )
    }

}

export default ContactForm;