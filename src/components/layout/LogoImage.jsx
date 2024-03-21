import styled from "styled-components"

const Image = styled.div`
    background-image: url('${props => props.image}');
    background-size: cover;
    background-repeat: no-repeat;
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 50%;
`

function LogoImage({ image, width, height }) {
    return(
        <Image image={image} height={height} width={width} />
    )
}

export default LogoImage