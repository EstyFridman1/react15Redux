import { useDispatch } from "react-redux";
import { deletaBook, selectBookForEdit,selectBook} from "../stor/action/book";

const ListItem = ({ one }) => {
    let Dispatch = useDispatch();

    return (<div className="one-book">
        <h3>{one.name}</h3>

        <input type="button" onClick={() => {
            Dispatch(deletaBook(one.code)) }} value="מחק" />
       

        <input type="button" onClick={() => {
            Dispatch(selectBookForEdit(one)) }} value="עריכה" />
       
       <input type="button" onClick={() => {
            Dispatch(selectBook(one)) }} value="הצגת פרטי הספר" />
    </div>);
}

export default ListItem;