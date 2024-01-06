import { useSelector } from "react-redux";
import ListItem from "./ListItem"
const List = () => {
    let arr = useSelector(state => state.arr)
    return (<>my list book
        <ul>
            {arr.map(item => <li key={item.code}>
                <ListItem one={item}/>
            </li>)}
        </ul>
    </>);
}

export default List;