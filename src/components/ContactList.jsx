// import defaultImg from '../image/defaultImg.jpg'
import styles from './styles/PhoneBook.module.css'

const generateUniqueId = require('generate-unique-id');

const ContactList = ({ contactsList }) => {
    return (
        <div >
            <ul className={styles.contactList}>
                {contactsList.map(item => (
                    <li key={generateUniqueId()} className={styles.contactsItem}>
                        {item.name}: {item.number}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList;