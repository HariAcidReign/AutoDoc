import React, { Component } from "react";
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
} from "react-native";

import firebase from "firebase";
import { SafeAreaView } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

export default class SignUp extends Component {
	state = {
		name: "",
		email: "",
		password: "",
		errorMessage: null,
	};

	// continue = () => {
	// 	this.props.navigation.navigate("Chat", { name: this.state.name });
	// };

	// We are assigning email and pword to user now. IN future, figure out how to add dp image, username too.
	handleSignUp = () => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(() =>
				this.props.navigation.navigate("Chat", { name: this.state.name })
			)
			.catch((error) => this.setState({ errorMessage: error.message }));
	};
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<StatusBar barStyle="light-content" backgroundColor="#468189" />
				<ScrollView
					style={{ flex: 1 }}
					contentContainerStyle={styles.scrollview}
					scrollEnabled={true}
				>
					<View>
						<View style={styles.circle} />
						<View style={{ marginTop: 64 }}>
							<Image
								source={require("../assets/message.png")}
								style={{ width: 100, height: 100, alignSelf: "center" }}
							/>
						</View>

						<View style={{ marginHorizontal: 149 }}>
							<Text style={styles.header}>Sign Up</Text>
							{this.state.errorMessage && (
								<Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
							)}
						</View>

						<View style={{ marginHorizontal: 32 }}>
							<Text style={styles.header}>Username</Text>
							<TextInput
								style={styles.input}
								placeholder="something quirky"
								onChangeText={(name) => {
									this.setState({ name });
								}}
								value={this.state.name}
							/>
							<Text style={styles.header}>Email</Text>
							<TextInput
								style={styles.input}
								autoCapitalize="none"
								placeholder="happy@gmail.com"
								onChangeText={(email) => {
									this.setState({ email });
								}}
								value={this.state.email}
							/>
							<Text style={styles.header}>Password</Text>
							<TextInput
								secureTextEntry
								style={styles.input}
								placeholder="something you won't forget"
								onChangeText={(password) => {
									this.setState({ password });
								}}
								value={this.state.password}
							/>
							<Button
								title="Have an account already? Login"
								onPress={() => this.props.navigation.navigate("Login")}
							/>
							<View
								style={{
									alignItems: "flex-end",
									marginTop: 10,
									marginBottom: 10,
								}}
							>
								<TouchableOpacity
									style={styles.continue}
									onPress={this.handleSignUp}
								>
									<Ionicons
										name="md-arrow-round-forward"
										size={24}
										color="#FFF"
									/>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
// IN future, onPress should continue after checking credentials with database

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: "center",
		// alignItems: "center",
		backgroundColor: "#F4F5F7",
	},
	circle: {
		width: 500,
		height: 500,
		borderRadius: 500 / 2,
		backgroundColor: "#FFF",
		position: "absolute",
		left: -120,
		top: -20,
	},
	header: {
		fontWeight: "800",
		fontSize: 30,
		color: "#514E5A",
		marginTop: 32,
	},
	input: {
		marginTop: 15,
		marginBottom: 10,
		height: 50,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: "#BAB7C3",
		borderRadius: 30,
		paddingHorizontal: 16,
		color: "#514E5A",
		fontWeight: "600",
	},
	continue: {
		width: 70,
		height: 70,
		borderRadius: 70 / 2,
		backgroundColor: "#9075E3",
		alignItems: "center",
		justifyContent: "center",
	},
});
