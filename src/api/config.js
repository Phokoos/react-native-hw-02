// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAZmS0i6PvFbVilOX_y9juqh26_lFdMl-w",
	authDomain: "reactnativegallery-e308e.firebaseapp.com",
	projectId: "reactnativegallery-e308e",
	storageBucket: "reactnativegallery-e308e.appspot.com",
	messagingSenderId: "404821941142",
	appId: "1:404821941142:web:079dc7031cdc928b469bb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);