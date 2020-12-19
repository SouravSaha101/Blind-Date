import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    // Populate your firebase configuration data here.
    apiKey: "AIzaSyDTKWgydXuwpk1cYm38YJjIDyiRdSwjeKc",
    authDomain: "blind-date-web.firebaseapp.com",
    projectId: "blind-date-web",
    storageBucket: "blind-date-web.appspot.com",
    messagingSenderId: "638902620719",
    appId: "1:638902620719:web:7a0e2d9174974b9adcacda",
    measurementId: "G-QB47S01KMM"
});

const db = firebaseApp.firestore();

// Export the database for components to use.
export { db,firebaseApp };
