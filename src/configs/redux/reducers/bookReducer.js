const initialState = {
  books : {

  }
}

export const bookReducer = (state = initialState, action) => {
  if(action.type === "GET_BOOK"){
    return {
      books : action.payload
    }
  }else {
    return state
  }
}