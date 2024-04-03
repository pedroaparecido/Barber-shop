import styled from "styled-components"
import { useState } from "react"
import axios from "axios"
import { withIronSessionSsr } from 'iron-session/next'
import { ironConfig } from "../lib/middlewares/iron-session"

import Navbar from "../src/components/layout/Navbar"
import LogoImage from "../src/components/layout/LogoImage"
import ButtonCard from "../src/components/Button/ButtonCard"

const PrincipalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
`

const SecondDiv = styled.div`
    background-color: #414758;
    width: 500px;
    height: 500px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const ThirdDiv = styled.div`
    padding-top: 300px;
    position: absolute;
`

const FourthDiv = styled.div`
    position: relative;
    padding-left: 180px;
    padding-bottom: 50px;
`

const FileInput = styled.input`
    display: none;
`

const LabelFileInput = styled.label`
  background-color: #f0f1f4;
  border-radius: 50%;
  color: #c4c8d4;
  cursor: pointer;
  padding: 5px 10px;
`

function Preindex({ user }) {
    const [image, setImage] = useState('')
    const [message, setMessage] = useState()

    const uploadImage = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', image)

        const headers = {
            'headers': {
                'Content-Type': 'multipart/form-data'
            }
        }

        await axios.post('http://localhost:8080/upload-image', formData, headers).then((response) => {
            setMessage(response.data.message)
        })
    }

    return(
        <>
            <Navbar name={user.user} />
            <form onSubmit={uploadImage}>
                <ButtonCard type="submit" color="#ffb34a">CADASTRAR</ButtonCard>
                <PrincipalDiv>
                    <SecondDiv>
                        <LogoImage image="/layout-principal.jpg" width="300px" height="300px" />
                        <ThirdDiv>
                            <FourthDiv>
                                <LabelFileInput for="selecao-de-arquivo">+</LabelFileInput>
                                <FileInput type="file" id="selecao-de-arquivo" />
                            </FourthDiv>
                        </ThirdDiv>
                    </SecondDiv>
                </PrincipalDiv>
            </form>
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

export default Preindex