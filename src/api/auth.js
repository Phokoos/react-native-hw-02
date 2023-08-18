import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile,
	signOut
} from 'firebase/auth';
import { auth, db } from './config';
import { collection, doc, setDoc } from 'firebase/firestore';

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


export const loginDB = async ({ email, password }) => {
	try {
		const credentials = await signInWithEmailAndPassword(auth, email, password);
		return credentials.user;
	} catch (error) {
		throw error;
	}
};

export const logoutDB = async () => {
	try {
		await signOut(auth).then((data) => {
			console.log("Logout success, data: ", data)
		})
	} catch (error) {
		console.log("Error in logout: ", error)
	}
}

export const updateUserName = async (name) => {
	try {
		const userNameRef = doc(db, 'users', auth.currentUser.uid);
		const data = await setDoc(userNameRef, { name }, { merge: true })
		return data
	} catch (error) {
		throw new Error({ message: error.message })
	}

}


export const updateUserProfile = async (update) => {

	const user = auth.currentUser;

	// якщо такий користувач знайдений
	if (user) {

		// оновлюємо його профайл
		try {
			await updateProfile(user, update);
		} catch (error) {
			throw error
		}
	}
};