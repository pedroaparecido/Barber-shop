import { useForm } from "react-hook-form"

import DateInput from "../inputs/DateInput"
import Textarea from "../inputs/Textarea"
import ButtonList from "../Button/ButtonList"

import axios from "axios"
import { mutate } from "swr"

const EditSchedule = ({ id, onSave }) => {
    const { register, handleSubmit } = useForm()

    const handleUpdate = async (data) => {
        try {
            const response = await axios.patch('/api/schedule/schedule', {
                id,
                date: data.date,
            })
            
            if (response.status === 200) {
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