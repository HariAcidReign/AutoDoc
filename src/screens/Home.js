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
} from 'react-native';

import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

const gray = '#91A1BD';

export default class Home extends React.Component {
	render() {
		const Neumorph = ({ children, size, style }) => {
			return (
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
			);
		};

		return (
			<ImageBackground
				source={require('../images/back-img.png')}
				style={{ width: '100%', height: '100%' }}>
				{/* Use React Natigation package to navigate from this page to Doc Profile page. */}
				<View
					style={{
						flexDirection: 'row',
						marginTop: 40,
						alignItems: 'center',
						paddingHorizontal: 320,
					}}>
					<Neumorph size={50}>
						<TouchableOpacity>
							<Ionicons
								name="person-circle-outline"
								size={40}
								color={gray}></Ionicons>
						</TouchableOpacity>
					</Neumorph>
				</View>
				<View style={{ paddingHorizontal: 90, marginTop: 15 }}>
					<Text
						style={{
							fontSize: 35,
							color: '#6C7A93',
							fontWeight: '800',
							fontFamily: 'RobotoBold',
						}}>
						Patient Details
					</Text>
				</View>
				<View style={{ marginHorizontal: 32 }}>
					<TextInput
						style={styles.input}
						placeholder="Name"
						placeholderTextColor="#6C7A93"
					/>
				</View>
				<View style={{ marginHorizontal: 32 }}>
					<TextInput
						style={styles.input}
						placeholder="Age"
						placeholderTextColor="#6C7A93"
					/>
				</View>
				<View style={{ marginHorizontal: 32 }}>
					<TextInput
						style={styles.input}
						placeholder="Gender"
						placeholderTextColor="#6C7A93"
					/>
				</View>
				<View style={{ marginHorizontal: 32 }}>
					<TextInput
						style={styles.input}
						placeholder="Symptoms"
						placeholderTextColor="#6C7A93"
					/>
				</View>
				<View style={{ marginHorizontal: 32 }}>
					<TextInput
						style={styles.input}
						placeholder="Diagnosis"
						placeholderTextColor="#6C7A93"
					/>
				</View>
				<View style={{ marginHorizontal: 32 }}>
					<TextInput
						style={styles.input}
						placeholder="Medications"
						placeholderTextColor="#6C7A93"
					/>
				</View>
				<View style={styles.bottomContainer}>
					<Neumorph size={60}>
						<TouchableOpacity>
							<Ionicons name="mic-outline" size={30} color={gray}></Ionicons>
						</TouchableOpacity>
					</Neumorph>
					<Neumorph size={60}>
						<TouchableOpacity>
							<Ionicons name="logo-whatsapp" size={30} color={gray}></Ionicons>
						</TouchableOpacity>
					</Neumorph>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	input: {
		marginTop: 15,
		marginBottom: 10,
		height: 60,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: '#522289',
		borderRadius: 30,
		paddingHorizontal: 16,
		color: '#522289',
		fontWeight: '600',
	},

	inner: {
		backgroundColor: '#DEE9F7',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: '#E2ECFD',
		borderWidth: 1,
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
	bottomContainer: {
		marginTop: 5,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
});
