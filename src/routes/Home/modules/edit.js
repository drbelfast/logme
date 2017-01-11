export const EDIT_MESSAGE_CLICK = 'EDIT_MESSAGE_CLICK'

export function editMessageClick(id) {
  return {
    type: EDIT_MESSAGE_CLICK,
    id: id
  }
}

const editReducer = (state = 0, action) => {
  switch(action.type) {
    case EDIT_MESSAGE_CLICK:
      return action.id
    default:
      return state
  }
}

export default editReducer
