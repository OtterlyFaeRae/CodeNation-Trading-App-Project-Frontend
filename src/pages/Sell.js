import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import Select from 'react-select';
import styled from "styled-components";
import SellStock from "../components/SellStock"
import { getPrices } from "../utils/finnhub-fetch";

function Sell({ setIsLoggedIn, isLoggedIn, user, cookies, setUser, logOut }) {
	// dropdown menu source: https://appdividend.com/2022/03/12/react-dropdown-select/

	const [ stocks, setStocks ] = useState([]);
	const [ stockToSell, setStockToSell ] = useState("");
	const [ price, setPrice ] = useState("");

	useEffect( () => {
		if (user) {
			setStocks(user.stocks.map( (stock, i) => ({ label: stock.name, value: i })));
		};
	}, [user] );

	useEffect( () => {
		if (user) {
			setStocks(user.stocks.map( (stock, i) => ({ label: stock.name, value: i })));
		};
		// eslint-disable-next-line
	}, [] );

	const handleChange = (options) => {
		setStockToSell(options);
	};

	const searchStock = async () => {
		const sellPrice = await getPrices([stockToSell.label])
		console.log(stockToSell.label);
		console.log("sellprice = " + sellPrice);
		if (sellPrice) {
			setPrice( () => sellPrice );
		};
	};

	useEffect( () => {
		if (stockToSell) {
			searchStock();
		};
		// eslint-disable-next-line
	}, [stockToSell] );

	// dropdown styles
	const colourStyles = {
		control: (styles) => ({ ...styles, backgroundColor: "black", border: "solid #31356E 2px",        borderRadius: "10px" }),
		option: (styles, { isDisabled }) => {
			return {
				...styles,
				backgroundColor: isDisabled ? "red" : "black",
				color: "#FFF",
				cursor: isDisabled ? "not-allowed" : "default",
				border: '0 !important',
				// This line ^^ disables the blue border
				boxShadow: '0 !important',
				'&:hover': {
					backgroundColor: "white",
					color: "black",
				}
			};
		}
	};

	return (
		<>
			<Navbar 
				setIsLoggedIn={setIsLoggedIn} 
				isLoggedIn={isLoggedIn} 
				logOut={logOut}
				user={user}
			/>
			<Cont>
				<h2>Sell Stocks</h2>
				<br/>
				<p>Your Cash: ${user && user.cash.toFixed(2)}</p>
				<DropdownCont>
					<div className="row">
						<div className="col-md-4"></div>
							<div className="col-md-4">
								<Select 
									placeholder={<div>Select stock...</div>}
									onChange={ handleChange } 
									options={ stocks } 
									styles={colourStyles}
								/>
							</div>
						<div className="col-md-4"></div>
					</div>
				</DropdownCont>
				{
					stockToSell && price
					&&
					<SellStock price={price} stockToSell={stockToSell} user={user} cookies={cookies} setUser={setUser}/>
				}
			</Cont>
		</>
	);
}

export default Sell;

const Cont = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 5%;
`
const DropdownCont = styled.div`
	margin: 1rem;
	margin-top: 5%;
	width: 300px;
`