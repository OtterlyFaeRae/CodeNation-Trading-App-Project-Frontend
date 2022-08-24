
import styled from "styled-components"

const DropdownItem = ({stock}) => {
    return (
        <ListItem>
            <p>{stock}</p>
        </ListItem>
    )
}

export default DropdownItem

const ListItem = styled.div`
padding: 0 50px;
margin: 5px;
border: solid black 1px;
`