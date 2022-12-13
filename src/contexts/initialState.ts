export interface State {
  userInfo?: AUTHORIZATION_API.CurrentUser | undefined;
}

const initialState = {
  userInfo: {
    avatar: '...image',
    name: 'your account name',
  },
};

export default initialState;
