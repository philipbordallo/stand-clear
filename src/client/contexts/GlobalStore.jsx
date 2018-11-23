import React from 'react';
import PT from 'prop-types';


const GlobalStore = React.createContext();

export function Provider(props) {
  const { store, children } = props;

  return (
    <GlobalStore.Provider value={ store }>
      { children }
    </GlobalStore.Provider>
  );
}
Provider.propTypes = {
  store: PT.arrayOf(
    PT.oneOfType([
      PT.object,
      PT.func,
    ]),
  ).isRequired,
  children: PT.node.isRequired,
};

export default GlobalStore;
