import "./App.css";
import { useState, useEffect } from "react";

// import all the pages here
import Login from "./pages/Login";
import Buy from "./pages/Buy";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";
import Sell from "./pages/Sell";
import Connections from "./pages/Connections";
import { useCookies } from 'react-cookie'

// react router dom modules
import { Routes, Route, BrowserRouter } from "react-router-dom";

// import components
import Protected from "./components/Protected";
import { checkToken } from "./utils";

// utils
import { logout } from "./utils"

import { createGlobalStyle } from "styled-components"

// ------------------------------------------------------------------- //
function App() {
	// login setup, determines if you are logged in, #TODO --> connect it with backend login function
	// state hooked variables
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const [cookies, setCookie] = useCookies(["token"]);
	const [ user, setUser ] = useState("");

	useEffect( () => {
		checkToken(cookies, setCookie, setUser, setIsLoggedIn) 
		// eslint-disable-next-line
	}, []);

	// ------------------------------------------------------------------- //
	// state altering functions
	const logIn = () => {
		setIsLoggedIn(true); // once logged just set setIsLoggedIn as false
	};
	const logOut = () => {
		logout(setUser, setCookie, setIsLoggedIn);
		setIsLoggedIn(false);
	};
	// ------------------------------------------------------------------- //
	// main render component
	return (
		<BrowserRouter>
			<GlobalStyle/>
			<Routes>
				<Route path="/login" element={
				<Login 
					isLoggedIn={isLoggedIn} 
					setIsLoggedIn={setIsLoggedIn} 
					login={logIn} 
					logOut={logOut}
					cookies={cookies}
					setCookie={setCookie}
					user={user}
					setUser={setUser}
				/>} />

				{/* ----------------- PROTECTED PAGES  ------------------------ */}

				{/* Landing Page */}
				<Route
					path="/"
					element={
						<Protected isLoggedIn={isLoggedIn}>
							<Landing 
								isLoggedIn={isLoggedIn}
								setIsLoggedIn={setIsLoggedIn}
								user={user}
								logOut={logOut}
							/>
						</Protected>
					}
				/>

				{/* Portfolio Page */}
				<Route
					path="/portfolio"
					element={
						<Protected 
						isLoggedIn={isLoggedIn}
						>
							<Portfolio 
								isLoggedIn={isLoggedIn}
								setIsLoggedIn={setIsLoggedIn}
								user={user}
								logOut={logOut}
							/>
						</Protected>
					}
				/>

				{/* Buy Page */}
				<Route
					path="/buy"
					element={
						<Protected isLoggedIn={isLoggedIn}>
							<Buy 
								isLoggedIn={isLoggedIn}
								setIsLoggedIn={setIsLoggedIn}
								user={user}
								cookies={cookies}
								logOut={logOut}
							/>
						</Protected>
					}
				/>

				{/* Sell Page */}
				<Route
					path="/sell"
					element={
						<Protected isLoggedIn={isLoggedIn}>
							<Sell 
								isLoggedIn={isLoggedIn}
								setIsLoggedIn={setIsLoggedIn}
								user={user}
								cookies={cookies}
								logOut={logOut}
								setUser={setUser}
							/>
						</Protected>
					}
				/>

				{/* For testing connections */}
				<Route
					path="/connections"
					element={
						<Protected 
						isLoggedIn={isLoggedIn}
						>
							<Connections 
								isLoggedIn={isLoggedIn}
								setIsLoggedIn={setIsLoggedIn}
								cookies={cookies}
								setCookie={setCookie}
								user={user}
								setUser={setUser}
								logOut={logOut}
							/>
						</Protected>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
	text-decoration: none;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', 'Oxygen',
	'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
	sans-serif;
	// dev tool
	/* outline: limegreen 1px solid; */
}
body {
	background-color: #212121;
	color: white;
}
`;