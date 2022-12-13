export interface Action {
  type: string;
  payload?: any;
}

export const SET_STATE_OF_TEST = 'set_state_of_test';
export const SET_USER_INFO = 'set_user_info';
