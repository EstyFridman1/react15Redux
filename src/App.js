import './App.css';
import List from './Compinents/List';
import BookDetails from './Compinents/BookDetails';
import { useSelector } from 'react-redux';
import Edit from "./Compinents/Edit"
function App() {
  let selected = useSelector(st => st.selectBook)
  let selectBookForEdit = useSelector(st => st.selectBookForEdit)
  return (<>
    <List />
    {selected && <BookDetails />}
    {selectBookForEdit && <Edit/>}
  </>
  );
}

export default App;
