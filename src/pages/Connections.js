import React from "react";
import Navbar from "../components/Navbar"
import { signUp, login, checkToken, addStocks, updateCash } from "../utils"

function Connections({ setIsLoggedIn, isLoggedIn, setUser, setCookie, cookies,
    logOut, user }) {
    const handleSignUp  = async () => {
        // recieve user and token.  set user set token.
        await signUp("test7", "email7", "password7", setUser, setCookie, setIsLoggedIn)
    }
    const handleLogin  = async () => {
        await login("Red", "Red", setUser, setCookie, setIsLoggedIn)
    }
    const handleCheckCookies  = async () => {
        await checkToken(cookies, setCookie, setUser, setIsLoggedIn)
    }
    const handleAddStocks  = async () => {
        await addStocks("GOOGL", "GOOGL", 1, cookies, setUser)
    }
    const handleUpdateCash = async () => {
        // note: change controller to just check token and return the user.
        await updateCash(9000, setUser, cookies)
    }

	return (
		<div>
			<Navbar 
				setIsLoggedIn={setIsLoggedIn} 
				isLoggedIn={isLoggedIn} 
                logOut={logOut}
                user={user}
			/>
			<h2>This page is for testing connections</h2>

            <button onClick={handleSignUp}>Sign up</button>
            <button onClick={handleLogin}>login</button>
            <button onClick={handleCheckCookies}>checkToken</button>
            <button onClick={handleAddStocks}>addStocks</button>
            <button onClick={handleUpdateCash}>updateCash</button>
            <button>delete user</button>
            <button>logout (maybe)</button>
    
		</div>
	);
}

export default Connections;