import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';

function Navbar() {
  return (
    <>
      <ul className={styles.navbar}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Search movies</NavLink>
        </li>
      </ul>
      {/* <img
        src="../../../../images/cloneold.ico"
        alt=""
        className={styles.img}
      /> */}
    </>
  );
}

export default Navbar;
