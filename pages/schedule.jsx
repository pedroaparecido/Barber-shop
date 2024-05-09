import styled from "styled-components"

import { withIronSessionSsr } from "iron-session/next"
import { ironConfig } from "../lib/middlewares/iron-session"

import Navbar from "../src/components/layout/Navbar"
import H1Pages from "../src/components/tipography/H1Pages"
import Paragraph from "../src/components/tipography/Paragraph"
import LogoBarber from "../src/components/layout/LogoBarber"
import ButtonCard from "../src/components/Button/ButtonCard"
import Textarea from "../src/components/inputs/Textarea"
import DateInput from '../src/components/inputs/DateInput'

import { createScheduleSchema } from "../modules/shcedule/schedule.schema"

import { useForm } from "react-hook-form"
import useSWR, { useSWRConfig } from "swr"
import { joiResolver } from '@hookform/resolvers/joi'
import axios from "axios"
import { useState } from "react"

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
    
`

const ThirdDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FourthDiv = styled.div`
    padding-top: 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`

const FifithDiv = styled.div`
    padding-top: 50px;
    padding-left: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
`

const SixthDiv = styled.div`
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HR = styled.hr`
    margin-top: 40px;
    width: 95%;
`

const fetcher = url => axios.get(url).then(res => res.data)

function Schedule({ user }) {
    const { mutate } = useSWRConfig()
    const {reset, register, handleSubmit, control, formState: { errors } } = useForm()

    const [checked, setChecked] = useState();

    const handleClick = (barberId) => {
        setChecked(barberId)
    }

    const handleDate = async (data) => {
        try {
            // Realiza uma requisição para obter os dados do barbeiro
            const getBarber = await axios.get(`http://localhost:8080/api/barber/${checked}`);
            const barber = getBarber.data; // Supondo que o ID do barber esteja em getBarber.data._id

            // Cria um objeto contendo os dados do agendamento, incluindo o ID do barber
            const scheduleData = {
                date: data.date,
                text: data.text,
                barber: barber // Passando todos os dados do barbeiro
            };
            

            // Realiza uma requisição para criar o agendamento, incluindo os dados do agendamento
            const response = await axios.post('/api/schedule/schedule', scheduleData);
            if (response.status === 201) {
                const schedule = await axios.get(`http://localhost:8080/api/schedule/${response.data._id}`);
                if (schedule.status === 200)
                    reset();
            }
        } catch (err) {
            console.error(err);
        }
    }

    const { data } = useSWR('/api/barber/barber', fetcher)

    return(
        <PrincipalDiv>
            <Navbar image={user.image ? user.image : 'user.png'} name={user.user} />
                <form onSubmit={handleSubmit(handleDate)}>
            <SecondDiv>
                    <H1Pages>AGENDE AGORA!</H1Pages>
                    <DateInput {...register('date')} type="datetime-local" name="date" />
                    <Paragraph>Escolha o melhor horário!</Paragraph>
                    <HR />
                    <Paragraph weight="bold">INFORMAÇÕES ADICIONAIS</Paragraph>
                    <Textarea {...register('text')} rows="4" name="text" />
                    <ButtonCard color="#ffb34a" type="submit">AGENDAR</ButtonCard>
                    <ButtonCard color="#ebc185">CANCELAR</ButtonCard>

            </SecondDiv>
            <ThirdDiv>
                <HR />
            </ThirdDiv>
            <SecondDiv>
                <Paragraph weight="bold">ESCOLHA O BARBEIRO</Paragraph>
            </SecondDiv>

                <FourthDiv>
                {
                    data?.map(index => 
                        <LogoBarber
                            onClick={() => handleClick(index._id)}
                            title={index.title} // Passando o title como propriedade
                            barberId={index._id}
                            control={control}
                            {...register('title')}
                            name="title"
                            key={index._id}
                            id={index._id}
                            height="100px"
                            width="100px"
                            image={index.image ? index.image : 'user2.png'}
                        >
                            {index.title}
                        </LogoBarber>
                    )
                }
                </FourthDiv>
            <FifithDiv>

            </FifithDiv>
            </form>
            <ThirdDiv>
            </ThirdDiv>
            <SixthDiv>
            </SixthDiv>
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

export default Schedule