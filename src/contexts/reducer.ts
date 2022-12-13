import type { Action } from './actions';
import { SET_STATE_OF_TEST } from './actions';
import type { State } from './initialState';

function reducer(state: State, action: Action): State {
  const { type } = action;

  switch (type) {
    case SET_STATE_OF_TEST:
      return { ...state };
    default:
      return state;
  }
}

export default reducer;
