import styled from "styled-components"

const PrincipalDiv = styled.div`
    padding-top: 10px;
`

const PrincipalInput = styled.input`
    padding: 20px;
    width: 400px;
    color: #16171d;
    font-size: 16px;
`

function Input({ type }) {
    return(
        <PrincipalDiv>
            <PrincipalInput type={type} />
        </PrincipalDiv>
    )
}

export default Input