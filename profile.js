import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import{getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
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
                if(docSnap.exists()){
                    const userData = docSnap.data();
                    document.getElementById('loggedUserEmail').innerText = userData.email;
                    document.getElementById('loggedUserFName').innerText = userData.firstName;
                    document.getElementById('loggedUserLName').innerText = userData.lastName;
                }else{
                    console.log("No document found matching ID");
                }
                
            }).catch((error)=>{
                console.log("Error getting document");
            })
        }else{
            console.log("User ID not found inn local storage");
        }
        
    });

    const logoutButton = document.getElementById('logoutBtn');
    
    logoutButton.addEventListener('click', ()=>{
        localStorage.removeItem('loggedInUserId');
        signOut(auth).then(()=>{
            window.location.href = 'profile.html';
        }).catch((error)=>{
            console.error('Error Signing Out: ', error);
        })
    });

    const profileIcon = document.getElementById('profileIcon');
    profileIcon.addEventListener('click', ()=>{
        const loggedInUserId = localStorage.getItem('loggedInUserId');
        if(!loggedInUserId){
            window.location.href = 'login.html';
        }else{
            window.location.href = 'profile.html';
        }
    });

    //const adminButton = document.getElementById('adminBtn');
    //adminButton.addEventListener('click', ()=>{
    //    let adminUid = 'D3VhNk76AZR5BNeZ9bAQIuwC6pF3';
    //    let loggedInAdminId = localStorage.getItem('loggedInUserId');
    //    if(loggedInAdminId.toString() === adminUid.toString() ){
    //        window.location.href = 'adminDash.html';
    //    }else{
    //        window.location.href = 'index.html';
    //    }
    //});
   
    
        
    