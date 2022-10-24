import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import styles from './../ContactForm/ContactForm.module.css';
import { FaPlus } from 'react-icons/fa';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input className={styles.formInput} name="name" placeholder="Name" />
      <input className={styles.formInput} name="number" placeholder="Number" />
      <button className={styles.formBtn} type="submit">
        Add contact{' '}
        <span className={styles.addSvg}>
          <FaPlus />
        </span>
      </button>
    </form>
  );
};
