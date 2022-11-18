import styled from "styled-components";
import dayjs from "dayjs"

export default function Transaction({ price, description, type }) {
    return (
        <ReceiptLine>
            <div>
                <Date> {dayjs().format("MM/DD")} </Date>
                <Description> {description} </Description>
            </div>
            <Price style={type === "entrance" ? {color: "#03AC00"} : {color: "#C70000"}}>
                {Number(price).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                })}
            </Price>
        </ReceiptLine>
    );
}
const ReceiptLine = styled.div`
	display: flex;
	justify-content: space-between;
	padding-bottom: 15px;
	color: var(--darkmode);

	div {
		display: flex;
	}
`;
const Date = styled.div`
	padding-right: 15px;
`;
const Description = styled.div`
    word-break: break-all;
`
const Price = styled.div`
    padding-left: 10px;
`