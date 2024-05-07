import { forwardRef } from "react"
import styled from "styled-components"

const Input = styled.input`
    padding: 10px;
    margin-top: 20px;
    width: 300px;
    font-size: 14px;
`

const InputBarber = forwardRef(({ text, name, ...props }, ref) => {
    return(
        <Input text={text} ref={ref} name={name} {...props} />
    )
})

export default InputBarber