import { onAuthStateChanged } from 'firebase/auth';
import { IUserRefresh } from '../../interfaces/userInterface';
import { auth } from './firebaseInit';

export const authObserver = async () => {
  return await new Promise<IUserRefresh>(resolve => {
    onAuthStateChanged(auth, user => {
      if (user) {
        resolve({ uid: user.uid, email: user.email, isLoggedIn: true });
      } else {
        resolve({ uid: null, email: null, isLoggedIn: false });
      }
    });
  });
};
