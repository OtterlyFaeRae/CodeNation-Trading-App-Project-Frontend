import React, { useEffect } from "react";
import Navbar from "../components/Navbar"
import PortfolioItem from "../components/PortfolioItem"
import { useState } from "react"
import styled from "styled-components";
import background from "../images/stocks3.jpg"
import { getPrices } from "../utils/finnhub-fetch"

function Portfolio({ setIsLoggedIn, isLoggedIn, user, logOut }) {

	const [ stocks, setStocks ] = useState([])
	const [ prices, setPrices ] = useState("prices")
	const [ total, setTotal ] = useState(0)

	useEffect( () => {
		if (user) {
			setStocks(user.stocks)
		}
	}, [user])

	const getPortfolioPrices = async () => {
		const stockSymbols = stocks.map( x => x.name )
		const result = await getPrices(stockSymbols)
		setPrices(result)
	}

	useEffect( () => {
		getPortfolioPrices()
		// eslint-disable-next-line
	}, [stocks])

	const getTotal = () => {
		// map though prices and stocks and make a new array of totals 
		// use reduce to sum the array
		// add users cash
		const totalPrices = stocks.map( (stock, i) => 
			stocks[i].number * prices[i]
		)
		const stockTotals =  totalPrices.reduce( (prev, curr) => prev + curr, 0)
		const result = user.cash + stockTotals
		setTotal(result)
	}

	useEffect( () => {
		getTotal()
		// eslint-disable-next-line
	}, [prices])
	
	return (
		<Cont background={background}>
			<Navbar 
				setIsLoggedIn={setIsLoggedIn} 
				isLoggedIn={isLoggedIn} 
				logOut={logOut}
				user={user}
			/>
			<Content>
			<Title>Portfolio</Title>
			<TableCont>
				<PortTable>
					<PortTHead>
						<TR>
							<TH>
								Stock 
							</TH>
							<TH>
								Quantity
							</TH>
							<TH>
								Value per share
							</TH>
							<TH>
								Total value
							</TH>
						</TR>
					</PortTHead>
					<PortTBody>
					{
						stocks.map( (stock, i) => (
							<PortfolioItem 
								key={i}
								index={i}
								name={stock.symbol} 
								symbol={stock.name} 
								price={prices[i]} 
								number={stock.number}
							/>
						))
					}
					{/* cash row */}
					<tr>
						<TD>
						
						</TD>
						<TD>
							
						</TD>
						<EndBox colour={'#222224'}>
							Cash:
						</EndBox>
						<EndBox colour={'#222224'}>
							{
								user
								&&
								<p>${user.cash.toFixed(2)}</p>
							}
						</EndBox>
					</tr>
					{/* total row */}
					<tr>
						<TD>
							
						</TD>
						<TD>
							
						</TD>
						<EndBox colour={'#28292e'}>
							Total:
						</EndBox>
						<EndBox colour={'#28292e'}>
							<p>${total.toFixed(2)}</p>
						</EndBox>
					</tr>
					</PortTBody>
				</PortTable>
			</TableCont>
			</Content>
		</Cont>
	);
}

export default Portfolio;

const Title = styled.h2`
	padding-top: 5%;
`

const Cont = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3em;
	height: 100vh;
	background-image: url(${props => props.background});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	gap: 100px;
`

const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 20px;
padding-bottom: 100px;
padding-right: 100px;
padding-left: 100px;
border-radius: 10px;
border: solid;
background-color: #212121;
border-color: #5E5DF0;
border-width: 1.5px;
opacity: 1;
gap: 40px;
max-width: 75%;
`

const TableCont = styled.div`
	display: table;
`

const PortTable = styled.table`
	border-collapse: collapse;
	color: white;
	/* shaun */
	/* box-shadow: 0px 1px 5px white; */
`

const PortTHead = styled.thead`
	background: #5e5df0;
	padding: auto;
`

const TH = styled.th`
	min-width: 150px;

	/* shaun */

	padding: 15px;
`

const TR = styled.tr`
	text-align: center;
`

const TD = styled.td`
	
	min-width: 70px;
`

const PortTBody = styled.tbody`
	text-align: center;
`

const EndBox = styled.td`
	background: ${props => props.colour};
	width: 30%;
	min-width: 70px;

	/* shaun */
	padding: 0.6rem 2rem;

    /* shaun */
    &:hover {
		background-color: #31356e;
        cursor: pointer;
	}
`