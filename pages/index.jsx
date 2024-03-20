import styled from "styled-components"

import Link from "next/link"

import Input from "../src/components/inputs/Input"
import Button from "../src/components/Button/Button"
import TransparentButton from "../src/components/Button/TransparentButton"
import BackgroundImage from '../public/layout-principal.jpg'

const PrincipalDiv = styled.div`
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('/layout-principal.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 70vh;
`

const StyledP = styled.p`
    padding-top: 10px;
    color: #ebc185;
`

const StyledLink = styled.a`
    color: #ebc185;
    text-decoration: underline;

    cursor: pointer;
`

const FooterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 88px;
`

const FooterCopy = styled.p`
    color: #e2e3e9;
    font-size: 12px;
`

const UnderlineSpan = styled.span`
    text-decoration: underline;
`

function HomePage() {
    return(
        <>
            <PrincipalDiv>
                <form>
                    <Input type="text" placeholder="NOME OU USUÁRIO" />
                    <Input type="password" placeholder="SENHA" />
                    <Button>LOGIN</Button>
                </form>
                <Link href="/register"><TransparentButton>REGISTER</TransparentButton></Link>
                
            </PrincipalDiv>
            <FooterDiv>
                <FooterCopy>Feito por <UnderlineSpan>PEDRO APARECIDO</UnderlineSpan> - ©</FooterCopy>
            </FooterDiv>
        </>
    )
}

export default HomePage