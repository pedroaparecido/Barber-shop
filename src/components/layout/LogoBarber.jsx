import { forwardRef } from "react"
import styled from "styled-components"

const FirstDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Image = styled.label`
    background-image: url('${props => props.image}');
    background-size: cover;
    background-repeat: no-repeat;
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 50%;
    box-sizing: border-box;

    cursor: pointer;

    &:hover {
        border: 10px solid #ffb34a;
    }
`

const Label = styled.label`
    padding-top: 10px;
    font-size: 16px;
    color: #999999;
`

const FileInput = styled.input`
    display: none;
`

const Check = styled.input`
    
    &:checked + label {
        border: 10px solid #ffb34a;
    }
`

const LogoBarber = forwardRef(({ image, border, width, height, children, lang, props }, ref) => {
    return(
        <FirstDiv lang={lang}>
            <Check type="checkbox"/>
            <Image image={image} border={border} height={height} width={width} />
            <Label ref={ref} {...props} >{children}</Label>
        </FirstDiv>
    )
})

export default LogoBarber