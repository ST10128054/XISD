// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import{getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"
//import { getStorage } from "firebase/storage";
//import "firebase/storage";
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

const auth = getAuth(app);
const db = getFirestore(app);
//const storage = getStorage(app);

//await setDoc(doc(db, "products", "pd1"), {
//    productName: "Army Green Dress",
//    price: "120",
//    details: "Step into a world of elegance with our Army Green Dress. This stunning piece features a rich, vibrant green hue that captures the essence of nature’s beauty. Crafted from a luxurious blend of soft, breathable fabric, it drapes gracefully over your figure, ensuring comfort without compromising style. The dress showcases a flattering A-line silhouette, perfect for any occasion—whether you're attending a garden party, a romantic dinner, or a casual outing with friends. Delicate details, such as a sweetheart neckline and subtle ruffle sleeves, add a touch of femininity and charm. Pair it with your favorite heels for a chic evening look, or dress it down with sandals for a relaxed daytime vibe. Versatile and timeless, the Enchanted Emerald Dress is a must-have staple that will make you feel confident and radiant. Embrace your inner goddess and let this dress bring a splash of color to your wardrobe!",
//    images: "armygreen_dress2.jpeg"
//  });

  
function showMessage(message, divId){
    var messageDiv = document.getElementById(divId);
    messageDiv.style.display = 'block';
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(function(){
        messageDiv.style.opacity = 0;
    }, 5000);
}

const add = document.getElementById('addBtn');
add.addEventListener('click', (event)=> {
    event.preventDefault();
    const productID = document.getElementById('productID').value;
    const productName = document.getElementById('productName').value;
    const price = document.getElementById('price').value;
    const details = document.getElementById('details').value;
    const images = document.getElementById('images').value;
    
    const productData = {
        productName: productName,
        price: price,
        details: details,
        images: images
    };
    const docRef = doc(db, "products", productID);
    setDoc(docRef, productData).then(()=>{
        showMessage('Product added!', 'productMessage');
        window.location.href = '#';
    }).catch((error)=>{
        console.error("Error writing dcoument", error);
    });

});
const display = document.getElementById('displayBtn');
display.addEventListener('click', (event)=> {
window.location.href = 'displayProducts.html';
});

