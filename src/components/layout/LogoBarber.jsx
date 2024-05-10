import { forwardRef } from "react"
import { useController } from "react-hook-form"
import styled from "styled-components"

const FirstDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
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

    @media (max-width: 376px) {
        height: 75px;
        width: 75px;
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

const LogoBarber = forwardRef(({ title, control, defaultValue = '', image, border, width, height, children, lang, onClick, onChange, ...props }, ref) => {
    return (
        <FirstDiv lang={lang}>
            <Check
                onChange={onChange}
                onClick={onClick}
                ref={ref}
                {...props}
                type="checkbox"
                id={title} // Usando o title como id do input
            />
            <Image image={image} border={border} height={height} width={width} htmlFor={title} />
            <Label htmlFor={title}>{children}</Label>
        </FirstDiv>
    )
})

export default LogoBarber