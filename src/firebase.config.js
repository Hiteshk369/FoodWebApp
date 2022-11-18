import {getApp , getApps , initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDUlXwmQgNVEawnRIYOCN6q9JWHOMcjoNY",
    authDomain: "swiggyclone-1a429.firebaseapp.com",
    databaseURL: "https://swiggyclone-1a429-default-rtdb.firebaseio.com",
    projectId: "swiggyclone-1a429",
    storageBucket: "swiggyclone-1a429.appspot.com",
    messagingSenderId: "290788632205",
    appId: "1:290788632205:web:b1739cb93a870ec6be24c4"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);

  const storage = getStorage(app);

  export  {app, firestore, storage };