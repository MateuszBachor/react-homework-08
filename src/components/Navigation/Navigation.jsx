import { NavLink } from 'react-router-dom';
import { useAuth } from './../hooks/useAuth';
import styles from './../Navigation/Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={styles.Nav}>
      <NavLink className={styles.NavLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={styles.NavLink} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
