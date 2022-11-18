import styled from "styled-components";
import {
	BsPlusCircleDotted,
	BsDashCircleDotted,
	BsDoorOpenFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Transaction from "../transaction";

export default function Receipt() {
	const navigate = useNavigate();
	const [transactions, setTransactions] = useState([]);
	const [current, setCurrent] = useState(0)

	useEffect(() => {
		axios
			.get("http://localhost:5000/receipt")
			.then((e) => setTransactions(e.data))
			.catch((e) => console.log(e));

		let total = 0;
		transactions.forEach(e => {
			if (e.type === "entrance") {
				total+= Number(e.price)
			} else {
				total-= Number(e.price)
			}		
		})
		setCurrent(total.toFixed(2))

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<ReceiptPage>
			<Header>
				<h1>Olá Fulano</h1>
				<BsDoorOpenFill
					style={{ cursor: "pointer" }}
					onClick={() => navigate("/")}
				/>
			</Header>
			<Screen>
				<div>
					{transactions.lenght === 0 ? (
						<p> There are no records of any transactions</p>
					) : (
						transactions.map((e, i) => (
							<Transaction
								key={i}
								price={e.price}
								description={e.description}
								type={e.type}
							/>
						))
					)}
				</div>
				<ScreenFooter>
					<h2> Balance </h2>
					<h2 style={current > 0 ? {color: "#03AC00"} : {color: "#C70000"}}> {transactions.lenght === 0 ? "Total" : current} </h2>
				</ScreenFooter>
			</Screen>
			<Footer>
				<div onClick={() => navigate("/entrance")}>
					<BsPlusCircleDotted />
					<p>New Entrance</p>
				</div>
				<div onClick={() => navigate("/expense")}>
					<BsDashCircleDotted />
					<p>New Expenses</p>
				</div>
			</Footer>
		</ReceiptPage>
	);
}
const ReceiptPage = styled.div`
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
	}
	p {
		font-size: 20px;
		cursor: pointer;
	}
`;
const Header = styled.div`
	display: flex;
	width: 80%;
	height: 50px;
	justify-content: space-between;
	align-items: center;
`;
const Screen = styled.div`
	position: relative;
	background-color: lightgray;
	height: 70%;
	width: 80%;
	padding: 15px 15px 50px 15px;
`;
const ScreenFooter = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding: 15px;
	color: var(--darkmode);
`;
const Footer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 80%;
	padding: 15px 0;
	div {
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		width: 100%;
		height: 100px;
		background-color: lightgray;
		color: var(--darkmode);
		padding: 15px;
		cursor: pointer;
	}
	div:nth-child(1) {
		margin-right: 15px;
	}
`;