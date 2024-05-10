import styled from "styled-components"
import axios from "axios"

import H1 from '../tipography/TipoNavbar'
import LogoImageNavbar from "./LogoImageNavbar"
import Link from "next/link"
import { useRouter } from "next/router"

const NavbarDiv = styled.div`
    padding: 25px;
    background-color: #ffb34a;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;

    @media (max-width: 426px) {
        padding: 15px;
    }
`

const PrincipalDiv = styled.div`
    color: #16181d;
    flex: 1;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 20px;

    @media (max-width: 426px) {
        gap: 0;
    }
`

const StyledLogout = styled.a`
    cursor: pointer;
`

function Navbar({ name, image }) {
    const router = useRouter()

    const handleLogout = async () => {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/logout`)
        router.push('/')
    }

    return(
        <NavbarDiv>
            <LogoImageNavbar image={image} width="60px" height="60px" />
            <H1 name={name}>Olá {name}</H1>
            <PrincipalDiv>
                <Link href="/home" style={{textDecoration: 'none'}}><H1>Início</H1></Link>
                <Link href="/preindex" style={{textDecoration: 'none'}}><H1>Perfil</H1></Link>
                <Link href="/schedule" style={{textDecoration: 'none'}}><H1>Agendamento</H1></Link>
                <Link href="/loginadm" style={{textDecoration: 'none'}}><H1>Administrativo</H1></Link>
                <StyledLogout onClick={handleLogout} style={{textDecoration: 'none'}}><H1>Sair</H1></StyledLogout>
            </PrincipalDiv>
        </NavbarDiv>
    )
}

export default Navbar