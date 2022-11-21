import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ErrorTreatment({pageTheme}) {
    const navigate = useNavigate()
	return (
		<ErrorPage pageTheme={pageTheme}>
			<h1> 404 Page Not Found! </h1>
            <button onClick={() => navigate("/")}> Go Back Home </button>
		</ErrorPage>
	);
}
const ErrorPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 100vh;
    background-color: ${props => props.pageTheme ? "#e8e6e3" : "#2c2c2c"};
	color: ${props => props.pageTheme ? "2c2c2c" : "#e8e6e3"};
    button {
		width: 326px;
		height: 58px;
		border-radius: 5px;
		background-color: gray;
		font-size: 20px;
		background-color: ${props => props.pageTheme ? "#2c2c2c" : "#e8e6e3"};
        color: ${props => props.pageTheme ? "#e8e6e3" : "#2c2c2c"};
		:hover {
			background-color: ${props => props.pageTheme ? "#606060" : "gray"};
		}
	}
    h1 {
        font-size: 70px;
    }
` 