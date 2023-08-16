import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import RootNavigator from './src/routes/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const MainStack = createStackNavigator();


export default function App() {
	const [fontsLoaded] = useFonts({
		'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
		'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
		'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),

	});

	if (!fontsLoaded) {
		return null
	}

	return (
		<Provider store={store}>
			<RootNavigator />
		</Provider>
	);
}