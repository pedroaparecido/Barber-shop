import styled from "styled-components"
import { joiResolver } from '@hookform/resolvers/joi'
import axios from "axios"
import { useRouter } from "next/router"

import Link from "next/link"

import { loginSchema } from '../modules/user/login.schema'

import Input from "../src/components/inputs/Input"
import Button from "../src/components/Button/Button"
import TransparentButton from "../src/components/Button/TransparentButton"
import BackgroundImage from '../public/layout-principal.jpg'
import { useForm } from "react-hook-form"

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

    @media (max-width: 426px) {
        padding-top: 80px;
    }

    @media (max-width: 376px) {
        padding-top: 40px;
        height: 80vh;
    }
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
    const router = useRouter()
    const { control, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: joiResolver(loginSchema)
    })

    const handleForm = async (data) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, data)

            if (response.status === 200) {
                router.push('/home')
            }
        } catch ({ response }) {
            if (response.data === 'incorrect password') {
                setError('password', {
                    message: 'A senha está incorreta'
                })
            } else if (response.data === 'not found') {
                setError('userOrEmail', {
                    message: 'Usuário ou email não encontrado'
                })
            }
        }
    }

    return(
        <>
            <PrincipalDiv>
                <h1>Clique em Registrar para alterar o estilo da página</h1>
                <form onSubmit={handleSubmit(handleForm)}>
                    <Input type="text" placeholder="NOME OU USUÁRIO" name="userOrEmail" control={control} />
                    <Input type="password" placeholder="SENHA" name="password" control={control} />
                    <Button type="submit">LOGIN</Button>
                </form>
                <Link href="/register"><TransparentButton>REGISTRO</TransparentButton></Link>
                
            </PrincipalDiv>
            <FooterDiv>
                <FooterCopy>Feito por <UnderlineSpan>PEDRO APARECIDO</UnderlineSpan> - ©</FooterCopy>
            </FooterDiv>
        </>
    )
}

export default HomePage