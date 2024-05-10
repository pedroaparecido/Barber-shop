import styled from "styled-components"

import { withIronSessionSsr } from "iron-session/next"
import { ironConfig } from "../lib/middlewares/iron-session"

import NavbarAdm from "../src/components/layout/NavbarAdm"
import H1Pages from "../src/components/tipography/H1Pages"
import Paragraph from "../src/components/tipography/Paragraph"
import ButtonList from "../src/components/Button/ButtonList"
import EditSchedule from "../src/components/cards/EditSchedule"

import axios from "axios"
import useSWR from "swr"
import { useEffect, useState } from "react"
import moment from "moment/moment"

const PrincipalDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const SecondDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 300px;
    
    @media (max-width: 426px) {
        display: flex;
        align-items: center;
        padding-left: 0;
    }
`

const ThirdDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FourthDiv = styled.div`
    background-color: #e2e4e9;
    width: 100%;
    height: 100%;
    color: #16181d;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const UL = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const LI = styled.li`
    word-spacing: 83vh;
    padding: 15px;
    margin-bottom: 5px;

    li&:nth-child(odd) {
	background-color:#ffb34a;
    color: #16181d;
	}
	li&:nth-child(even) {
	background-color:#16181d;
    color: #ffb34a;
	}

    @media (max-width: 864px) {
        word-spacing: 41vh;
    }

    @media (max-width: 769px) {
        word-spacing: 33vh;
    }

    @media (max-width: 426px) {
        word-spacing: 5vh;
    }

    @media (max-width: 376px) {
        word-spacing: normal;
    }
`

const HR = styled.hr`
    margin-top: 40px;
    margin-bottom: 20px;
    width: 95%;
`

const Input = styled.input`
    padding: 10px;
    margin-top: 20px;
    width: 300px;
    font-size: 14px;
`

const fetcher = url => axios.get(url).then(res => res.data)

function Administrative({ user }) {
    const [title, setTitle] = useState([])
    const [update, setUpdate] = useState(null)
    const { mutate } = useSWR()

    const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/schedule/schedule` ,fetcher, mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/schedule/schedule`))

    useEffect(() => {
        const fetchData = async () => {
            if (data && Array.isArray(data)) { // Verifica se data é definido e é um array
                const promises = data.map(async (item) => {
                    const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/barber/barber2`, { params: { id: item.barber } });
                    return result.data;
                    <LI key={index._id} id={index._id}>{moment(index.date).format('DD/MM/YYYY HH:mm')} {title[i]?.title} <ButtonList backcolor="#16181d" color="#ffb34a" onClick={() => handleUpdate()}>Editar</ButtonList><ButtonList backcolor="#ffb34a" color="#16181d" onClick={() => handleDelete()}>Apagar</ButtonList></LI>
                })
                const responseData = await Promise.all(promises)
                setTitle(responseData)
            }
        }

        
        fetchData()
    }, [data])
    
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/schedule/schedule`, {
                data: {
                    id
                }
            })
            if (response.status === 200)
                mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/schedule/schedule`)
        } catch (err) {
            console.error(err)
        }
    }

    const handleUpdateBarber = async (item, index) => {
        try {
            const updatedTitle = title
            const idBarber = item.barber
            
            const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/barber/barber`, {
                _id: idBarber,
                title: updatedTitle[index].title
            })
            
            if (response.status === 200) {
                mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/barber/barber`)
                setUpdate(null)
            }
        } catch (err) {
            console.error(err)
        }
    }

    const handleEdit = (index) => {
        setUpdate(index); // Define o índice do item em modo de edição
    };

    const handleCancelEdit = () => {
        setUpdate(null); // Sai do modo de edição
    }

    const handleSaveEdit = () => {
        setUpdate(null)
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/schedule/schedule`)
    }

    const handleInputChange = (e, index, id) => {
        const { value } = e.target

        const updatedTitle = [...title]

        updatedTitle[index] = { ...updatedTitle[index], title: value }

        setTitle(updatedTitle)
    }
    
    return(
        <PrincipalDiv>
            <NavbarAdm image={user.image ? user.image : 'user.png' } name={user.user} />
            <SecondDiv>
                    <H1Pages>OLÁ {user.user}</H1Pages>
                    <Paragraph>HORÁRIOS MARCADOS:</Paragraph>
            </SecondDiv>
                <ThirdDiv>
                    <HR />
                </ThirdDiv>
                <FourthDiv>
                {title && (
                <UL>
                    {data?.map((item, index) => (
                        <LI key={item._id} id={item._id}>
                            {update === index ? ( // Verifica se o item está em modo de edição
                                <div>
                                    {<EditSchedule id={item._id} onSave={handleSaveEdit} />/* Formulário de edição */}
                                    <Input type="text" value={title[index]?.title} onChange={(e) => handleInputChange(e, index, item[index]?._id)} />
                                    <ButtonList onClick={() => handleUpdateBarber(item, index)} backcolor="#16181d" color="#ffb34a">Salvar</ButtonList>
                                    <ButtonList onClick={handleCancelEdit} backcolor="#ffb34a" color="#16181d">Cancelar</ButtonList>
                                </div>
                            ) : (
                                <div>
                                    {/* Exibição normal do item */}
                                    {moment(item.date).format('DD/MM/YYYY HH:mm')} {title[index]?.title}
                                    <ButtonList onClick={() => handleEdit(index)} backcolor="#16181d" color="#ffb34a">Editar</ButtonList>
                                    <ButtonList onClick={() => handleDelete(item._id, index)} backcolor="#ffb34a" color="#16181d">Apagar</ButtonList>
                                </div>
                            )}
                        </LI>
                    ))}
                </UL>
            )}
                </FourthDiv>
        </PrincipalDiv>
    )
}

export const getServerSideProps = withIronSessionSsr(
    async function getServerSideProps({ req }) {
        const user = req.session.user

        if (!user) {
            return {
                redirect: {
                    permanent: false,
                    destination: '/loginadm'
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

export default Administrative