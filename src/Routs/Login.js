import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    function HandleSubmit(){
        // axios.post( adress? , {email, password})
        // .then(e => console.log(e))
        // .catch(error => console.log(error))
    }

	return (
		<LoginPage>
			<h1> My Wallet </h1>
			<LoginForm onSubmit={HandleSubmit}>
				<input 
                    required 
                    placeholder="Email" 
                    name="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
				<input 
                    required 
                    placeholder="Password" 
                    name="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
				<button type="submit">Log in</button>
			</LoginForm>
			<p onClick={() => navigate("/registration")}>First Time? Signup!</p>
		</LoginPage>
	);
}

const LoginPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100vh;
	background-color: var(--darkmode);
	color: white;
    font-size: 20px;
    h1 {
        font-size: 30px;
        padding: 15px 0;
    }
    p {
        font-size: 20px;
        margin: 15px 0;
        cursor: pointer;
    }
`;
const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	input {
		width: 326px;
		height: 58px;
		border-radius: 5px;
		background-color: lightgray;
		margin: 5px 0;
        padding: 10px;
        font-size: 20px;
        ::placeholder {
            font-size: 20px;
        }
	}
	button {
		width: 326px;
		height: 58px;
		border-radius: 5px;
		background-color: gray;
		margin: 5px 0;
        font-size: 20px;
        color: var(--darkmode);
        :hover {
            background-color: lightgray;
        }
	}
`;
