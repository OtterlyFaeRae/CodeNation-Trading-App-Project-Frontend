import styled from "styled-components"
const {useState} = require('react')
const {login} = require('../utils')

const LoginForm = ({toggle, setUser, changeToken, setCookie, setIsLoggedIn}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(username, password, setUser, setCookie, setIsLoggedIn)
  }

  return (
    <Cont>
      <Header2>Login</Header2>
      <Form onSubmit={handleSubmit}>
          <Input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username'/>
          <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
        <Button2 className="submit" type="submit">Log In</Button2>
      </Form>
      {/* set this to appear if login fails */}
      <p>Incorrect username or password</p>
      <p>Not got an account?</p>
      <Button2 onClick = {() => toggle(true)}>Sign Up</Button2>
    </Cont>
  );
};

export default LoginForm;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 30px;
  border-radius: 10px;
  border: solid;
  background-color: #212121;
  border-color: #5E5DF0;
  border-width: 1.5px;
  opacity: 0.9;
  gap: 25px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Input = styled.input`
  border-style: solid;
  border-color: white;
  border-width: 1px;
  background-color: #212121;
  border-radius: 5px;
  padding: 5px;
  font-size: 20px;
  outline: none;
  caret-color: white;
  color: white;
  max-width: 220px;
  margin-bottom: 15px;
  margin-left: 125px;
  margin-right: 125px;
  &:focus {
    border-color: #5E5DF0;
  }
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
`
const Header2 = styled.h2`
  font-size: 30px;
`