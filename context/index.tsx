import React, { createContext, useContext, useReducer } from "react";
import {
  ContextProviderPropsTypes,
  SectionStatesTypes,
  Action,
  Dispatch,
} from "./Types";
import { initialState, reducer } from "./reducer";

const context = createContext<
  { state: SectionStatesTypes; dispatch: Dispatch } | undefined
>(undefined);

const ContextProvider = (props: ContextProviderPropsTypes) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <context.Provider value={{ state, dispatch }}>
      {props.children}
    </context.Provider>
  );
};

const useSection = () => {
  const cntx = useContext(context);
  if (cntx === undefined) {
    throw new Error("'useSection' must be used inside 'ContextProvider'");
  }
  return cntx;
};

export { useSection, ContextProvider };
