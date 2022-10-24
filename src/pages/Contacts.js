import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import FindContact from 'components/FindContact/FindContact';
import styles from './../components/App.module.css'

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <div className={styles.findContainer}>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
      </div>
      <FindContact/>
    </>
  );
}
