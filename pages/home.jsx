import styled from "styled-components"

import Navbar from "../src/components/layout/Navbar"
import CardBarber from "../src/components/layout/CardBarber"
import LogoImage from "../src/components/layout/LogoImage"

const PrincipalDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 250px);
    gap: 20px;
    justify-content: center;
`

function Home() {
    return(
        <>
            <Navbar />
            <PrincipalDiv>
                <CardBarber color="#ffb34a"><LogoImage height="100px" width="100px" /></CardBarber>
                <CardBarber color="#ebc185"><LogoImage height="100px" width="100px" /></CardBarber>
                <CardBarber color="#ffb34a"><LogoImage height="100px" width="100px" /></CardBarber>
                <CardBarber color="#ebc185"><LogoImage height="100px" width="100px" /></CardBarber>
                <CardBarber color="#ffb34a"><LogoImage height="100px" width="100px" /></CardBarber>
                <CardBarber color="#ebc185"><LogoImage height="100px" width="100px" /></CardBarber>
            </PrincipalDiv>
        </>
    )
}

export default Home