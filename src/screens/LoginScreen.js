import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	Button,
	TouchableOpacity,
	Image,
	ScrollView,
	TouchableHighlight,
	StatusBar,
} from 'react-native';

import firebase from 'firebase';
import { SafeAreaView } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Fire from '../../Fire';

export default class LoginScreen extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		errorMessage: null,
	};

	handleLogin = () => {
		const { email, password } = this.state;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			// After merging, button will navigate to Dash.js. If we used navigate instead of
			// replace then it will take us back to login. Dont want that.
			//Won't allow login pg to be accessed
			.then(() => this.props.navigation.replace('Home'))
			.catch((error) => this.setState({ errorMessage: error.message }));
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<StatusBar barStyle="light-content" backgroundColor="#468189" />
				<ScrollView
					style={{ flex: 1 }}
					contentContainerStyle={styles.scrollview}
					scrollEnabled={true}>
					<View>
						<View style={styles.circle} />
						<View style={{ marginTop: 30 }}>
							<Image
								source={require('../images/message.png')}
								style={{ width: 50, height: 50, alignSelf: 'center' }}
							/>
						</View>

						<View style={{ marginHorizontal: 160 }}>
							<Text style={styles.header}>Login</Text>
							{this.state.errorMessage && (
								<Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
							)}
						</View>

						<View style={{ marginHorizontal: 32 }}>
							<Text style={styles.header}>Username</Text>
							<TextInput
								style={styles.input}
								placeholder="Enter Username"
								onChangeText={(name) => {
									this.setState({ name });
								}}
								value={this.state.name}
							/>
							<Text style={styles.header}>Email</Text>
							<TextInput
								style={styles.input}
								autoCapitalize="none"
								placeholder="Enter email-id"
								onChangeText={(email) => {
									this.setState({ email });
								}}
								value={this.state.email}
							/>
							<Text style={styles.header}>Password</Text>
							<TextInput
								secureTextEntry
								style={styles.input}
								placeholder="Enter password"
								onChangeText={(password) => {
									this.setState({ password });
								}}
								value={this.state.password}
							/>

							<View
								style={{
									alignItems: 'flex-end',
									marginTop: 10,
									marginBottom: 10,
								}}>
								<TouchableOpacity
									style={styles.continue}
									onPress={this.handleLogin}>
									<Ionicons
										name="arrow-forward-outline"
										size={30}
										color="#FFF"></Ionicons>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F4F5F7',
	},
	circle: {
		width: 500,
		height: 500,
		borderRadius: 500 / 2,
		backgroundColor: '#FFF',
		position: 'absolute',
		left: -120,
		top: -20,
	},
	header: {
		fontWeight: '800',
		fontSize: 30,
		color: '#514E5A',
		marginTop: 32,
	},
	input: {
		marginTop: 15,
		marginBottom: 10,
		height: 50,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: '#BAB7C3',
		borderRadius: 30,
		paddingHorizontal: 16,
		color: '#514E5A',
		fontWeight: '600',
	},
	continue: {
		width: 70,
		height: 70,
		borderRadius: 70 / 2,
		backgroundColor: '#9075E3',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
