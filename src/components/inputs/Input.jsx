import styled from "styled-components"
import { useController } from "react-hook-form"
import { forwardRef } from "react"

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
    'duplicated': 'Email ou usuário já existe'
}

const Input = forwardRef(({ name, control, defaultValue = '', ...props }, ref) => {
    const {
        field: { value, onChange },
        fieldState: { error }
    } = useController({ name, control, defaultValue })
    return(
        <PrincipalDiv>
            <PrincipalInput {...props} error={error} value={value} onChange={onChange} ref={ref} />
            {error && <Error>{errorMessage[error.type] || error.message}</Error>}
        </PrincipalDiv>
    )
})

export default Input