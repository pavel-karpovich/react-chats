
const updateUserDataUrl = 'https://europe-west1-testing-256208.cloudfunctions.net/updateUser';

export type UserDataForUpdate = {
  readonly uid: string,
  readonly name?: string,
  readonly pictureUrl?: string,
}

export async function updateUserData(user: UserDataForUpdate) {
  const response = await fetch(updateUserDataUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.json();
}
