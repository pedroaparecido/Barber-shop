import styled from "styled-components"

import NavbarAdm from "../src/components/layout/NavbarAdm"
import H1Pages from "../src/components/tipography/H1Pages"
import Paragraph from "../src/components/tipography/Paragraph"
import ButtonList from "../src/components/Button/ButtonList"

const PrincipalDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const SecondDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 300px;
    
`

const ThirdDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FourthDiv = styled.div`
    background-color: #e2e4e9;
    width: 100%;
    height: 60vh;
    color: #16181d;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const UL = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const LI = styled.li`
    word-spacing: 90vh;
    padding: 15px;
    margin-bottom: 5px;

    li&:nth-child(odd) {
	background-color:#ffb34a;
    color: #16181d;
	}
	li&:nth-child(even) {
	background-color:#16181d;
    color: #ffb34a;
	}
`

const HR = styled.hr`
    margin-top: 40px;
    margin-bottom: 20px;
    width: 95%;
`

function Administrative({ name }) {
    return(
        <PrincipalDiv>
            <NavbarAdm />
            <SecondDiv>
                    <H1Pages>OLÁ {name}</H1Pages>
                    <Paragraph>HORÁRIOS MARCADOS:</Paragraph>
            </SecondDiv>
                <ThirdDiv>
                    <HR />
                </ThirdDiv>
                <FourthDiv>
                    <UL>
                        <LI>a <ButtonList backcolor="#16181d" color="#ffb34a">Editar</ButtonList><ButtonList backcolor="#16181d" color="#ffb34a">Apagar</ButtonList></LI>
                        <LI>a <ButtonList backcolor="#ffb34a" color="#16181d">Editar</ButtonList><ButtonList backcolor="#ffb34a" color="#16181d">Apagar</ButtonList></LI>
                        <LI>a <ButtonList backcolor="#16181d" color="#ffb34a">Editar</ButtonList><ButtonList backcolor="#16181d" color="#ffb34a">Apagar</ButtonList></LI>
                        <LI>a <ButtonList backcolor="#ffb34a" color="#16181d">Editar</ButtonList><ButtonList backcolor="#ffb34a" color="#16181d">Apagar</ButtonList></LI>
                    </UL>
                </FourthDiv>
        </PrincipalDiv>
    )
}

export default Administrative