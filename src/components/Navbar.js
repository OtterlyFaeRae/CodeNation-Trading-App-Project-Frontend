import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = ({ logOut, user }) => {
  const handleLogout = async () => {
    await logOut();
  };
  return (
    <Cont>
      <Left>
        <Link to="/">
          <Header1>TradeWarz</Header1>
        </Link>
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/Buy">Buy</Link>
        <Link to="/Sell">Sell</Link>
      </Left>
      <LinksCont>
        <p>Logged in as {user.username}</p>
        <p>Total funds: ${user && user.cash.toFixed(2)}</p>
        <Button2 onClick={handleLogout}>Logout</Button2>
      </LinksCont>
    </Cont>
  );
};

export default Navbar;

const Cont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom-style: solid;
  border-bottom-color: #5e5df0;
  border-bottom-width: 1px;
  background-color: #212121;
  
  /* shaun */
  
  box-shadow: 0 4px 2px -2px #5e5df0;


  padding-top: 20px;
  padding-bottom: 20px;
`;
const LinksCont = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3em;
  color: white;
  margin-left: 25px;
  list-style: none;
`;

const Header1 = styled.h1`
  text-decoration: none;
  font-size: 40px;
  text-align: center;
  color: white;
  margin-left: 30px;
`;
const Button2 = styled.button`
  background: #5e5df0;
  border-radius: 12px;
  box-sizing: border-box;
  color: #ffffff;
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
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 3em;
  font-weight: bold;
`;
