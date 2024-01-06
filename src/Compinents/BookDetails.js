import { useSelector } from "react-redux";

const BookDetails = () => {
    let selected = useSelector(st => st.selectBook);
    return (<div>
         <h4>{selected.code}</h4>
        <h3>{selected.name}</h3>
        <h4>{selected.price}</h4>
        <h4>{selected.author}</h4>
    </div>);
}

export default BookDetails;