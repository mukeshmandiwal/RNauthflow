import * as React from 'react';
import {
  getItem as getToken,
  setItem as setToken,
  removeItem as removeToken,
} from './async-storage';

const AuthContext = React.createContext({
  status: 'idle',
  userToken: null,
  signIn: () => {},
  signOut: () => {},
});

export const useAuthorization = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('Error');
  }
  return context;
};

export const AuthProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, {
    status: 'idle',
    userToken: null,
  });

  React.useEffect(() => {
    const initState = async () => {
      try {
        const userToken = await getToken();
        if (userToken !== null) {
          dispatch({type: 'SIGN_IN', token: userToken});
        } else {
          dispatch({type: 'SIGN_OUT'});
        }
      } catch (e) {
        console.log('e');
      }
    };

    initState();
  }, [state, dispatch]);

  const actions = React.useMemo(
    () => ({
      signIn: async token => {
        dispatch({type: 'SIGN_IN', token});
        await setToken(token);
      },
      signOut: async () => {
        dispatch({type: 'SIGN_OUT'});
        await removeToken();
      },
    }),
    [state, dispatch],
  );

  return (
    <AuthContext.Provider value={{...state, ...actions}}>
      {props.children}
    </AuthContext.Provider>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_OUT':
      return {
        ...state,
        status: 'signOut',
        userToken: null,
      };
    case 'SIGN_IN':
      return {
        ...state,
        status: 'signIn',
        userToken: action.token,
      };
  }
};
