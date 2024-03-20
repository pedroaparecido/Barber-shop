import styled from "styled-components"
import { joiResolver } from '@hookform/resolvers/joi'

import { signupSchema } from '../modules/user/user.schema'

import Input from "../src/components/inputs/Input"
import Button from "../src/components/Button/Button"
import TransparentButton from "../src/components/Button/TransparentButton"
import Link from "next/link"
import { useForm } from "react-hook-form"

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
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(signupSchema)
    })

    const handleForm = (data) => {
        console.log(data)
    }

    console.log(errors)

    return(
        <>
            <PrincipalDiv>
                <form onSubmit={handleSubmit(handleForm)}>
                    <Input type="text" placeholder="NOME" {...register('name')} name="name" error={errors.name} />
                    <Input type="text" placeholder="USUÁRIO" {...register('user')} name="user" error={errors.user} />
                    <Input type="email" placeholder="EMAIL" {...register('email')} name="email" error={errors.email} />
                    <Input type="number" placeholder="CELULAR" {...register('celphone')} name="celphone" error={errors.celphone} />
                    <Input type="password" placeholder="SENHA" {...register('password')} name="password" error={errors.password} />
                    <Button type="submit">REGISTRAR</Button>
                </form>
                <Link href="/"><TransparentButton>LOGIN</TransparentButton></Link>
                
            </PrincipalDiv>
            <FooterDiv>
                <FooterCopy>Feito por <UnderlineSpan>PEDRO APARECIDO</UnderlineSpan> - ©</FooterCopy>
            </FooterDiv>
        </>
    )
}

export default Register