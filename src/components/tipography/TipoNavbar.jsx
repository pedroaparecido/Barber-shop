import styled from "styled-components"

const H1 = styled.h1`
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #16181d;
    box-sizing: border-box;
    border-radius: 5px;

    &:hover {
        background-color: #16181d;
        color: #ffb34a;
    }

    @media (max-width: 426px) {
        font-size: 8px;
        padding: 2px;
    }
`

function TipoNavbar({ children }) {
    return(
        <H1>{children}</H1>
    )
}

export default TipoNavbar