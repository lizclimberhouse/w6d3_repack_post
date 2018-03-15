import { combineReducers } from 'redux';
import notes from './notes';
import friends from './friends';


const rootReducer = combineReducers({
  notes,
  friends,
});

export default rootReducer;