import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';

import routes from '../../../../routes';

function Navbar() {
  return (
    <header>
      <ul className={styles.navbar}>
        <li>
          <NavLink to={routes.home}>Home</NavLink>
        </li>
        <li>
          <NavLink to={routes.movies}>Search movies</NavLink>
        </li>
      </ul>
      {/* <img
        src="../../../../images/cloneold.ico"
        alt=""
        className={styles.img}
      /> */}
    </header>
  );
}

export default Navbar;
