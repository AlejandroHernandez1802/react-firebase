import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDFxvfAyHHQn2BIdgS73-EzyRM9lnYbsCs",
	authDomain: "react-firebase-2c71a.firebaseapp.com",
	projectId: "react-firebase-2c71a",
	storageBucket: "react-firebase-2c71a.appspot.com",
	messagingSenderId: "888075611895",
	appId: "1:888075611895:web:2526cd3981bd05e6702df2",
	measurementId: "G-H5L8TJSM8W",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
