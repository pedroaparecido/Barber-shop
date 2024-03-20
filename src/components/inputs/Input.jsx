import { forwardRef } from "react"
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

    ${props => props.error && 'border: 2px solid red;'}

    &:focus {
        outline: none;
    }
`

const Error = styled.span`
    color: red;
    font-weight: bold;
    font-size: 14px;
`

const errorMessage = {
    'string.empty': 'Campo obrigatório',
    'string.email': 'Digite um email válido',
}

const Input = forwardRef(({ error, ...props }, ref) => {
    return(
        <PrincipalDiv>
            <PrincipalInput {...props} ref={ref} error={error} />
            {error && <Error>{errorMessage[error.type] || error.message}</Error>}
        </PrincipalDiv>
    )
})

export default Input