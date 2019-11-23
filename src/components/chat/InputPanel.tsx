import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import styles from './InputPanel.module.scss';

const inputPlaceholder = 'Don\'t be a nerd, write something!';

const InputPanel: React.FC<{}> = function() {
  return (
    <div className="w-100">
      <Form className="d-flex h-100">
        <div
          contentEditable={true}
          className={styles.input}
          data-placeholder={inputPlaceholder}
        />
        <Button className={styles.sendBtn}>
          <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
        </Button>
      </Form>
    </div>
  );
};

export default InputPanel;
