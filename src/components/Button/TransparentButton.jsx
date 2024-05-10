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

    &:hover {
        transition: all 0.5s;
        background-color: #deaa61;
        color: #16171d;
        border-color: transparent;
    }

    @media (max-width: 444px) {
        width: 420px;
    }

    @media (max-width: 426px) {
        width: 340px;
    }

    @media (max-width: 380px) {
        width: 240px;
    }

    @media (max-width: 340px) {
        width: 240px
    }
`

function TransparentButton({ children }) {
    return(
        <PrinciaplDiv>
            <PrincipalButton>{children}</PrincipalButton>
        </PrinciaplDiv>
    )
}

export default TransparentButton