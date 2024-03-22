import styled from "styled-components"

const PrincipalDiv = styled.div`
    padding-top: 30px;
`

const PrincipalButton = styled.button`
    padding: 15px;
    width: 200px;
    color: #16171d;
    font-size: 16px;
    color: #16171d;
    background-color: ${props => props.color};
    border: none;
    transition: 1s;
    text-align: left;

    cursor: pointer;
`

function ButtonCard({ children, color }) {
    return(
        <PrincipalDiv>
            <PrincipalButton color={color}>{children}</PrincipalButton>
        </PrincipalDiv>
    )
}

export default ButtonCard