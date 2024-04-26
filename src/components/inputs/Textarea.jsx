import styled from "styled-components"
import { forwardRef } from "react"

const TextArea = styled.textarea`
    padding: 25px;
    height: 200px;
    width: 400px;
    margin-top: 50px;
    margin-bottom: 100px;
    border-radius: 10px;
`

const Textarea = forwardRef(({ name, control, ...props }, ref) => {
    return(
        <TextArea ref={ref} control={control} {...props} name={name} />
    )
})

export default Textarea