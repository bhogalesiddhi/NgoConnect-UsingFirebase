import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';



export const fetchUserRole = async (email) => {
  try {
    const ngoCollectionRef = collection(db, 'ngo');
    const ngoQuery = query(ngoCollectionRef, where('email', '==', email));
    const ngoDocs = await getDocs(ngoQuery);
    
    if (!ngoDocs.empty) {
      return 'ngo';
    }

    const usersCollectionRef = collection(db, 'users');
    const userQuery = query(usersCollectionRef, where('email', '==', email));
    const userDocs = await getDocs(userQuery);
   
    if (!userDocs.empty) {
      return 'user';
    }

    const adminCollectionRef = collection(db, 'admin');
    const adminQuery = query(adminCollectionRef, where('email', '==', email));
    const adminDocs = await getDocs(adminQuery);
   
    if (!adminDocs.empty) {
      return 'admin';
    }

    return 'unknown';
  } catch (error) {
    console.error('Error fetching user role:', error);
    throw error;
  }
};
