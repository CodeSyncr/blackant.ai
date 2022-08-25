import { Action, Dispatch, SectionStatesTypes } from "./Types";

export const initialState = {
  sec1: true,
  sec2a: false,
  sec2b: false,
  sec2c: false,
  sec2bani: false,
  sec2cani: false,
  sec2itm1: false,
  sec2itm2: false,
  sec2itm3: false,
  sec3: false,
  sec4itm1: false,
  sec4itm2: false,
  sec5: false,
  contactUs: false,
  navBlack: false,
};

export const reducer = (state: SectionStatesTypes, actions: Action) => {
  switch (actions.type) {
    case "SEC-1":
      return {
        ...state,
        sec1: true,
        sec2a: true,
        navBlack: false,
        contactUs: true,
        sec5: false,
      };
    case "SEC-2a":
      return {
        ...state,
        sec1: false,
        sec2itm1: true,
        navBlack: true,
      };
    case "SEC-2a_curious":
      return {
        ...state,
        sec2itm1: false,
        sec2a: true,
        sec2c: true,
        sec2b: false,
      };

    case "SEC-2itm1":
      return {
        ...state,
        sec2itm1: false,
      };

    case "SEC-2b":
      return {
        ...state,
        sec1: false,
        sec2a: false,
        sec2b: true,
        sec2bani: true,
        sec2itm2: true,
        sec2itm3: true,
      };

    case "analyse_model_exit":
      return {
        ...state,
        sec2itm3: false,
      };
    case "curious_abt_exit":
      return {
        ...state,
        sec2itm2: false,
      };
    case "SEC-2b-exit":
      return {
        ...state,
        sec2bani: false,
      };
    case "SEC-3":
      return {
        ...state,
        sec2b: false,
        sec3: true,
      };

    default:
      return state;
  }
};
