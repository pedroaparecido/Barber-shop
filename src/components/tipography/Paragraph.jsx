import styled from "styled-components"

const P = styled.p`
    font-size: 16px;
    font-weight: 300;
    color: #999999;
    margin-top: 20px;
    font-weight: ${props => props.weight};
`

function Paragraph({ children, weight }) {
    return(
        <P weight={weight}>{children}</P>
    )
}

export default Paragraph