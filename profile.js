import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import{getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTvAFFu9aRmkb4nz42D9Qff3dNvmdPiJ8",
    authDomain: "soniaemporium-c098e.firebaseapp.com",
    databaseURL: "https://soniaemporium-c098e-default-rtdb.firebaseio.com",
    projectId: "soniaemporium-c098e",
    storageBucket: "soniaemporium-c098e.appspot.com",
    messagingSenderId: "518107788590",
    appId: "1:518107788590:web:dcb6a0afb3e5e69823b6bf",
    measurementId: "G-9NGP2CY0XM"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const auth = getAuth();
    const db = getFirestore();

    onAuthStateChanged(auth, (user)=>{
        const loggedInUserId = localStorage.getItem('loggedInUserId');
        if(loggedInUserId){
            const docRef = doc(db, "users", loggedInUserId);
            getDoc(docRef).then((docSnap)=>{
                
            })
        }
        getDoc(docRef)
    })