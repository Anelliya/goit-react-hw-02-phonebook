import React, { Component } from 'react'

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

    handleData = () => {
        this.props.handleSubmit(this.state);

        this.setState({
            name: '',
            number: ''
        })
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
                <button onClick={this.handleData} disabled={!this.state.name || !this.state.number} className={styles.btn}>Add contact</button>
            </form >
        )
    }

}

export default ContactForm;