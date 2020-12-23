import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
	View,
	Text,
	Image,
	ImageBackground,
	TextInput,
	StyleSheet,
	Button,
	SafeAreaView,
	Keyboard,
	StatusBar,
} from 'react-native';
import Login from './LoginScreen';

import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

const gray = '#91A1BD';

export default class Profile extends React.Component {
	handleSignout = async () => {
		try {
			await firebase.auth().signOut();
			this.props.navigation.navigate('Login');
		} catch (e) {
			console.log(e);
		}
	};

	render() {
		const Neumorph = ({ children, size, style }) => {
			return (
				<SafeAreaView>
					<View style={styles.topShadow}>
						<View style={styles.bottomShadow}>
							<View
								style={[
									styles.inner,
									{
										width: size || 40,
										height: size || 40,
										borderRadius: size / 2 || 40 / 2,
									},
									style,
								]}>
								{children}
							</View>
						</View>
					</View>
				</SafeAreaView>
			);
		};

		return (
			<ImageBackground
				source={require('../images/back-img.png')}
				style={{ width: '100%', height: '100%' }}>
				<View style={{ alignSelf: 'center' }}>
					<View style={styles.profArtContainer}>
						<Neumorph>
							<Image
								source={require('../images/doctor-profile.png')}
								style={styles.profArt}
							/>
						</Neumorph>
					</View>

					<View style={styles.infoContainer}>
						<Text
							style={[
								styles.text,
								{ fontWeight: '400', fontSize: 36, marginBottom: 25 },
							]}>
							Doctor Details
						</Text>
						<Text style={[styles.text, { fontWeight: '300', fontSize: 30 }]}>
							Dr. Mark Lee
						</Text>
						<Text style={[styles.text, { fontWeight: '200', fontSize: 25 }]}>
							We Care Hospitals
						</Text>
						<Text style={[styles.text, { fontWeight: '200', fontSize: 20 }]}>
							15, Fleur Street, Ho Chi Min City, Vietnam
						</Text>
					</View>
					<View style={styles.bottomContainer}>
						<Neumorph size={100}>
							<TouchableOpacity>
								<Button
									title="Sign Out"
									style={styles.buttonSty}
									onPress={this.handleSignout}
								/>
								{/* If you want to change buttoncolor later, define buttonSty */}
							</TouchableOpacity>
						</Neumorph>
					</View>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	text: {
		fontFamily: 'HelveticaNeue',
		color: '#52575D',
	},
	image: {
		flex: 1,
		width: undefined,
		height: undefined,
	},
	titleBar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 24,
		marginHorizontal: 16,
	},
	infoContainer: {
		marginTop: 300,
		alignSelf: 'center',
		alignItems: 'center',
	},
	topShadow: {
		shadowOffset: {
			width: -6,
			height: -6,
		},
		shadowOpacity: 1,
		shadowRadius: 6,
		shadowColor: '#FBFFFF',
	},
	bottomShadow: {
		shadowOffset: {
			width: 6,
			height: 6,
		},
		shadowOpacity: 1,
		shadowRadius: 6,
		shadowColor: '#B7C4DD',
	},
	profArtContainer: {
		marginVertical: 40,
		marginHorizontal: 30,
	},
	profArt: {
		width: 300,
		height: 300,
		borderRadius: 100,
		borderColor: '#D7E1F3',
		borderWidth: 10,
	},
	bottomContainer: {
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
});
