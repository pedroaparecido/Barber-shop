import styled from "styled-components"

const FirstDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Image = styled.div`
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

const Span = styled.span`
    padding-top: 10px;
    font-size: 16px;
    color: #999999;
`

function LogoBarber({ image, width, height, children }) {
    return(
        <FirstDiv>
            <Image image={image} height={height} width={width} />
            <Span>{children}</Span>
        </FirstDiv>
    )
}

export default LogoBarber