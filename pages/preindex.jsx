import styled from "styled-components"

import { useRouter } from "next/router"
import { useState } from "react"
import axios from "axios"
import { withIronSessionSsr } from 'iron-session/next'
import { ironConfig } from "../lib/middlewares/iron-session"

import Navbar from "../src/components/layout/Navbar"
import LogoImage from "../src/components/layout/LogoImage"
import ButtonCard from "../src/components/Button/ButtonCard"
import { useForm } from "react-hook-form"

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

    @media (max-width: 426px) {
        width: 400px;
    }

    @media (max-width: 376px) {
        width: 350px;
        height: 400px;
    }

    @media (max-width: 321px) {
        width: 300px;
        height: 400px;
    }
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
    const router = useRouter()
    const { register, handleSubmit, reset } = useForm()
    const [image, setImage] = useState('')

    const uploadImage = async () => {
        const formData = new FormData()
        formData.append('image', image)

        const headers = {
            'headers': {
                'Content-Type': 'multipart/form-data'
            }
        }
        
        try {
            const createImage = await axios.post('http://localhost:8080/upload-image', formData, headers)
            
            const newImage = createImage.data.image.filename
            const updateImage = await axios.patch('/api/user/user', {
                user,
                image: newImage
            })
            if (updateImage.status === 200) {
                reset()
                router.push('/home')
            }
        } catch (err) {
            console.error(err)
        }
    }

    return(
        <>
            <Navbar image={user.image ? user.image : 'user.png'} name={user.user} />
            <form onSubmit={handleSubmit(uploadImage)}>
                <ButtonCard type="submit" color="#ffb34a">CADASTRAR</ButtonCard>
                <PrincipalDiv>
                    <SecondDiv>
                        <LogoImage image={user.image ? user.image : 'user.png'} width="300px" height="300px" />
                        <ThirdDiv>
                            <FourthDiv>
                                <LabelFileInput for="selecao-de-arquivo">+</LabelFileInput>
                                <FileInput type="file" id="selecao-de-arquivo" name="image" onChange={(e) => setImage(e.target.files[0])} />
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