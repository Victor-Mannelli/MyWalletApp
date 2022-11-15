import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Expense() {
	const [description, setDescription] = useState();
	const [price, setPrice] = useState();
	const navigate = useNavigate();

	function HandleSubmit() {
		navigate("/receipt")
	}

	return (
		<ExpensesPage>
			<header>
				<h1>New Expense</h1>
			</header>
			<ExpensesForm onSubmit={HandleSubmit}>
				<input
					required
					placeholder="Price"
					type="number"
					name="price"
					onChange={(e) => setPrice(e.target.value)}
				/>
				<input
					required
					placeholder="Description"
					type="text"
					name="description"
					onChange={(e) => setDescription(e.target.value)}
				/>
				<button type="submit">Save Expense</button>
			</ExpensesForm>
		</ExpensesPage>
	);
}
const ExpensesPage = styled.div`
	display: flex;
	flex-direction: column;
    align-items: center;
	width: 100%;
	height: 100vh;
	background-color: var(--darkmode);
	header {
		display: flex;
		align-items: center;
		height: 100px;
        width: 80%;
		color: white;
		font-size: 30px;
	}
`;
const ExpensesForm = styled.form`
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