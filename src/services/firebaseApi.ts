import * as Firebase from 'firebase/app';
import 'firebase/functions';

export type UserDataForUpdate = {
  readonly name?: string,
  readonly pictureUrl?: string,
}

export function updateUserData(user: UserDataForUpdate) {
  const updateUser = Firebase.functions().httpsCallable('updateUser');
  console.log('calling "updateUser" Cloud Functions');
  return updateUser(user);
}
