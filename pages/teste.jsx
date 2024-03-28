import { useForm } from "react-hook-form"

function Teste() {
    const { handleSubmit, register } = useForm()

    const handleDate = (data) => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(handleDate)}>
            <input name="date" type="datetime-local" {...register('date')} />
            <textarea type="text" {...register('text')} name="text" />
            <input type="submit" />
        </form>
    )
}

export default Teste