import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register({pageTheme}) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const navigate = useNavigate();

	function HandleSubmit(e) {
		e.preventDefault();
		if (password !== confirmPassword) {
			toast.error("Password & Confirm Password do not match", {
				position: "top-center",
				theme: "dark",
			});
			return;
		} else {
			const user = { name, email, password, confirmPassword };
			axios
				.post("http://localhost:5000/register", user)
				.then((e) => {
					toast.success(e.data.message, {
						position: "top-center",
						theme: "dark",
					});
					navigate("/");
				})
				.catch((e) =>
					toast.error(e.response.data.message, {
						position: "top-center",
						theme: "dark",
					})
				);
		}
	}

	return (
		<LoginPage pageTheme={pageTheme}>
			<h1> My Wallet </h1>
			<LoginForm onSubmit={HandleSubmit}>
				<input
					required
					placeholder="Name"
					name="name"
					type="text"
					onChange={(e) => setName(e.target.value)}
				/>
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
				<input
					required
					placeholder="Confirm Password"
					name="password confirmation"
					type="password"
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<button type="submit"> Register </button>
			</LoginForm>
			<p onClick={() => navigate("/")}>Already have an account? Sign In!</p>
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
	background-color: ${props => props.pageTheme ? "#e8e6e3" : "#2c2c2c"};
	color: ${props => props.pageTheme ? "2c2c2c" : "#e8e6e3"};
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