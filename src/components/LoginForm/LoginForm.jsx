import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
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
        Email
        <input className={styles.formInput} type="email" name="email" />
      </label>
      <label>
        Password
        <input className={styles.formInput} type="password" name="password" />
      </label>
      <button className={styles.formBtn} type="submit">
        Log In
      </button>
    </form>
  );
};
