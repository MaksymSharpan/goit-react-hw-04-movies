import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';

function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/movies">Search movies</NavLink>
      </li>
      {/* <li>
        <NavLink to="/movies/:movieId"></NavLink>
      </li> */}
    </ul>
  );
}

export default Navbar;
