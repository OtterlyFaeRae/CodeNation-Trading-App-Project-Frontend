import { useState } from "react";
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
import { addStocks, updateCash } from "../utils";
import Modal from 'react-modal';
import "../Modal.css"
import noMoney from "../images/no money.png"
import yesMoney from "../images/cashInHand.png"

const BuyStock = ({ price, stockToBuy, user, cookies, setUser }) => {

    const [ input, setInput ] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [purchaseSuccesful, setPurchaseSuccesful] = useState(false);

    const navigate = useNavigate();

    const handleOnChange = async e => {
        setInput(e.target.value);
    };

    const handleKeyDown = async e => {
        if (e.key === "Enter") {
            await buyStock();
        };
    };

	const handleClick = async () => {
        await buyStock();
    };

    const buyStock = async () => {
        if (input) {
            const total = price * input
            if (total > user.cash) {
                isModalOpen();
            } else {
                await addStocks( stockToBuy, "stock name", parseInt(input), cookies, setUser)
                await updateCash( user.cash - total, setUser, cookies )
                setPurchaseSuccesful(true)
                isModalOpen()
            };
            setInput("");
        };
    };

    const refreshPage = () => {
        window.location.reload(false);
    };

    //MODAL FUNCTIONS
    const closeModalUnsuccessful = () => {
        closeModal()
        setInput("")
    }

    const closeModalSuccessful = () => {
        navigate("/portfolio")
        refreshPage()
    }

    const isModalOpen = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    Modal.setAppElement('#root');

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: "auto",
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: "#222224"
        },
    };
    return (
        <Cont>
        {
            stockToBuy !== "No stock found."
            ?
            <StockCont>
                <TopCont>
                        <TopSubCont>
                            <SymbolCont>
                                <p>Symbol:</p>
                                <SymbolBox>{stockToBuy}</SymbolBox>
                            </SymbolCont>
                            <OwnedStockBox>
                                <p>Your stocks:</p>
                                <p>{user.stocks.find(x => x.name === stockToBuy) ?  user.stocks.find(x => x.name === stockToBuy).number : 'None.'}</p>
                            </OwnedStockBox>
                        </TopSubCont>
                            <ValBox>
                                <h2>${Math.round(price*100)/100}</h2>
                            </ValBox>
                    </TopCont>
                <BottomCont>
                    <input type="number" placeholder="Quantity" onKeyDown={handleKeyDown} onChange={handleOnChange} value={input} />
                    <button onClick={handleClick} placeholder="buy">Buy</button>
                </BottomCont>
            </StockCont>
            :
            <StockNotFoundCont>
                <p>No stock found.</p>
            </StockNotFoundCont>
        }
        <Modal
        isOpen={modalOpen}
        style={customStyles}
        closeTimeoutMS={200}
        >
            <div>
                { !purchaseSuccesful
                ?
                <div>
                    <h1 className="Insufficent">INSUFFICIENT FUNDS</h1>

                    <img className="noMoney" src={noMoney} alt=""/>

                    <h2 className="valid-ammount">PLEASE ENTER A VALID AMMOUNT</h2>
                    <button className="closeUnsuccessful" onClick={closeModalUnsuccessful}>CLOSE</button>
                </div>
                :
                <div>
                    <h1 className="Insufficent">PURCHASE SUCCESSFUL</h1>

                    <img className="yesMoney" src={yesMoney} alt=""/>

                    <button className="closeSuccessful" onClick={closeModalSuccessful}>CLOSE</button>
                </div>
                };
            </div>
        </Modal>
    </Cont>
    );
};

export default BuyStock

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
    min-height: 150px;
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

const SymbolBox = styled.p`
    padding-left: 5px;
`

const OwnedStockBox = styled.div`
    display:flex;
`

const ValBox = styled.div`
    padding-left: 25%;
`

const BottomCont = styled.div`
	display: flex;
`
const StockNotFoundCont = styled.div`
    margin: 4rem 7rem;
`