import React, { useReducer, createContext } from "react";

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

const initialState = {
  products: [],
  filterProducts: [],
  
};

const reducer = (state, action) => {
  
  switch (action.type) {
    case "SET_PRODUCTS":
      return {...state, products: action.payload.products,};

    case "SET_FILTER_PRODUCTS":
      return {...state, filterProducts: action.payload.filterProducts,};

    default:
      console.error(`Invalid action type: ${action.type}`);
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

const init = () => {
  if (typeof window !== `undefined`) {
    return {
      filterProducts: [],
      products: []
    };
  } else {
    return initialState;
  }
};

const GlobalContextProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <>
      <GlobalStateContext.Provider value={state}>
        <GlobalDispatchContext.Provider value={dispatch}>
          {children}
        </GlobalDispatchContext.Provider>
      </GlobalStateContext.Provider>
    </>
  );
};

export default GlobalContextProvider;