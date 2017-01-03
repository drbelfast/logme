// ------------------------------------
// Constants
// ------------------------------------
export const SUBMIT_MESSAGE = 'SUBMIT_MESSAGE' 

// ------------------------------------
// Actions
// ------------------------------------
export function submitMessage () {
  return {
    type : SUBMIT_MESSAGE,
    msg: "hello",
    date: "new-year" 
  }
}

// ------------------------------------
// Reducer
// ------------------------------------


const msgReducer = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case SUBMIT_MESSAGE:
      return [
        {
          date: action.date,
          msg: action.msg
        }, 
        ...state
      ]
    default:
      return state
  }
}

export default msgReducer