import axios from 'axios';

export const FRIENDS = 'FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';

export const getFriends = () => {
  return (dispatch) => {
    axios.get('/api/friends')
      .then( res => dispatch({ type: FRIENDS, friends: res.data}) )
  }
}

export const addFriend = (friend) => {
  return (dispatch) => {
    axios.post('/api/friends', { friend } )
      .then( res => dispatch({ type: ADD_FRIEND, friend: res.data }) )
  }
}

export const updateFriend = (friend) => {
  return (dispatch) => {
    axios.put(`/api/friends/${friend.id}`, {friend} )
      .then( res => dispatch({ type: UPDATE_FRIEND, friend: res.data }) )
  }
}

// export const deleteFriend = (id) => {
//   return (dispatch) => {
//     axios.delete(`/api/friends/${id}`)
//       .then( () => dispatch({ type: DELETE_FRIEND, id }) )
//   }
// }