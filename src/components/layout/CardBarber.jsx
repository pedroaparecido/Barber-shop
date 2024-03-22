import styled from "styled-components"

import LogoImage from "./LogoImage"

const Card = styled.div`
    background-color: ${props => props.color};
    height: 250px;
    width: 250px;
`

function CardBarber({ color }) {
    return(
        <Card color={color} />
    )
}

export default CardBarber