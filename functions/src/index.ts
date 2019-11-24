import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import storeUserData from './storeUserData';
import updateUserData from './updateUserData';

admin.initializeApp();

export const addUser = functions.auth.user().onCreate(storeUserData);
export const updateUser = functions.https.onCall(updateUserData);
