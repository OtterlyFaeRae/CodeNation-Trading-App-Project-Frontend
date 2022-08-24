import React from "react";
import Navbar from "../components/Navbar"
import styled from "styled-components";
import background from "../images/stocks3.jpg"

function Landing({ setIsLoggedIn, isLoggedIn, logOut, user }) {
	return (
		<Cont background={background}>
			<Navbar 
				setIsLoggedIn={setIsLoggedIn} 
				isLoggedIn={isLoggedIn} 
				logOut={logOut}
        user={user}
			/>
			<Content>
				<Header1>Welcome to TradeWarZ</Header1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus quam, eleifend nec tincidunt ut, cursus vel risus. Sed scelerisque congue efficitur. Quisque ultricies nisi vitae dolor sagittis sollicitudin. Sed dignissim porttitor mattis. Aliquam feugiat, nunc quis aliquam vehicula, tellus nisi auctor ex, sit amet volutpat magna justo sed leo. Quisque in libero ipsum. Sed ut euismod turpis. Proin dictum porta dui, eget malesuada risus malesuada in. Duis eget auctor lacus. Nunc eleifend interdum sagittis. Etiam fermentum porttitor sagittis.
				</p>
				<p>Above would be an intro and some instructions for how the app works</p>
				<p>Final Code Nation project by Liam, Mahed, Mohammed, Saoirse and Shaun</p>
				<Button2>Buy some stocks!</Button2>
			</Content>
		</Cont>
	);
}

export default Landing;

const Cont =  styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: url(${props => props.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  gap: 100px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 30px;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 10px;
  border: solid;
  background-color: #212121;
  border-color: #5E5DF0;
  border-width: 1.5px;
  opacity: 0.9;
  gap: 25px;
  max-width: 50%;
`
  const Header1 =  styled.h1`
	font-size: 60px;
	text-align: center;
`

const Button2 = styled.button`
  background: #5E5DF0;
  margin-top: 5px;
  border-radius: 12px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 28px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
  margin-right: 15px;
`