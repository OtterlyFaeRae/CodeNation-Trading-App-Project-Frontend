import { useState } from "react";
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
import { addStocks, updateCash } from "../utils";

const SellStock = ({ price, stockToSell, user, cookies, setUser }) => {

    const [ input, setInput ] = useState("");
    const navigate = useNavigate();

    const handleOnChange = async e => {
        setInput(e.target.value);
    };

    const handleKeyDown = async e => {
        if (e.key === "Enter") {
            await sellStock();
        };
    };

    const handleClick = async () => {
        await sellStock();
    };

    const sellStock = async () => {
        if (input) {
            const total = price * input 
            if (input > user.stocks.find(x => x.name === stockToSell.label).number) {
                alert("Insufficient stocks.");
                setInput("");
            } else {
                await addStocks( stockToSell.label, "stock name", -1 * parseInt(input), cookies, setUser);
                await updateCash( user.cash + total, setUser, cookies );
                alert("Sale sucessful.");
                navigate("/portfolio");
                refreshPage(); // update user stocks
            };
        };
    };

    const refreshPage = () => {
        window.location.reload(false);
    };

    return (
        <>
        <Cont>
            {
                stockToSell 
                &&
                <StockCont>
                    <TopCont>
                        <TopSubCont>
                            <SymbolCont>
                                <p>Symbol:</p>
                                <SymbolBox>{stockToSell.label}</SymbolBox>
                            </SymbolCont>
                            <OwnedStockBox>
                                <p>Your stocks:</p>
                                <p>{user.stocks.find(x => x.name === stockToSell) ?  user.stocks.find(x => x.name === stockToSell).number : 'None.'}</p>
                            </OwnedStockBox>
                        </TopSubCont>
                            <ValBox>
                                <h2>${Math.round(price*100)/100}</h2>
                            </ValBox>
                    </TopCont>
                    <BottomCont>
                        <label>
                            Number: 
                            <Input type="number" placeholder="Quantity" onKeyDown={handleKeyDown} onChange={handleOnChange} value={input}/>
                        </label>
                        <button placeholder="Sell" onClick={handleClick}>Sell</button>
                    </BottomCont>
                </StockCont>
            }
        </Cont>        
        </>
    )
}

export default SellStock

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
const StockCont = styled.div`
	display: flex;
    flex-direction: column;
    border: 2px solid #31356E;
    background: black;
    min-height: 100px;
    min-width: 300px;
    padding-top: 1%;
    padding-left: 1%;
    padding-right: 1%;
`

const TopCont = styled.div`
    display:flex;
    padding-bottom: 30px;
`

const TopSubCont = styled.div`
    display:flex;
    flex-direction: column; 
`

const SymbolCont = styled.div`
	display: flex;
    padding-bottom: 10px;
`

const OwnedStockBox = styled.div`
    display:flex;
`

const ValBox = styled.div`
    padding-left: 25%;
`

const SymbolBox = styled.p`
    padding-left: 5px;
`

const BottomCont = styled.div`
	display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`

const Input = styled.input`
    margin-left: 20%;
    width: 15%;
`