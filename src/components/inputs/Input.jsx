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
`

const Input = forwardRef(({ type, placeholder }, ref) => {
    return(
        <PrincipalDiv>
            <PrincipalInput type={type} placeholder={placeholder} ref={ref} />
        </PrincipalDiv>
    )
})

export default Input