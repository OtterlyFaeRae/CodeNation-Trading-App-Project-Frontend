import styled from "styled-components"
import { useEffect, useState } from "react"

const PortfolioItem = ({symbol, price, number, index}) => {

    const [ total, setTotal ] = useState(0)

    useEffect( () => {
        const result = price * number
        setTotal( result )
    }, [price, number]);

    return (
            <StyledRow index = {index} symbol = {symbol} price = {price} number = {number} total = {total}>
                <TableData>
                {symbol}
                </TableData>
                <TableData>
                    {number}
                </TableData>
                <TableData>
                    ${price && price.toFixed(2)}
                </TableData>
                <TableData>
                    ${price && total.toFixed(2)}
                </TableData>
        </StyledRow>
    )
}

const StyledRow = styled.tr`
    ${props => props.index % 2 === 1 ? 'background-color: #222224; ' : 'background-color: #28292e;'};

    /* shaun */
    &:hover {
		background-color: #31356e;
        cursor: pointer;
	}

`
const TableData = styled.td`
    width: 25%;
    padding-top: 5px;
    padding-bottom: 5px;

    /* shaun */
    padding: 0.6rem 2rem;
`

export default PortfolioItem