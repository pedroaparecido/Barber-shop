import styled from "styled-components"
import { useController } from "react-hook-form"

const TextArea = styled.textarea`
    padding: 25px;
    height: 200px;
    width: 400px;
    margin-top: 50px;
    margin-bottom: 100px;
    border-radius: 10px;
`

function Textarea({ name, control, ...props }) {
    const {
        field: { value, onChange },
        fieldState: { error }
    } = useController({ name, control })
    return(
        <TextArea value={value} onChange={onChange} />
    )
}

export default Textarea