import { combineReducers } from 'redux'; // 여러 Reducers를 하나로 합쳐줌
import user from './user_reducer';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
