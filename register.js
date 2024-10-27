
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import{getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"
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

function showMessage(message, divId){
    var messageDiv = document.getElementById(divId);
    messageDiv.style.display = 'block';
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(function(){
        messageDiv.style.opacity = 0;
    }, 5000);
}

const register = document.getElementById('registerBtn');
register.addEventListener('click', (event)=> {
    event.preventDefault();
    const email = document.getElementById('rEmail').value;
    const password = document.getElementById('rPassword').value;
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;
    
    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        const userData = {
            email: email,
            firstName: firstName,
            lastName: lastName
        };
        showMessage('Account Created Successfully', 'signUpMessage');
        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, userData).then(()=>{
            window.location.href = 'login.html';
        }).catch((error)=>{
            console.error("Error writing dcoument", error);
        });
    }).catch((error)=>{
        const errorCode = error.code;
        if(errorCode == 'auth/email-already-in-use}'){
            showMessage('Email Address Already Exists !!!', 'signUpMessage');
        }else{
            showMessage('Unable to create user', 'signUpMessage');
        }
    })
});

