

/*export default {
	FirebaseConfig: {
		apiKey: "AIzaSyDFL5WPHTUUFDQd-VODwnoYLSTL_oSwDho",
    authDomain: "skipped-app.firebaseapp.com",
    databaseURL: "https://skipped-app.firebaseio.com",
    projectId: "skipped-app",
    storageBucket: "skipped-app.appspot.com",
    messagingSenderId: "235467974086"
	}
} */

import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyDFL5WPHTUUFDQd-VODwnoYLSTL_oSwDho',
  authDomain: 'skipped-app.firebaseapp.com',
  databaseURL: 'https://skipped-app.firebaseio.com',
  projectId: 'skipped-app',
  storageBucket: 'skipped-app.appspot.com',
  messagingSenderId: '235467974086'
};
let app = Firebase.initializeApp(config);
export const db = app.database();
