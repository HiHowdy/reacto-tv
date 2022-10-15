import { auth, db } from '..';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { printErrorMessage } from '../errors';
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore/lite';

export const loginWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    return printErrorMessage(error);
  }
};

export const registerWithEmailAndPassword = async (
  displayName: string,
  email: string,
  password: string
): Promise<any> => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = response;
    await updateProfile(user, { displayName });

    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      displayName,
      email,
      avatar: '',
    });
    return true;
  } catch (error) {
    return printErrorMessage(error);
  }
};

export const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return true;
  } catch (error) {
    return printErrorMessage(error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    return printErrorMessage(error);
  }
};

export const doesUsernameExist = async (username: string) => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, 'users'), where('username', '==', username))
    );

    return querySnapshot.docs.length > 0;
  } catch (error) {
    return error;
  }
};

export const fetchUserDetails = async (uid: string) => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, 'users'), where('uid', '==', uid))
    );

    return querySnapshot.docs[0].data();
  } catch (error) {
    return error;
  }
};
