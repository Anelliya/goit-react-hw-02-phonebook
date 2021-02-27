// import defaultImg from '../image/defaultImg.jpg'
import styles from './styles/PhoneBook.module.css'

const generateUniqueId = require('generate-unique-id');

const ContactList = ({ contactsList, onClick }) => {
    return (
        <div className={styles.contactList}>
            <ul >
                {contactsList.map(item => (
                    <li key={generateUniqueId()} className={styles.contactsItem} width="70px">
                        {item.name}: {item.number}
                        <button id={contactsList.id} onClick={() => onClick(item.id)} className={styles.listBtn}>X</button>
                    </li>

                ))}

            </ul>
        </div>
    )
}

export default ContactList;