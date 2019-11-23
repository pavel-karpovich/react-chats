import { useDispatch } from 'react-redux';
import * as Firebase from 'firebase/app';
import 'firebase/auth';
import { authCommit, logoutCommit } from 'store/actions';

let isAlreadyCalled = false;

export default function useFirebaseAuth() {
  const dispatch = useDispatch();
  if (isAlreadyCalled) {
    console.log('You must use FirebaseAuth only once. Usually in a top one component that have access to the store!');
    return;
  }
  isAlreadyCalled = true;
  Firebase.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch(
        authCommit(user.email as string, user.displayName, user.photoURL)
      );
      console.log('User is log in');
      console.log(user);
    } else {
      console.log('User is not log in');
      dispatch(logoutCommit());
    }
  });
}
