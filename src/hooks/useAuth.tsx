import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyCkRj_vsuzdvftN41rsVoehFFP8_MPw21o',
  authDomain: 'cacophone-85bfa.firebaseapp.com',
  projectId: 'cacophone-85bfa',
  storageBucket: 'cacophone-85bfa.appspot.com',
  messagingSenderId: '797406842581',
  appId: '1:797406842581:web:f0296968746cd6bb341c5c',
});

interface Auth {
  user: firebase.User | false | null;
  signin: (email: string, password: string) => Promise<firebase.User | null>;
  signinAnon: () => Promise<firebase.User | null>;
  signup: (email: string, password: string) => Promise<firebase.User | null>;
  signout: () => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<boolean>;
}

const authContext = createContext<Auth | undefined>(undefined);

export default function useAuth() {
  return useContext(authContext)!;
}

export function ProvideAuth({ children }: { children: React.ReactNode }) {
  const auth: Auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function useProvideAuth() {
  // NOTE:  null indicates we are attempting to authenticate the user,
  // false indicates they are not authenticated
  const [user, setUser] = useState<firebase.User | false | null>(null);

  const signin = async (email: string, password: string) => {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    setUser(response.user);
    return response.user;
  };

  const signinAnon = async () => {
    const response = await firebase.auth().signInAnonymously();
    setUser(response.user);
    return response.user;
  };

  const signup = async (email: string, password: string) => {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    setUser(response.user);
    return response.user;
  };

  const signout = async () => {
    await firebase.auth().signOut();
    setUser(false);
  };

  const sendPasswordResetEmail = async (email: string) => {
    await firebase.auth().sendPasswordResetEmail(email);
    return true;
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signinAnon,
    signup,
    signout,
    sendPasswordResetEmail,
  };
}
