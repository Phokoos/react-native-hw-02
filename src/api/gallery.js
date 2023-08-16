import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from './config';

export const writeDataToFirestore = async () => {
	try {
		const docRef = await addDoc(collection(db, 'gallery'), {
			photoUrl: 'yes',
			comments: 148,
			name: 'Ліс',
			likes: 852
		});
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
		throw e;
	}
};

export const getDataFromFirestore = async () => {
	try {
		const snapshot = await getDocs(collection(db, 'gallery'));
		const array = [];

		snapshot.forEach((doc) => array.push(doc.data()));

		return array
	} catch (error) {
		console.log(error);
		throw error;
	}
};

