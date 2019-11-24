
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const uiAvatarBaseUrl = 'https://ui-avatars.com/api/?length=1&name=';

export function getUiAvatarUrl(name: string | null) {
  if (name) {
    return uiAvatarBaseUrl + name;
  } else {
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    return uiAvatarBaseUrl + randomLetter;
  }
}
