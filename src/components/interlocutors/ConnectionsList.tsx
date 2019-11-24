import React from 'react';
import { PublicUserData } from '../../../types/commonTypes';
import ConnectionsListItem from './Connection';

const ChatList: React.FC<{}> = function() {
  const chats: PublicUserData[] = [];
  return (
    <ul>
    { chats.map(chat => {
        <ConnectionsListItem user={chat} key={chat.name}>
          <ConnectionsListItem.HeadIcons>
            <span>Icons</span>
          </ConnectionsListItem.HeadIcons>
          <ConnectionsListItem.SecondaryLine>
            <span>Last but not the least message!</span>
          </ConnectionsListItem.SecondaryLine>
        </ConnectionsListItem>
      })
    }
    </ul>
  );
}

export default ChatList;
