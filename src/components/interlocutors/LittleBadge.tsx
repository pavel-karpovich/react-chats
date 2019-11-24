import React from 'react'

export interface LittleBadgeProps {
  text: string,
  color: string,
}

const LittleBadge: React.FC<LittleBadgeProps> = function(props) {
  return (
    <span style={{backgroundColor: props.color}}>
      { props.text }
    </span>
  );
};

export default LittleBadge;
