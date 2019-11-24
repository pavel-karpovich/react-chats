import { auth } from 'firebase-functions';
import * as admin from 'firebase-admin';

export default function storeUserData(user: auth.UserRecord) {
  return admin.firestore().collection('users').doc(user.uid).set({
    name: user.displayName,
    pictureUrl: user.photoURL,
  });
}
