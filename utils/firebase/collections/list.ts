import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  getDoc,
} from 'firebase/firestore';
import { db } from '..';

export const getUserList = async (uid: string) => {
  const q = query(collection(db, 'lists'), where('uid', '==', uid));
  const querySnapshot = await getDocs(q);
  const lists: any = [];

  querySnapshot.forEach((doc) => {
    lists.push({ id: doc.id, ...doc.data() });
  });

  lists[0].list = JSON.parse(lists[0].list);

  return lists;
};

export const addToList = async (
  uid: number,
  id: number,
  type: 'movie' | 'tv' | 'people'
) => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, 'lists'), where('uid', '==', uid))
    );

    if (querySnapshot.empty) {
      await addDoc(collection(db, 'lists'), {
        uid,
        list: JSON.stringify([[id, type]]),
      });

      return [[id, type]];
    } else {
      const list = JSON.parse(querySnapshot.docs[0].data().list);
      const exists = list.find((item: any) => item[0] === id);
      list.push([id, type]);

      if (exists) return false;

      await updateDoc(querySnapshot.docs[0].ref, {
        list: JSON.stringify(list),
      });

      return list;
    }
  } catch (err) {
    return false;
  }
};

export const removeFromList = async (
  uid: number,
  id: number,
  type: 'movie' | 'tv' | 'people'
) => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, 'lists'), where('uid', '==', uid))
    );

    if (querySnapshot.empty) return false;

    const list = JSON.parse(querySnapshot.docs[0].data().list);
    const newList = list.reduce((acc: any, item: any) => {
      if (item[0] !== id) acc.push(item);
      return acc;
    }, []);

    await updateDoc(querySnapshot.docs[0].ref, {
      list: JSON.stringify(newList),
    });

    return newList;
  } catch (err) {
    return false;
  }
};
