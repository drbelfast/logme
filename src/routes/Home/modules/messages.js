// ------------------------------------
// Constants
// ------------------------------------
export const SUBMIT_MESSAGE = 'SUBMIT_MESSAGE' 

// ------------------------------------
// Actions
// ------------------------------------

export function submitMessage (msg, date) {
  return {
    type : SUBMIT_MESSAGE,
    msg: msg,
    date: date 
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

const msgReducer = (state = [], action) => {

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