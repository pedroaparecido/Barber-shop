import axios from "axios"
import styled from "styled-components"
import useSWR from "swr"

import InputBarber from '../inputs/InputBarber'

const fetcher = url => axios.get('/api/schedule/schedule', data)

const EditBarber = () => {

    const { data } = useSWR('/api/schedule/schedule')

    const getBarber = async () => {
        const response = data.barber
        return response
    }

    return(
        <form>
            <InputBarber text={getBarber} />
        </form>
    )
}

export default EditBarber