import React from 'react';
import styles from './SquareBracketsContainer.module.scss';

const SquareBracesContainer: React.FC = function(props) {
  return (
    <div className={styles.squareBraces}>
      <div className={styles.gasket}>
        <div className={styles.container}>
          { props.children }
        </div>
      </div>
    </div>
  );
};

export default SquareBracesContainer;
