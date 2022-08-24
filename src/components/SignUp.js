import styled from "styled-components";
import { useState } from "react";
import { signUp } from "../utils";

const SignUp = ({toggle, setUser, setCookie, setIsLoggedIn}) => {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const submitHandler = async (event) => {
    event.preventDefault()
    await signUp(username, email, password, setUser, setCookie, setIsLoggedIn);
  };
  
  return (
    <Cont>
      <Header2>Sign Up</Header2>
      <Form onSubmit={submitHandler}>
        <Input placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
        <Input placeholder="Email" value={email}onChange={(event) => setEmail(event.target.value)}/>
        <Input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
        <Button2 className="submit" type="submit">Sign Up</Button2>
      </Form>
      {/* Display below if sign up fails */}
      <p>The username or email has already been registered</p>
      <p>Already have an account?</p>
      <Button2 onClick = {() => toggle(false)}>Click here to login</Button2>
    </Cont>
  );
};

export default SignUp;

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