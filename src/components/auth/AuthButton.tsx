import React, { MouseEvent } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './AuthButton.module.scss';

export interface AuthButtonProps {
  icon: IconProp,
  text: string,
  onClick?: (e: MouseEvent) => void,
  className?: string,
};

const AuthButton: React.FC<AuthButtonProps> = function(props: AuthButtonProps) {
  const buttonClick = function(e: MouseEvent) {
    if (props.onClick) {
      props.onClick(e);
    }
  };
  return (
    <Button block onClick={buttonClick} className={styles.button + ' ' + props.className}>
      <div className={styles.inner}>
        <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
        <span className={styles.text}>{props.text}</span>
      </div>
    </Button>
  );
};

export default AuthButton;
