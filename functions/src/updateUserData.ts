import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { PublicUserData } from '../../types/commonTypes';

export default async function updateUserData(data: PublicUserData, context: functions.https.CallableContext) {
  if (!(context.auth && context.auth.token && context.auth.uid)) {
    const error = 'Unauthorized request!';
    console.log(error);
    throw new functions.https.HttpsError('unauthenticated', error);
  }
  const docRef = admin.firestore().collection('users').doc(context.auth.uid);
  const oldData = await docRef.get();
  if (!oldData.exists) {
    const error = 'Attempt to update non-existent user!';
    console.log(error);
    throw new functions.https.HttpsError('not-found', error);
  }
  const newObj: PublicUserData = {};
  if (data.name) {
    newObj.name = data.name;
  }
  if (data.pictureUrl) {
    newObj.pictureUrl = data.pictureUrl;
  }
  console.log('User data updated');
  return docRef.update(newObj);
}
