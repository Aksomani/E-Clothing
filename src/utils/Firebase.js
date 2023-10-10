import {initializeApp} from 'firebase/app';
import {getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import{
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query, 
    getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC0Au429-ni_hQNmmMc5qOzy6Ujps5EAl4",
    authDomain: "e-clothing-db-73898.firebaseapp.com",
    projectId: "e-clothing-db-73898",
    storageBucket: "e-clothing-db-73898.appspot.com",
    messagingSenderId: "59890207290",
    appId: "1:59890207290:web:72c760ddd5f0951c7c4303"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInGoogleWithPopup = () => signInWithPopup(auth, provider);
  export const signInGoogleWithRedirect = () => signInWithRedirect(auth, provider);
  
  export const db = getFirestore();

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);

    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    })

    await batch.commit();
    console.log("done")
  };

  export const getCategoriesAndDoucuments  = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce( (acc, docSnapshot) => {
      const {title, items } =docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})

     return categoryMap;
  } 

  export const createUserDocFromAuth = async (
    userAuth,
    additionalInformation = {}
  ) => {
    if (!userAuth || !userAuth.email) return;
  
    const userDocRef = doc(db, 'user', userAuth.uid);
  
    // console.log(userDocRef);
  
    const userSnapShot = await getDoc(userDocRef);
    // console.log(userSnapShot);
    // console.log(userSnapShot.exists());
  
    if (!userSnapShot.exists()) {
      const { email, displayName } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          email,
          username: displayName || '', 
          createdAt,
          ...additionalInformation
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
    return userDocRef;
  };
  
  
  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
  }

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
  }

  export const signOutUser = async() => await signOut(auth);

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);