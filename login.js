// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import{getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import{getFirestore, setDoc, getDoc, doc} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"


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

export function showMessage(message, divId){
    var messageDiv = document.getElementById(divId);
    messageDiv.style.display = 'block';
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(function(){
        messageDiv.style.opacity = 0;
    }, 5000);
}

const login = document.getElementById('loginBtn');
login.addEventListener('click', (event)=> {
    event.preventDefault();
    const email = document.getElementById('lEmail').value;
    const password = document.getElementById('lPassword').value;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
        showMessage('Login is Succesful', 'signInMessage');
        const user = userCredential.user;
        localStorage.setItem('loggedInUserId', user.uid);
        //window.location.href = 'deliveryDetails.html';

        let adminUid = 'D3VhNk76AZR5BNeZ9bAQIuwC6pF3';
        let loggedInAdminId = localStorage.getItem('loggedInUserId');
        if(loggedInAdminId.toString() === adminUid.toString() ){
            window.location.href = 'adminDash.html';
        }else{
            window.location.href = 'index.html';
        }
    }).catch((error)=>{
        const errorCode = error.code;
        if(errorCode == 'auth/invalid-credential'){
            showMessage('Incorrect email or password', 'signInMessage');
        }else{
            showMessage('Account does not exist', 'signInMessage');
        }
    })
});

    
export function signIn(temail, tpassword){
    if(temail === 'myezamuzi4@gmail.com' && tpassword === 'Password1!'){
        return(true);
    }
    
}

const adminButton = document.getElementById('adminBtn');
    adminButton.addEventListener('click', ()=>{
        
    });