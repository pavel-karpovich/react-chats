import React, { MouseEvent } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './AuthButton.scss';

export interface AuthButtonProps {
  icon: IconProp,
  text: string,
  onClick?: (e: MouseEvent) => void,
  className?: string,
};

const AuthButton = function(props: AuthButtonProps) {
  const buttonClick = function(e: MouseEvent) {
    if (props.onClick) {
      props.onClick(e);
    }
  };
  return (
    <Button block onClick={buttonClick} className={"button " + props.className}>
      <div className="inner">
        <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
        <span>{props.text}</span>
      </div>
    </Button>
  );
};

export default AuthButton;
