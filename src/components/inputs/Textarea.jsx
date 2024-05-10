import styled from "styled-components"
import { forwardRef } from "react"

const TextArea = styled.textarea`
    padding: 25px;
    height: 200px;
    width: 400px;
    margin-top: 50px;
    margin-bottom: 100px;
    border-radius: 10px;

    @media (max-width: 445px) {
        width: 300px;
    }

    @media (max-width: 321px) {
        width: 250px;
    }
`

const Textarea = forwardRef(({ name, control, defaultValue = '', ...props }, ref) => {
    return(
        <TextArea ref={ref} control={control} {...props} name={name} />
    )
})

export default Textarea