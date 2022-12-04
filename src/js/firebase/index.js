// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import jwtDecode from 'jwt-decode';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDqBa7ii7NX8scJMPBbK6fJnX_Iux1ThAc',
  authDomain: 'filmoteka-1998.firebaseapp.com',
  projectId: 'filmoteka-1998',
  storageBucket: 'filmoteka-1998.appspot.com',
  messagingSenderId: '899382993035',
  appId: '1:899382993035:web:397d338a99f261f879348e',
  measurementId: 'G-GYH01L0CP9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);

const login = document.querySelector('.login-button');

const getUserData = async () => {
  const login = await signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = jwtDecode(result.user.accessToken);
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user));
      const USERINFO = document.querySelector('.user-info');
      console.log(USERINFO);
      USERINFO.innerHTML = `<p class="user-info__name"> ${user.name}</p>
      <img class="user-info__image"
        src=${user.picture}
        alt="${user.name}">`;
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

login.addEventListener('click', getUserData);
