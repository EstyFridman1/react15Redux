export const selectBook = (book) => {
    return {
        type: "SELECT_BOOK",
        payload: book
    }
}

export const addBook = (book) => {
    return {
        type: "ADD_BOOK",
        payload: book
    }
}

export const deletaBook = (bookCode) => {
    return {
        type: "DELETE_BOOK",
        payload: bookCode
    }
}

export const selectBookForEdit = (book) => {
    return {
        type: "SELECT_BOOK_FOR-EDIT",
        payload: book
    }
}
export const saveEditedBook = (book) => {
    return {
        type: "SAVE EDITED BOOK",
        payload: book
    }
}