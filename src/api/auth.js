import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile,
	signOut
} from 'firebase/auth';
import { auth, db } from './config';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn, setUserDetails } from '../redux/auth/authSlice';

export const registerDB = async ({ email, password, name }) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		await updateUserName(name)
		userCredential.user.name = name
		return await userCredential
	} catch (error) {
		throw new Error(error.message)
	}
}

export const updateUserName = async (name) => {
	try {
		const userNameRef = doc(db, 'users', auth.currentUser.uid);
		const data = await setDoc(userNameRef, { name }, { merge: true })
		return data
	} catch (error) {
		throw new Error(error.message)
	}
}

export const loginDB = async ({ email, password }) => {
	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		const userName = await getUserNameFromFirestore();
		userCredential.user.name = userName
		return await userCredential;
	} catch (error) {
		throw new Error(error.message)
	}
};

export const getUserNameFromFirestore = async () => {
	try {
		const docRef = doc(db, "users", auth.currentUser.uid);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return await docSnap.data().name;
		} else {
			return "No information!";
		}
	} catch (error) {
		throw new Error(error.message)
	}
};

export const isAuthUserCheck = async () => {
	let obj = {
		name: "",
		email: "",
		loggedIn: false,
		uid: "",
		token: ""
	};
	await onAuthStateChanged(auth, (user) => {
		if (user) {
			const { name, email, accessToken, uid } = user
			obj = {
				name,
				email,
				token: accessToken,
				uid,
				loggedIn: true
			}
		} else {
			obj = {
				loggedIn: false
			}
		}
	});
	return await obj
}

export const logoutDB = async () => {
	try {
		await signOut(auth).then((data) => {
			console.log("Logout success, data: ")
		})
	} catch (error) {
		console.log("Error in logout: ", error)
	}
}


