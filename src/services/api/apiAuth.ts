import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebaseInit';

export const userObserver = () => {
  console.log('auth', auth);
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log('onAuthStateChanged', user);

      // ...
    } else {
      // User is signed out
      // ...
    }
  });
};
