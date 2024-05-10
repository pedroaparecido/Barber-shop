import styled from "styled-components"
import { joiResolver } from '@hookform/resolvers/joi'
import axios from "axios"

import { signupSchema } from '../modules/user/user.schema'

import Input from "../src/components/inputs/Input"
import Button from "../src/components/Button/Button"
import TransparentButton from "../src/components/Button/TransparentButton"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"

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

    @media (max-width: 864px) {
        padding-top: 40px;
        height: 88vh;
    }
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
    const router = useRouter()
    const { control, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: joiResolver(signupSchema)
    })

    const handleForm = async (data) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/signup`, data)

            if (response.status === 201) {
                router.push('/preindex')
            }
        } catch (err) {
            if (err.response.data.code === 11000) {
                setError(err.response.data.duplicatedKey, {
                    type: 'duplicated'
                })
            }
        }
    }

    return(
        <>
            <PrincipalDiv>
                <form onSubmit={handleSubmit(handleForm)}>
                    <Input type="text" placeholder="NOME" name="name" control={control} />
                    <Input type="text" placeholder="USUÁRIO" name="user" control={control} />
                    <Input type="email" placeholder="EMAIL" name="email" control={control} />
                    <Input type="number" placeholder="CELULAR" name="celphone" control={control} />
                    <Input type="password" placeholder="SENHA" name="password" control={control} />
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