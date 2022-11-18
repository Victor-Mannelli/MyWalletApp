import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Slide, toast } from "react-toastify";
import styled from "styled-components";
import axios from "axios";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	function HandleSubmit(e) {
		e.preventDefault();
		const user = { email, password };
		axios
			.post("http://localhost:5000/login", user)
			.then((e) => {
				toast.success(e.data.message, {
					position: "top-center",
					theme: "dark",
					autoClose: 500,
					transition: Slide
				});
				localStorage.setItem("token", e.data.token);
				navigate("/receipt")
			})
			.catch((e) =>
				toast.error(e.response.data.message, {
					position: "top-center",
					theme: "dark",
				})
			);
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
