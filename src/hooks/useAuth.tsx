import React, { useState, useEffect, useContext, createContext } from 'react';

import firebase from '../api';

interface Auth {
  user: firebase.User | false | null;
  signin: (
    email: string,
    username: string,
    password: string,
  ) => Promise<firebase.User | null>;
  signinAnon: () => Promise<firebase.User | null>;
  signup: (
    email: string,
    username: string,
    password: string,
  ) => Promise<firebase.User | null>;
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

  const signin = async (email: string, username: string, password: string) => {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    await response?.user?.updateProfile({ displayName: username });
    setUser(response.user);
    return response.user;
  };

  const signinAnon = async () => {
    const response = await firebase.auth().signInAnonymously();
    setUser(response.user);
    return response.user;
  };

  const signup = async (email: string, username: string, password: string) => {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await response?.user?.updateProfile({ displayName: username });
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
