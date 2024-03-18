import styled from "styled-components"

const PrincipalDiv = styled.div`
    padding-top: 30px;
`

const PrincipalButton = styled.button`
    padding: 20px;
    width: 444px;
    color: #16171d;
    font-size: 16px;
    color: #16171d;
    background-color: #d5b890;
`

function Button({ children }) {
    return(
        <PrincipalDiv>
            <PrincipalButton>{children}</PrincipalButton>
        </PrincipalDiv>
    )
}

export default Button