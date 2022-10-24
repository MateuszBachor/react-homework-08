import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { selectAllContacts } from 'redux/contacts/selectors';
import styles from './../ContactsList/ContactsList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(selectAllContacts);
  const filters = useSelector(state => state.filter);
  if (filters !== null) {
    return contacts
      .filter(el => el.name.toLowerCase().includes(filters.toLowerCase()))
      .map(({ id, name, number }) => (
        <li className={styles.contactLi} key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ));
  } else {
    return contacts.map(({ id, name, number }) => (
      <li className={styles.contactLi} key={id}>
        <Contact id={id} name={name} number={number} />
      </li>
    ));
  }
};
