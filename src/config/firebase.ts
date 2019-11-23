import * as Firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBTJy7o-NsovnoQrbADVPyWVn3MYmp321o",
  authDomain: "testing-256208.firebaseapp.com",
  databaseURL: "https://testing-256208.firebaseio.com",
  projectId: "testing-256208",
  storageBucket: "testing-256208.appspot.com",
  messagingSenderId: "18742733660",
  appId: "1:18742733660:web:6c9cfc03736e9346e4af99",
  measurementId: "G-KXCEEG444M"
};

Firebase.initializeApp(firebaseConfig);

Firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log('User is log in');
    console.log(user);
  } else {
    console.log('User is not log in');
  }
});
