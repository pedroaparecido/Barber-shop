import { forwardRef } from "react"
import { useController } from "react-hook-form"
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

const LogoBarber = forwardRef(({ name, control, defaultValue = '', image, border, width, height, children, lang, props }, ref) => {
    const {
        field: { value, onChange },
        fieldState: { error }
    } = useController({ name, control, defaultValue })
    return(
        <FirstDiv lang={lang}>
            <Check ref={ref} value={value} onChange={onChange} {...props} type="checkbox"/>
            <Image image={image} border={border} height={height} width={width} />
            <Label>{children}</Label>
        </FirstDiv>
    )
})

export default LogoBarber