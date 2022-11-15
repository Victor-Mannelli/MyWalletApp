import styled from "styled-components";
import {
	BsPlusCircleDotted,
	BsDashCircleDotted,
	BsDoorOpenFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Receipt() {
	const navigate = useNavigate();
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
				<ScreenFooter>
					<h2> Balance </h2>
					<h2> Total </h2>
				</ScreenFooter>
			</Screen>
			<Footer>
				<div>
					<BsPlusCircleDotted />
					<p>New Entrance</p>
				</div>
				<div>
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
const Screen = styled.div`
	position: relative;
	background-color: lightgray;
	height: 70%;
	width: 70%;
`;
const Footer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 70%;
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
const Header = styled.div`
	display: flex;
	width: 65%;
	height: 50px;
	justify-content: space-between;
	align-items: center;
`;
