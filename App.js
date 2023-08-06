import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import React from 'react';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen';
import PostsScreen from './src/Screens/PostsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/Screens/Home';

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
		<NavigationContainer>
			<MainStack.Navigator initialRouteName="Login">
				<MainStack.Screen name="Registration" component={RegistrationScreen}
					options={{
						headerStyle: {
							height: 0
						}
					}} />
				<MainStack.Screen name="Login" component={LoginScreen}
					options={{
						headerStyle: {
							height: 0
						}
					}} />
				<MainStack.Screen name="Home" component={Home}
					options={{ headerShown: false }}
				/>
			</MainStack.Navigator>
		</NavigationContainer>
	);
}