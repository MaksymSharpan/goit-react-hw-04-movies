import React from 'react';

import styles from './ButtonGo.module.scss';

function ButtonGo({ props }) {
  // console.log(props);
  return (
    <button
      className={styles.button}
      type="button"
      onClick={() => props.goBack()}
    >
      Go to Bogdan
    </button>
  );
}

export default ButtonGo;
