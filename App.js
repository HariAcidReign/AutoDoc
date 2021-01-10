import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigations/Navigator';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
//import AppLoading from 'expo-app-loading';

import * as Sentry from 'sentry-expo';

Sentry.init({
	dsn:
		'https://02bea15d1e064d8480a5e8370c150700@o496016.ingest.sentry.io/5569696',
	enableInExpoDevelopment: true,
	debug: true, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
});
export default class App extends React.Component {
	state = {
		isFontLoaded: false,
		// isLoggedIn: false,
	};
	async componentDidMount() {
		await Font.loadAsync({
			RobotoBold: require('./src/fonts/Roboto-Bold.ttf'),
			RobotoRegular: require('./src/fonts/Roboto-Regular.ttf'),
		});
		this.setState({ isFontLoaded: true });

	}
	render() {
		return this.state.isFontLoaded === true ? <AppNavigator /> : <AppLoading />;
	}
}
