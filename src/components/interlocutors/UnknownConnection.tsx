import React from 'react';
import { PublicUserData } from '../../../types/commonTypes'
import LittleBadge from './LittleBadge';
import Connection from './Connection';

export interface ExistedConnectionProps {
  user: PublicUserData
}

const ExistedConnection: React.FC<ExistedConnectionProps> = function(props) {
  return (
    <Connection user={props.user}>
      <Connection.SecondaryLine>
          <LittleBadge text="Unknown" color="#63a3cf" />
      </Connection.SecondaryLine>
    </Connection>
  );
};

export default ExistedConnection;
