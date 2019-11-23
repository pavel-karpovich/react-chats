import React from 'react';
import { Spinner } from 'react-bootstrap';

export interface RoundedLoaderProps {
  className?: string,
}

const RoundedLoader: React.FC<RoundedLoaderProps> = function(props) {
  return (
    <Spinner animation="border" role="status" className={props.className}>
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default RoundedLoader;
