import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import storeUserData from './storeUserData';
import updateUserData from './updateUserData';

admin.initializeApp();
const region = 'europe-west1';

export const addUser = functions.region(region).auth.user().onCreate(storeUserData);
export const updateUser = functions.region(region).https.onRequest(updateUserData);
