import styled from "styled-components"

const Input = styled.input`
    padding: 10px;
    margin-top: 20px;
    width: 300px;
    font-size: 14px;
`

const InputBarber = ({ text }) => {
    return(
        <Input text={text} />
    )
}

export default InputBarber