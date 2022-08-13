import axios from "axios"
export const bookAction = (search) => async (dispatch) => {
  try {
      if (search) {
        const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=10&key=AIzaSyCxG7X-PSgnVSx1M_FKpgbjEg8dLgs7WbA`)
        dispatch({type : 'GET_BOOK', payload : result.data})
      }else {
        const result = await axios.get('https://www.googleapis.com/books/v1/volumes?q=coding&maxResults=10&key=AIzaSyCxG7X-PSgnVSx1M_FKpgbjEg8dLgs7WbA')
        dispatch({type : 'GET_BOOK', payload : result.data})
      }
    } catch (error) {
      console.log(error)
    }
}