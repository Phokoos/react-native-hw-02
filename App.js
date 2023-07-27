import { useFonts } from 'expo-font';
import React from 'react';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen';

export default function App() {
	const [fontsLoaded] = useFonts({
		'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
		'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
	});

	if (!fontsLoaded) {
		return null
	}

	return (
		<>
			<RegistrationScreen />
			{/* <LoginScreen /> */}
		</>
	);
}