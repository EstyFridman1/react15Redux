import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveEditedBook } from "../stor/action/book";

const Edit = () => {
    let selectBookForEdit = useSelector(st => st.selectBookForEdit)
    let disp = useDispatch();
    let { register, handleSubmit } = useForm({
        defaultValues: selectBookForEdit
    })

    const save = (data) => {
        alert(JSON.stringify(data))
        disp(saveEditedBook(data))
    }
    return (<form onSubmit={handleSubmit(save)}>

        <label>שם הספר</label>
        <input {...register("name")} />
        <label>שם המחבר</label>
        <input {...register("author")} />
        <label>מחיר</label>
        <input {...register("price")} />

        <input type="submit" />
    </form>);
}

export default Edit;