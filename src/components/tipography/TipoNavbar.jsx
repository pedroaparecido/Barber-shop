import styled from "styled-components"

const H1 = styled.h1`
    font-size: 16px;
    font-weight: bold;
    color: #16181d;
`

function TipoNavbar({ children }) {
    return(
        <H1>{children}</H1>
    )
}

export default TipoNavbar