import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { Dispatch, PropsWithChildren, ReactNode } from 'react';
import { createContext, useContext, useReducer } from 'react';
import type { Action } from './actions';
import type { State } from './initialState';
import initialState from './initialState';
import reducer from './reducer';

type IProps = PropsWithChildren<{
  children: ReactNode;
  userInfo: AUTHORIZATION_API.CurrentUser;
}>;

interface GlobalDispatch {
  dispatch: Dispatch<Action>;
}

const queryClient = new QueryClient();
const GlobalStateContext = createContext<State>(initialState);
const DispatchContext = createContext<GlobalDispatch>({} as GlobalDispatch);
function Provider(props: IProps) {
  const { children, userInfo } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QueryClientProvider client={queryClient}>
      <DispatchContext.Provider
        value={{
          dispatch,
        }}
      >
        <GlobalStateContext.Provider value={{ ...state, userInfo }}>
          {children}
        </GlobalStateContext.Provider>
      </DispatchContext.Provider>
    </QueryClientProvider>
  );
}

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);

  if (typeof context === 'undefined') {
    throw new Error('useGlobalState 必须在 GlobalStateContext 下使用');
  }

  return context;
};

export const useDispatch = () => {
  const context = useContext(DispatchContext);

  if (typeof context === 'undefined') {
    throw new Error('useDispatch 必须在 DispatchContext 下使用');
  }

  return context;
};

export default Provider;
