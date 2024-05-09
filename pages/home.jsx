import styled from "styled-components"
import { withIronSessionSsr } from 'iron-session/next'

import { ironConfig } from '../lib/middlewares/iron-session'

import Navbar from "../src/components/layout/Navbar"
import CardBarber from "../src/components/layout/CardBarber"
import LogoImage from "../src/components/layout/LogoImage"

const PrincipalDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 250px);
    gap: 20px;
    justify-content: center;
`

function Home({ user }) {
    return(
        <>
            <Navbar image={user.image ? user.image : 'user.png'} name={user.user} />
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

export default Home