import styled from "styled-components"

const PrincipalDiv = styled.div`
    padding-top: 10px;
`

const PrincipalInput = styled.input`
    padding: 20px;
    width: 400px;
    color: #16171d;
    background-color: #e0d6c9;
    font-size: 16px;
`

function Input({ type, placeholder }) {
    return(
        <PrincipalDiv>
            <PrincipalInput type={type} placeholder={placeholder} />
        </PrincipalDiv>
    )
}

export default Input