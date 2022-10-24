import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { FaTrash } from 'react-icons/fa';
import styles from './../Contact/Contact.module.css';

export const Contact = ({ id, number, name }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={styles.contact}>
      <p>
        {name} : {number}
      </p>
      <button className={styles.deleteBtn} type="button" onClick={handleDelete}>
        <FaTrash />
      </button>
    </div>
  );
};
