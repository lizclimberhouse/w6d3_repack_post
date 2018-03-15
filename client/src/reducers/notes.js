const notes = (state = [], action ) => {
  switch(action.type) {
    case 'NOTES':
      return action.notes
    case 'ADD_NOTE':
      return [action.note, ...state]
    case 'UPDATE_NOTE':
      return state.map( n => {
        if (n.id === action.note.id)
          return action.note
        return n
      })
    case 'DELETE_NOTE':
      return state.filter( n => n.id !== action.id)
    default:
      return state;
  }
}

export default notes;