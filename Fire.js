import firebase from 'firebase';
import '@react-native-firebase/firestore';

const app = firebase.app();
export const db = app.firestore(); 

class Fire {
	constructor() {
		this.init();
		// this.checkAuth();
	}

	init = () => {
		if (!firebase.apps.length) {
			// this is anonymous authentication. Add OAuth
			firebase.initializeApp({
				apiKey: 'AIzaSyDtPLoNbRrgrLGQ4SXCcnqB3Rfd6KYl1a8',
				authDomain: 'chatmodule-app.firebaseapp.com',
				databaseURL: 'https://chatmodule-app.firebaseio.com',
				projectId: 'chatmodule-app',
				storageBucket: 'chatmodule-app.appspot.com',
				messagingSenderId: '54472305059',
				appId: '1:54472305059:web:f1d2c27cf6a86df74ad216',
				measurementId: 'G-WSGE135M2R',
			});
		}
	};

	checkAuth = () => {
		firebase.auth().onAuthStateChanged((user) => {
			if (!user) {
				// firebase.auth().signInAnonymously();
				firebase.auth().signInWithEmailAndPassword(user.email, user.password);
			}
		});
	};

	get = (callback) => {
		this.db.on('child_added', (snapshot) => callback(this.parse(snapshot)));
	};

	off() {
		this.db.off();
	}

	get db() {
		return firebase.database().ref('messages');  
	}

	get uid() {
		return (firebase.auth().currentUser || {}).uid;
	}

	get signOut(){
		return firebase.auth().signOut();
}

export default new Fire();
