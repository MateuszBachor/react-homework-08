import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form
      className={styles.formContainer}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <label>
        Username
        <input
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Nazwa może zawierać tylko litery, apostrof, myślnik i spacje."
          className={styles.formInput}
          type="text"
          name="name"
          required
        />
      </label>
      <label>
        Email
        <input
          className={styles.formInput}
          type="email"
          name="email"
          required
        />
      </label>
      <label>
        Password
        <input
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Musi zawierać co najmniej jedną cyfrę i jedną wielką i małą literę oraz co najmniej 8 lub więcej znaków"
          className={styles.formInput}
          type="password"
          name="password"
          required
        />
      </label>
      <button className={styles.formBtn} type="submit">
        Register
      </button>
    </form>
  );
};
