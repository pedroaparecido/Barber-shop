import styled from "styled-components"

import H1 from '../tipography/TipoNavbar'
import LogoImage from "./LogoImage"
import Link from "next/link"

const NavbarDiv = styled.div`
    padding: 25px;
    background-color: #ffb34a;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
`

const PrincipalDiv = styled.div`
    color: #16181d;
    flex: 1;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 20px;
`

function NavbarAdm({ name }) {
    return(
        <NavbarDiv>
            <LogoImage image="/layout-principal.jpg" width="60px" height="60px" />
            <H1>Olá {name}</H1>
            <PrincipalDiv>
                <Link href="/home" style={{textDecoration: 'none'}}><H1>Início</H1></Link>
                <Link href="/administrative" style={{textDecoration: 'none'}}><H1>Administrativo</H1></Link>
                <Link href="/registerbarber" style={{textDecoration: 'none'}}><H1>Cadastro</H1></Link>
                <Link href="/" style={{textDecoration: 'none'}}><H1>Sair</H1></Link>
            </PrincipalDiv>
        </NavbarDiv>
    )
}

export default NavbarAdm