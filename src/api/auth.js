import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile
} from 'firebase/auth';
import { auth, db } from './config';
import { collection, doc, setDoc } from 'firebase/firestore';


// або більш короткий запис цієї функції
export const registerDB = ({ email, password }) =>
	createUserWithEmailAndPassword(auth, email, password);

export const authStateChanged = async (onChange = () => { }) => {
	onAuthStateChanged((user) => {
		onChange(user);
	});
};

export const loginDB = async ({ email, password }) => {
	try {
		const credentials = await signInWithEmailAndPassword(auth, email, password);
		return credentials.user;
	} catch (error) {
		throw error;
	}
};

export const updateUserName = async (name) => {
	const userNameRef = doc(db, 'users', auth.currentUser.uid);
	await setDoc(userNameRef, { name }, { merge: true })
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