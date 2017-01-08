// ------------------------------------
// Constants
// ------------------------------------
export const SUBMIT_MESSAGE = 'SUBMIT_MESSAGE' 
export const DELETE_MESSAGE = 'DELETE_MESSAGE'
// ------------------------------------
// Actions
// ------------------------------------


export function submitMessage (text, date, id) {
  return {
    type : SUBMIT_MESSAGE,
    text: text,
    date: date,
    id: date.getTime()
  }
}
export function deleteMessage(id) {
  return {
    type: DELETE_MESSAGE,
    id: id 
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
          text: action.text,
          id: action.id
        }, 
        ...state
      ]
    case DELETE_MESSAGE:
      return state.filter(msg => msg.id !== action.id)
    default:
      return state
  }
}

export default msgReducer