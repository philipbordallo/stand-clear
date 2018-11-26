import { useContext } from 'react';
import { ReactReduxContext } from 'react-redux';

import * as actionsList from 'actions';

function createActions(actions, dispatch) {
  return Object.keys(actions).reduce((accumulator, action) => ({
    ...accumulator,
    [action](...args) {
      dispatch(actions[action](...args));
    },
  }), {});
}

function useRedux() {
  const { storeState: state, store: { dispatch } } = useContext(ReactReduxContext);
  const actions = createActions(actionsList, dispatch);

  return [state, actions];
}

export default useRedux;
