import React from 'react';
import { PublicUserData } from '../../../types/commonTypes'
import Connection from './Connection';

export interface ExistedConnectionProps {
  user: PublicUserData,
  unreadMessages: number,
  lastMessage?: string,
}

const ExistedConnection: React.FC<ExistedConnectionProps> = function(props) {
  return (
    <Connection user={props.user}>
      { props.unreadMessages !== 0 &&
          <Connection.HeadIcons>
            <span>{ props.unreadMessages }</span>
          </Connection.HeadIcons>
      }
      <Connection.SecondaryLine>
        <span>{ props.lastMessage }</span>
      </Connection.SecondaryLine>
    </Connection>
  );
};

export default ExistedConnection;
