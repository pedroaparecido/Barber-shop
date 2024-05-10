import styled from "styled-components"

const PrincipalDiv = styled.div`
    padding-top: 30px;

    @media (max-width: 430px) {
        display: flex;
        justify-content: center;
    }
`

const PrincipalButton = styled.button`
    padding: 20px;
    width: 444px;
    color: #16171d;
    font-size: 16px;
    color: #16171d;
    background-color: #ebc185c9;
    border: none;
    transition: 1s;

    cursor: pointer;

    &:hover {
        background-color: #deaa61;
    }

    @media (max-width: 444px) {
        width: 420px;
    }

    @media (max-width: 426px) {
        width: 340px;
    }

    @media (max-width: 376px) {
        width: 240px;
    }

    @media (max-width: 340px) {
        width: 240px
    }
`

function Button({ children }) {
    return(
        <PrincipalDiv>
            <PrincipalButton>{children}</PrincipalButton>
        </PrincipalDiv>
    )
}

export default Button