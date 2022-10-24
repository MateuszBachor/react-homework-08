import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={styles.AuthNavContainer}>
      <NavLink className={styles.NavLink} to="/register">
        Register
      </NavLink>
      <NavLink className={styles.NavLink} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
