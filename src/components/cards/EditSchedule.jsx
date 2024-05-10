import { useForm } from "react-hook-form"

import DateInput from "../inputs/DateInput"
import Textarea from "../inputs/Textarea"
import ButtonList from "../Button/ButtonList"

import axios from "axios"
import useSWR, { mutate } from "swr"

const EditSchedule = ({ id, onSave }) => {
    const { register, handleSubmit } = useForm()
    const { mutate } = useSWR()

    const handleUpdate = async (data) => {
        try {
            const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/schedule/schedule`, {
                id,
                date: data.date,
            })
            
            if (response.status === 200) {
                mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/schedule/schedule`)
                onSave()
            }
        } catch (err) {
            console.error(err)
        }
    }

    return(
        <form onSubmit={handleSubmit(handleUpdate)}>
            <DateInput {...register('date')} type="datetime-local" name="date" />
            <ButtonList backcolor="#16181d" color="#ffb34a" onClick={() => handleUpdate()}>Editar</ButtonList>
        </form>
    )
}

export default EditSchedule