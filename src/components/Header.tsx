import React from 'react';
import { Navbar, Image, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { logout } from 'store/actions';
import { getUserName, getUserPictureUrl } from 'store/selectors';
import { ReactComponent as LogoSvg } from 'assets/chats.svg';
import styles from './Header.module.scss';

const mockUserName = 'JOHN DOE';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const uiAvatarBaseUrl = 'https://ui-avatars.com/api/?length=1&name=';
function getUiAvatarUrl(name: string | null) {
  if (name) {
    return uiAvatarBaseUrl + name;
  } else {
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    return uiAvatarBaseUrl + randomLetter;
  }
}

export interface HeaderProps {
  className?: string,
};

const Header: React.FC<HeaderProps> = function(props) {
  const userName = useSelector(getUserName);
  const userPictureUrl = useSelector(getUserPictureUrl);
  const userLogout = () => logout()();
  return (
    <Navbar bg="light" sticky="top" className={styles.bar + ' ' + props.className}>
      <div>
        <Navbar.Brand>
          <LogoSvg className={styles.logo} />
        </Navbar.Brand>
      </div>
      <div>
        <Image roundedCircle className={styles.pic}
          src={userPictureUrl || getUiAvatarUrl(userName)}
        />
        <Navbar.Text className="ml-2 mr-5">{ userName || mockUserName }</Navbar.Text>
        <Button onClick={userLogout}>Log out</Button>
      </div>
    </Navbar>
  );
};

export default Header;
