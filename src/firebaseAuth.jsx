import  firebaseApp from './firebase';
import {getAuth, signInAnonymously, signOut, onAuthStateChanged, updateProfile} from 'firebase/auth';

const auth = getAuth(firebaseApp);

const signIn = async ({displayName, userRole}) => {
  try {
    await signInAnonymously(auth);
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    })
    
  }
  catch (error) {
    console.error(error);
  }
};

const userLogout = async () => {
  try {
    auth.currentUser?.delete();
    await signOut(auth)
  }
  catch (error) {
    console.error(error);
  }
}

const authObserver = (handleChange) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        handleChange(user);
      } else {
        handleChange(null);
      }
      
    });
}

const firebaseAuthService = {
  signIn,
  authObserver,
  userLogout,
}

export default firebaseAuthService;