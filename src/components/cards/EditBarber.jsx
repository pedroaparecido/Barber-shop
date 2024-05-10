import axios from "axios"
import styled from "styled-components"
import useSWR from "swr"

import InputBarber from '../inputs/InputBarber'

const fetcher = url => axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/schedule/schedule`, data)

const EditBarber = () => {

    const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/schedule/schedule`)

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