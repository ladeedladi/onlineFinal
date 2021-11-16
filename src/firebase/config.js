import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore' 
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCfJUQQKboeHvaGX28POkFiLftY1H0yuB8",
    authDomain: "demoapp-50f3f.firebaseapp.com",
    projectId: "demoapp-50f3f",
    storageBucket: "demoapp-50f3f.appspot.com",
    messagingSenderId: "415053396247",
    appId: "1:415053396247:web:e8185b8db6b60fc11f5f52",
    measurementId: "G-XSRN84J9KM"
  };


  export default firebase.initializeApp(firebaseConfig)