import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import { Slide, toast } from "react-toastify";
import CurrencyInput from "../CurrencyInput";

export default function Entrance() {
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const { type } = useParams()
	const token = localStorage.getItem("token")
	const navigate = useNavigate();
	
	useEffect(() => {
		if (type !== "entrance" && type !== "expense") navigate("/receipt")

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	function HandleSubmit(e) {
		e.preventDefault();
		const transition = { token, price, description, type};
		axios
			.post("http://localhost:5000/transactions", transition)
			.then((e) => {
				toast.success(e.data.message, {
					position: "top-center",
					theme: "dark",
					autoClose: 500,
					transition: Slide,
				});
				navigate("/receipt");
			})
			.catch((e) =>
				toast.error(e.response.data[0], {
					position: "top-center",
					theme: "dark",
				})
			);
	}
	return (
		<TransactionPage>
			<header>
				<h1>New {type}</h1>
				<GiReturnArrow
					style={{ cursor: "pointer" }}
					onClick={() => navigate("/receipt")}
				/>
			</header>
			<TransactionForm onSubmit={HandleSubmit}>
				<CurrencyInput
					required
					placeholder="$0.00"
					type="text"
					name="price"
					onChange={(e) => setPrice(e.target.value.replace(/[$,]/g, ""))}
				/>
				<input
					required
					placeholder="Description"
					type="text"
					name="description"
					onChange={(e) => setDescription(e.target.value)}
				/>
				<button type="submit">Save {type}</button>
			</TransactionForm>
		</TransactionPage>
	);
}
const TransactionPage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: var(--darkmode);
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100px;
		width: 80%;
		color: white;
		font-size: 30px;
	}
`;
const TransactionForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	input {
		width: 80%;
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
		width: 80%;
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