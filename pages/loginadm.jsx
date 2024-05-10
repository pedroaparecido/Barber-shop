import styled from "styled-components"

import { withIronSessionSsr } from "iron-session/next"
import { ironConfig } from "../lib/middlewares/iron-session"

import axios from "axios"
import { joiResolver } from '@hookform/resolvers/joi'
import { useRouter } from "next/router"

import { admLoginSchema } from '../modules/administrative/administrative.schema'

import Input from "../src/components/inputs/Input"
import ButtonCard from "../src/components/Button/ButtonCard"
import { useForm } from "react-hook-form"
import Navbar from "../src/components/layout/Navbar"

const PrincipalDiv = styled.div`
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 49vh;
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

function Loginadm({ user }) {
    const router = useRouter()
    const { control, register, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: joiResolver(admLoginSchema)
    })

    const handleForm = async (data) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/administrative/login`, data)

            if (response.status === 200) {
                router.push('/administrative')
            }
        } catch ({ response }) {
            console.log(response)
        }
    }

    return(
        <>
        <Navbar image={user.image ? user.image : 'user.png'} name={user.user} />
            <PrincipalDiv>
                <form onSubmit={handleSubmit(handleForm)}>
                    <Input type="text" placeholder="USUÁRIO ADMINISTRADOR" name="adminUser" {...register('adminUser')} control={control} />
                    <Input type="password" placeholder="SENHA" name="password" {...register('password')} control={control} />
                    <ButtonCard type="submit" color="#ffb34a">LOGIN</ButtonCard>
                </form>
            </PrincipalDiv>
            <FooterDiv>
                <FooterCopy>Feito por <UnderlineSpan>PEDRO APARECIDO</UnderlineSpan> - ©</FooterCopy>
            </FooterDiv>
        </>
    )
}

export const getServerSideProps = withIronSessionSsr(
    async function getServerSideProps({ req }) {
        const user = req.session.user

        if (!user) {
            return {
                redirect: {
                    permanent: false,
                    destination: '/'
                }
            }
        }

        return {
            props: {
                user
            }
        }
    },
    ironConfig
)

export default Loginadm