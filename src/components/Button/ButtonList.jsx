import styled from "styled-components"

const Button = styled.button`
    padding: 10px;
    color: ${props => props.color};
    background-color: ${props => props.backcolor};
    font-size: 14px;
    text-align: center;
    border-radius: 5px;
    margin-left: 5px;
    font-weight: bold;
    box-sizing: border-box;

    cursor: pointer;

    &:hover {
        background-color: ${props => props.color};
        color: ${props => props.backcolor};
        border: 1px solid ${props => props.backcolor};
    }
`

function ButtonList({ children, onClick, color, backcolor }) {
    return(
        <Button color={color} onClick={onClick} backcolor={backcolor}>{children}</Button>
    )
}

export default ButtonList