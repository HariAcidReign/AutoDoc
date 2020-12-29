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
import axios from 'axios';
import { Audio } from 'expo-av';
import * as SMS from 'expo-sms';
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';
import * as Print from 'expo-print';
import * as MediaLibrary from 'expo-media-library';
import * as Sharing from 'expo-sharing';

import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
const gray = '#91A1BD';

const recordingOptions = {
	// android not currently in use. Not getting results from speech to text with .m4a
	// but parameters are required
	android: {
		extension: '.m4a',
		outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
		audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
		sampleRate: 44100,
		numberOfChannels: 2,
		bitRate: 128000,
	},
	ios: {
		extension: '.wav',
		audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
		sampleRate: 44100,
		numberOfChannels: 1,
		bitRate: 128000,
		linearPCMBitDepth: 16,
		linearPCMIsBigEndian: false,
		linearPCMIsFloat: false,
	},
};
export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.recording = null;
		this.state = {
			isFetching: false,
			isRecording: false,
			// transcript: '',
			query: '',
			setQuery: '',
			pname: '',
			age: '',
			mobile: '',
			symptoms: '',
			diagnosis: '',
			medication: '',
		};
	}

	htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pdf Content</title>
        <style>
            body {
                font-size: 16px;
                color: rgb(255, 196, 0);
            }
            h1 {
                text-align: center;
			}
			@page { margin: 20px; }
        </style>
    </head>
    <body>
		<h1>Doctor Prescription</h1>
		<p> This is just a sample prescription template. Project is yet to be completed. </p>
    </body>
    </html>
	`;

	createPDF = async (htmlContent) => {
		try {
			const { uri } = await Print.printToFileAsync({ htmlContent });
			return uri;
		} catch (err) {
			console.error(err);
		}
	};

	createAndSavePDF = async (htmlContent) => {
		try {
			const { uri } = await Print.printToFileAsync({ htmlContent });
			if (Platform.OS === 'ios') {
				await Sharing.shareAsync(uri);
			} else {
				const permission = await MediaLibrary.requestPermissionsAsync();
				if (permission.granted) {
					await MediaLibrary.createAssetAsync(uri);
				}
			}
		} catch (error) {
			console.error(error);
		}
	};

	deleteRecordingFile = async () => {
		try {
			const info = await FileSystem.getInfoAsync(this.recording.getURI());
			await FileSystem.deleteAsync(info.uri);
		} catch (error) {
			console.log('There was an error deleting recorded file', error);
		}
	};

	getTranscription = async () => {
		this.setState({ isFetching: true });
		try {
			const info = await FileSystem.getInfoAsync(this.recording.getURI());
			console.log(`FILE INFO: ${JSON.stringify(info)}`);
			const uri = info.uri;
			const formData = new FormData();
			formData.append('file', {
				uri,
				type: 'audio/x-wav',
				// could be anything
				name: 'speech2text',
			});
			const response = await fetch('https://autodoctest.herokuapp.com/', {
				method: 'POST',
				body: formData,
			});
			const data = await response.json();

			console.log(data);
			this.setState({ pname: data.transcript });
			// setQuery(data.transcript);
		} catch (error) {
			console.log('There was an error', error);
			this.stopRecording();
			//this.resetRecording();
		}
		this.setState({ isFetching: false });
	};

	startRecording = async () => {
		const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
		if (status !== 'granted') return;

		this.setState({ isRecording: true });
		await Audio.setAudioModeAsync({
			allowsRecordingIOS: true,
			interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
			playsInSilentModeIOS: true,
			interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
			playThroughEarpieceAndroid: true,
		});
		const recording = new Audio.Recording();

		try {
			await recording.prepareToRecordAsync(recordingOptions);
			await recording.startAsync();
		} catch (error) {
			console.log(error);
			this.stopRecording();
		}

		this.recording = recording;
	};

	stopRecording = async () => {
		this.setState({ isRecording: false });
		try {
			await this.recording.stopAndUnloadAsync();
		} catch (error) {
			// Do nothing -- we are already unloaded.
		}
	};

	resetRecording = () => {
		this.deleteRecordingFile();
		this.recording = null;
	};

	handleOnPressOut = () => {
		this.stopRecording();
		this.getTranscription();
	};

	// handleQueryChange = (query) => {
	// 	setQuery(query);
	// };

	sendsms = async () => {
		const { result } = await SMS.sendSMSAsync(
			['+91 9489768715', this.state.mobile],
			'We Care Hospitals                    	' +
				'The patient ' +
				this.state.pname +
				', ' +
				this.state.age +
				' has symptoms of ' +
				this.state.symptoms +
				' and is diagnosed with ' +
				this.state.diagnosis +
				', and has been advised to take ' +
				this.state.medication +
				' by Dr. Hariharan, MD'
		);
	};

	render() {
		const { isRecording, transcript, isFetching } = this.state;
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
				<View
					style={{
						flexDirection: 'row',
						marginTop: 30,
						alignItems: 'center',
						paddingHorizontal: 340,
					}}>
					<Neumorph size={50}>
						<TouchableOpacity
							onPress={() => this.props.navigation.navigate('Profile')}>
							<Ionicons
								name="person-circle-outline"
								size={40}
								color={gray}></Ionicons>
						</TouchableOpacity>
					</Neumorph>
				</View>
				<View style={{ paddingHorizontal: 90, marginTop: 2 }}>
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
						onChangeText={(pname) => {
							//onChangeText has been changed to onCHange
							this.setState({ pname });
						}}
						value={this.state.pname}
						//onChange={this.handleQueryChange}
						placeholderTextColor="#6C7A93"
					/>
				</View>
				<View style={{ marginHorizontal: 32 }}>
					<TextInput
						style={styles.input}
						placeholder="Age"
						onChangeText={(age) => {
							this.setState({ age });
						}}
						value={this.state.age}
						placeholderTextColor="#6C7A93"
					/>
				</View>
				<View style={{ marginHorizontal: 32 }}>
					<TextInput
						style={styles.input}
						placeholder="Mobile Number"
						onChangeText={(mobile) => {
							this.setState({ mobile });
						}}
						value={this.state.mobile}
						placeholderTextColor="#6C7A93"
					/>
				</View>
				<View style={{ marginHorizontal: 32 }}>
					<TextInput
						style={styles.input}
						placeholder="Symptoms"
						onChangeText={(symptoms) => {
							this.setState({ symptoms });
						}}
						value={this.state.symptoms}
						placeholderTextColor="#6C7A93"
					/>
				</View>
				<View style={{ marginHorizontal: 32 }}>
					<TextInput
						style={styles.input}
						placeholder="Diagnosis"
						onChangeText={(diagnosis) => {
							this.setState({ diagnosis });
						}}
						value={this.state.diagnosis}
						placeholderTextColor="#6C7A93"
					/>
				</View>
				<View style={{ marginHorizontal: 32 }}>
					<TextInput
						style={styles.input}
						placeholder="Medications"
						onChangeText={(medication) => {
							this.setState({ medication });
						}}
						value={this.state.medication}
						placeholderTextColor="#6C7A93"
					/>
				</View>
				<View style={styles.bottomContainer}>
					<Neumorph size={60}>
						<TouchableOpacity
							onPressIn={this.startRecording}
							onPressOut={this.handleOnPressOut}>
							{/* When onPressIn change of button. Press button again to stop rec and change color back */}
							<Ionicons name="mic-outline" size={30} color={gray}></Ionicons>
						</TouchableOpacity>
					</Neumorph>
					<Neumorph size={60}>
						<TouchableOpacity onPressIn={this.sendsms}>
							<Ionicons
								name="chatbubble-ellipses-outline"
								size={30}
								color={gray}></Ionicons>
						</TouchableOpacity>
					</Neumorph>
					<Neumorph size={60}>
						<TouchableOpacity onPressIn={this.createAndSavePDF}>
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
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
});
