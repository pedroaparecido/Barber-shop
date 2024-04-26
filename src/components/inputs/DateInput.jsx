import { forwardRef } from "react"
import styled from "styled-components"

const DateTime = styled.input`
    margin-top: 20px;
    padding: 10px;
    font-weight: bold;
    border-radius: 10px;
    color: #16171d;
    background-color: #e2e4e9;
    border: none;
`

const DateInput = forwardRef(({ name, control, type, ...props }, ref) => {
    return(
        <DateTime name={name} control={control} type={type} ref={ref} {...props} />
    )
})

export default DateInput