import styled from "styled-components";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { useLocation } from "react-router-dom";

export default function PageTheme({ pageTheme, setPageTheme }) {
	console.log(useLocation)
	return pageTheme === false ? (
		<LightMode onClick={() => setPageTheme(!pageTheme)} />
	) : (
		<DarkMode onClick={() => setPageTheme(!pageTheme)} />
	);
}

const LightMode = styled(BsFillSunFill)`
	position: fixed;
	top: 20px;
	left: 20px;
	width: 30px;
	height: 30px;
	color: #e8e6e3;
	cursor: pointer;
	@media (max-width: 600px){
		top: 31px;
		left: 5px;
	}
`;
const DarkMode = styled(MdDarkMode)`
	position: fixed;
	top: 20px;
	left: 20px;
	width: 30px;
	height: 30px;
	cursor: pointer;
	@media (max-width: 600px){
		top: 31px;
		left: 5px;
	}
`;