//React imports
import { useState } from "react";

//Config imports
import { auth } from "../config/firebase";

//Libreries imports
import { createUserWithEmailAndPassword } from "firebase/auth";

function Auth() {
	//Consts declaration
	const loginInfo = {
		email: "",
		password: "",
	};

	//States declaration
	const [loginData, setLoginData] = useState(loginInfo);

	//Methods
	const signIn = (e) => {
		setLoginData();
	};

	return (
		<div>
			<input type="text" placeholder="Email" onChange={setLoginData} />
			<input
				type="password"
				placeholder="Password"
				autocomplete="off"
				onChange={setLoginData}
			/>
			<button>SIGN IN</button>
		</div>
	);
}

export default Auth;
