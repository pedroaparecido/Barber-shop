import styled from "styled-components"

import Navbar from "../src/components/layout/Navbar"
import H1Pages from "../src/components/tipography/H1Pages"
import Paragraph from "../src/components/tipography/Paragraph"
import LogoBarber from "../src/components/layout/LogoBarber"
import ButtonCard from "../src/components/Button/ButtonCard"
import Textarea from "../src/components/inputs/Textarea"
import DateInput from '../src/components/inputs/DateInput'

import { createScheduleSchema } from "../modules/shcedule/schedule.schema"

import { useForm } from "react-hook-form"
import { useSWRConfig } from "swr"
import { joiResolver } from '@hookform/resolvers/joi'
import axios from "axios"

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
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
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

function Schedule() {
    const { mutate } = useSWRConfig()
    const {reset, register, handleSubmit } = useForm()
    const barber = ['Barbeiro 1', 'Barbeiro 2', 'Barbeiro 3', 'Barbeiro 4']

    const handleDate = async (data) => {
        try {
            console.log(data)
            const response = await axios.post('/api/schedule/schedule', data)
            if (response.status === 201) {
                reset()
                mutate('/api/schedule/schedule')
            }
        } catch (err) {
            //console.log(err)
        }
    }

    return(
        <PrincipalDiv>
            <Navbar />
            <form onSubmit={handleSubmit(handleDate)}>
                <SecondDiv>
                        <H1Pages>AGENDE AGORA!</H1Pages>
                        <DateInput {...register('date')} type="datetime-local" name="date" />
                        <Paragraph>Escolha o melhor horário!</Paragraph>
                </SecondDiv>
                    <ThirdDiv>
                        <HR />
                    </ThirdDiv>
                    <SecondDiv>
                        <Paragraph weight="bold">ESCOLHA O BARBEIRO</Paragraph>
                    </SecondDiv>
                    <FourthDiv>
                        <LogoBarber height="100px" width="100px" image="/layout-principal.jpg">{barber[0]}</LogoBarber>
                        <LogoBarber height="100px" width="100px" image="/layout-principal.jpg">{barber[1]}</LogoBarber>
                        <LogoBarber height="100px" width="100px" image="/layout-principal.jpg">{barber[2]}</LogoBarber>
                        <LogoBarber height="100px" width="100px" image="/layout-principal.jpg">{barber[3]}</LogoBarber>
                    </FourthDiv>
                    <FifithDiv>
                        <ButtonCard color="#ffb34a" type="submit">AGENDAR</ButtonCard>
                        <ButtonCard color="#ebc185">CANCELAR</ButtonCard>
                    </FifithDiv>
                    <ThirdDiv>
                        <HR />
                    </ThirdDiv>
                    <SixthDiv>
                        <Paragraph weight="bold">INFORMAÇÕES ADICIONAIS</Paragraph>
                        <Textarea {...register('text')} rows="4" name="text" />
                    </SixthDiv>
                </form>
        </PrincipalDiv>
    )
}

export default Schedule