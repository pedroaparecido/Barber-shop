import styled from "styled-components"

const PrinciaplDiv = styled.div`
    padding-top: 20px;
`

const PrincipalButton = styled.button`
    padding: 20px;
    width: 444px;
    color: #16171d;
    font-size: 16px;
    color: #16171d;
    background-color: transparent;
    color: #d5b890;
    border-color: #ebc185c9;
    border-width: 4px;

    cursor: pointer;
`

function TransparentButton({ children }) {
    return(
        <PrinciaplDiv>
            <PrincipalButton>{children}</PrincipalButton>
        </PrinciaplDiv>
    )
}

export default TransparentButton