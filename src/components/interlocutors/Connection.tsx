import React from 'react';
import { Image } from 'react-bootstrap';
import { getUiAvatarUrl } from 'services/avatarUiApi';
import { PublicUserData } from '../../../types/commonTypes'
import styles from './Connection.module.scss';

const ProxyComponent: React.FC<{}> = function(props) {
  return (
    <>{ props.children }</>
  );
};

export interface ChatListItemProps {
  user: PublicUserData,
}

export default class ChatListItem extends React.Component<ChatListItemProps, {}> {
  constructor(props: ChatListItemProps) {
    super(props);
    console.log(this.props.children);
  }
  render() {
    return (
      <li className="w-100 d-flex">
        <div className="d-flex">
          <Image roundedCircle className={styles.pic}
            src={this.props.user.pictureUrl || getUiAvatarUrl(this.props.user.name || null)}
          />
          <div className="d-flex flex-column">
            <div className="d-flex">
              <span>{ this.props.user.name }</span>
              <div>{ this.props.children }</div>
            </div>
            <div className="d-flex">
              <span>{ this.props.children }</span>
            </div>
          </div>
        </div>
      </li>
    );
  }
  static HeadIcons = ProxyComponent
  static SecondaryLine = ProxyComponent 
}
