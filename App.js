import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import React from 'react';
import CoursesList from './src/courseList';

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
			<CoursesList />
		</>
	);
}