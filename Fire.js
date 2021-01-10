import firebase from 'firebase';

class Fire {
	constructor() {
		this.init();
	}

	init = () => {
		if (!firebase.apps.length) {
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

	get = (callback) => {
		this.db.on('child_added', (snapshot) => callback(this.parse(snapshot)));
	};

	off() {
		this.db.off();
	}

	get uid() {
		return (firebase.auth().currentUser || {}).uid;
	}
	
}

export default new Fire();
