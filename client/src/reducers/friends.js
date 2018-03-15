const friends = (state = [], action ) => {
  switch(action.type) {
    case 'FRIENDS':
    // debugger
      return action.friends
    case 'ADD_FRIEND':
      return [action.friend, ...state]
    case 'UPDATE_FRIEND':
      return state.map( f => {
        if (f.id === action.friend.id)
          return action.friend
        return f
      })
    case 'DELETE_FRIEND':
      return state.filter( f => f.id !== action.id )
    default:
      return state;
  }
}

export default friends;