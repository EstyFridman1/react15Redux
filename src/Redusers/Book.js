

const myInitialState = {
    arr: [
        {
            code: 1, name: "dina dei", price: 50, author: "sara leon"},
            {code: 2, name: "yaldey shai", price: 70, author: "sara kisner"},
            {code: 3, name: "taaloma rekoma", price: 80, author: "root tenenold"}
        
    ],
    selectBook: null,
    selectBookForEdit: null
}
export const bookReducer = (state = myInitialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return {
                ...state,
                arr: [...state.arr, action.payload]
            }
        case "SELECT_BOOK":
            return {
                selectBook: action.payload,
                selectBookForEdit: state.selectBookForEdit,
                arr: state.arr
                // ...state,
                // selectBook: action.payload
            }
        case "DELETE_BOOK":
            return {
                selectBook: state.selectBook?.code != action.payload ? state.selectBook : null,
                selectBookForEdit: action.selectBookForEdit,
                arr: state.arr.filter(item => item.code != action.payload)

            }
        case "SELECT_BOOK_FOR-EDIT":
            return {
                arr: state.arr,
                selectBook: state.selectBook,
                selectBookForEdit: action.payload
                // ...state,
                // selectBookForEdit: action.payload
            }



        case "SAVE EDITED BOOK":
            let copy = state.arr.map(item => {
                if (item.code !== action.payload.code)
                    return item
                return action.payload
            })
            return {
                selectBook: state.selectBook,
                selectBookForEdit: null,
                arr: copy
            }
        default: return state


    }

}


