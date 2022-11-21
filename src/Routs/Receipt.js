import styled from "styled-components";
import {
	BsPlusCircleDotted,
	BsDashCircleDotted,
	BsDoorOpenFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Transaction from "../transaction";
import UserContext from "../UserContext";

export default function Receipt({pageTheme}) {
	const navigate = useNavigate();
	const [transactions, setTransactions] = useState([]);
	const { token } = useContext(UserContext)
	const username = localStorage.getItem("username");

	useEffect(() => {
		axios
			.get("http://localhost:5000/receipt", {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then((e) => setTransactions(e.data))
			.catch((e) => console.log(e.response.data.message));
 
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	let total = 0;
	transactions.forEach((e) => {
		if (e.type === "entrance") {
			total += Number(e.price);
		} else {
			total -= Number(e.price);
		}
	});
	const current = total.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});

	useEffect(() => {
		!token && navigate("/") 
		
		const element = document?.getElementById(transactions.length - 1);
		element?.scrollIntoView();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	return (
		<ReceiptPage pageTheme={pageTheme}>
			<Header>
				<h1>Welcome {username}</h1>
				<BsDoorOpenFill
					style={{ cursor: "pointer" }}
					onClick={() => {
						localStorage.removeItem("token")
						localStorage.removeItem("username")
						navigate("/")
					}}
				/>
			</Header>
			<Screen pageTheme={pageTheme}>
				<ScreenReceipt>
					{transactions.lenght === 0 ? (
						<p> There are no records of any transactions</p>
					) : (
						transactions.map((e, i) => (
							<Transaction
								pageTheme={pageTheme}
								key={i}
								id={i}
								price={e.price}
								description={e.description}
								type={e.type}
							/>
						))
					)}
				</ScreenReceipt>
				<ScreenFooter pageTheme={pageTheme}>
					<h2> Balance </h2>
					<h2
						style={
							!current.includes("-")
								? { color: "#03AC00" }
								: { color: "#C70000" }
						}
					>
						{" "}
						{transactions.lenght === 0 ? "Total" : current}{" "}
					</h2>
				</ScreenFooter>
			</Screen>
			<Footer pageTheme={pageTheme}>
				<div onClick={() => navigate("/transactions/entrance")}>
					<BsPlusCircleDotted />
					<p>New Entrance</p>
				</div>
				<div onClick={() => navigate("/transactions/expense")}>
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
	background-color: ${props => props.pageTheme ? "#e8e6e3" : "#2c2c2c"};
	color: ${props => props.pageTheme ? "#2c2c2c" : "#e8e6e3"};
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
	height: 70px;
	justify-content: space-between;
	align-items: center;
`;
const Screen = styled.div`
	position: relative;
	background-color: ${props => props.pageTheme ? "#d3d3d3" : "#313537"};
	height: 70%;
	width: 80%;
	padding: 15px;
`;
const ScreenReceipt = styled.div`
	overflow: auto;
	height: 93%;
`;
const ScreenFooter = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding: 15px;
	color: ${props => props.pageTheme ? "#2c2c2c" : "#e8e6e3"};
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
		padding: 15px;

		background-color: ${props => props.pageTheme ? "#d3d3d3" : "#313537"};
		color: ${props => props.pageTheme ? "#2c2c2c" : "#e8e6e3"};
		cursor: pointer;
	}
	div:nth-child(1) {
		margin-right: 15px;
	}
`;
