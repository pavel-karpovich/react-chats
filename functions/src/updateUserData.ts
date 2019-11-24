import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

type UserDataForUpdate = {
  name?: string,
  pictureUrl?: string,
};

export default async function updateUserData(req: functions.https.Request, res: functions.Response) {
  if (!req.params.uid) {
    res.sendStatus(400);
    return;
  }
  const docRef = admin.firestore().collection('users').doc(req.params.uid);
  const oldData = await docRef.get();
  if (oldData.exists) {
    const newObj: UserDataForUpdate = {};
    if (req.params.name) {
      newObj.name = req.params.name;
    }
    if (req.params.pictureUrl) {
      newObj.pictureUrl = req.params.pictureUrl;
    }
    res.sendStatus(200);
    return docRef.update(newObj);
  }
  res.sendStatus(404);
  return;
}
