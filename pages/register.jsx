import styled from "styled-components"
import Input from "../src/components/inputs/Input"
import Button from "../src/components/Button/Button"
import TransparentButton from "../src/components/Button/TransparentButton"
import Link from "next/link"

const PrincipalDiv = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('/layout-principal.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 84vh;
`

const StyledP = styled.span`
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

function Register() {
    return(
        <>
            <PrincipalDiv>
                <form>
                    <Input type="text" placeholder="NOME" />
                    <Input type="text" placeholder="USUÁRIO" />
                    <Input type="email" placeholder="EMAIL" />
                    <Input type="number" placeholder="CELULAR" />
                    <Input type="password" placeholder="SENHA" />
                    <Button>REGISTRAR</Button>
                </form>
                <TransparentButton>LOGIN</TransparentButton>
                <StyledP>JÁ É REGISTRADO? FAÇA O <Link href="/"><StyledLink>LOGIN</StyledLink></Link></StyledP>
            </PrincipalDiv>
            <FooterDiv>
                <FooterCopy>Feito por <UnderlineSpan>PEDRO APARECIDO</UnderlineSpan> - ©</FooterCopy>
            </FooterDiv>
        </>
    )
}

export default Register