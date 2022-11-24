import { createContext, useContext, useState, useEffect } from "react";
import firebaseAuthService from "../firebaseAuth";


const FirebaseAuthContext = createContext(undefined);

const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const  value = { user };

  useEffect(() => {
    const unsubscribe = firebaseAuthService.authObserver(setUser);
    return unsubscribe;
  }, []);

  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  );
}

const useFirebaseAuth = () => {
  const context = useContext(FirebaseAuthContext);
  if (context === undefined) {
    throw new Error("useFirebaseAuth must be used within a FirebaseAuthProvider");
  }
  return context.user;
}

export { FirebaseAuthProvider, useFirebaseAuth };