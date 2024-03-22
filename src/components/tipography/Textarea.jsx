import styled from "styled-components"

const TextArea = styled.textarea`
    padding: 25px;
    height: 200px;
    width: 400px;
    margin-top: 50px;
    margin-bottom: 100px;
    border-radius: 10px;
`

function Textarea() {
    return(
        <TextArea />
    )
}

export default Textarea