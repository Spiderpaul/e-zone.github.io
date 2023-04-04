/* import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js"; */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js'

// Add Firebase products that you want to use
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyB5IiCOvUVeSICnDL_LRX7qyfX_Atk-V3k",
    authDomain: "e-zone-573eb.firebaseapp.com",
    projectId: "e-zone-573eb",
    storageBucket: "e-zone-573eb.appspot.com",
    messagingSenderId: "912876753800",
    appId: "1:912876753800:web:3e2b328f83493439c2603d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

auth.languageCode = "es";

export async function login(){
    try{
        const response = await auth.signInWithPopup(provider);
        console.log(response);
        return response.user;
    }catch(error){
        throw new Error(error);
    }
}

export function logout(){
    auth.signOut();
}
