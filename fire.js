import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

const app = firebase.app();// edited by Harish 
export const db = app.firestore(); // edited by Harish


class Fire {
	constructor() {
		this.init();
		// this.checkAuth();
	}

	init = () => {
		if (!firebase.apps.length) {
			// this is anonymous authentication. Add OAuth
			firebase.initializeApp({
				apiKey: "AIzaSyDtPLoNbRrgrLGQ4SXCcnqB3Rfd6KYl1a8",
				authDomain: "chatmodule-app.firebaseapp.com",
				databaseURL: "https://chatmodule-app.firebaseio.com",
				projectId: "chatmodule-app",
				storageBucket: "chatmodule-app.appspot.com",
				messagingSenderId: "54472305059",
				appId: "1:54472305059:web:f1d2c27cf6a86df74ad216",
				measurementId: "G-WSGE135M2R",
			});
		}
	};

 checkAuth = () => {
firebase.auth().onAuthStateChanged((user) => {
if (!user) {
	firebase.auth().signInAnonymously();
	firebase.auth().signInWithEmailAndPassword(user.email, user.password);
	// 		}
	// 	});
	// };

	send = (messages) => {
		messages.forEach((item) => {
			const message = {
				text: item.text,
				timestamp: firebase.database.ServerValue.TIMESTAMP,
				user: item.user,
			};

			this.db.push(message);
		});
	};

	parse = (message) => {
		const { user, text, timestamp } = message.val();
		const { key: _id } = message;
		const createdAt = new Date(timestamp);

		return {
			_id,
			createdAt,
			text,
			user,
		};
	};

	get = (callback) => {
		this.db.on("child_added", (snapshot) => callback(this.parse(snapshot)));
	};

	off() {
		this.db.off();
	}

	get db() {
		return firebase.database().ref("messages");
	}

	get uid() {
		return (firebase.auth().currentUser || {}).uid;
	}
	
	signOut: () => {
  		return firebase.auth().signOut()
}
}

export default new Fire();
