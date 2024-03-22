import styled from "styled-components"

const H1 = styled.h1`
    font-size: 26px;
    color: #ffb34a;
`

function H1Pages({ children }) {
    return(
        <H1>{children}</H1>
    )
}

export default H1Pages