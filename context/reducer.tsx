import { Action, Dispatch, SectionStatesTypes } from "./Types";

export const initialState = {
  sec1: true,
  sec2: true,
  sec2a: false,
  sec2b: false,
  sec2c: false,
  sec2bani: false,
  sec2cani: false,
  sec2itm1: false,
  sec2itm2: false,
  sec2itm2exit: false,
  sec2itm3: false,
  sec3: false,
  sec4: false,
  sec4itm1: true,
  sec4itm2: false,
  sec5: false,
  contactUs: false,
  navBlack: false,
  analyse_model: false,
};

export const reducer = (state: SectionStatesTypes, actions: Action) => {
  switch (actions.type) {
    case "SEC-1":
      return {
        ...state,
        sec1: true,
        sec2: true,
        sec2a: true,
        sec2b: false,
        sec2c: false,
        sec2bani: false,
        sec2cani: false,
        sec2itm1: true,
        sec2itm2: false,
        sec2itm2exit: false,
        sec2itm3: false,
        sec3: false,
        sec4: false,
        sec4itm1: true,
        sec4itm2: false,
        sec5: false,
        contactUs: false,
        navBlack: false,
      };
    case "SEC-2a":
      return {
        ...state,
        sec1: false,
        sec2: true,
        sec2a: true,
        sec2b: true,
        sec2itm1: true,
        navBlack: true,
      };
    case "SEC-2b":
      return {
        ...state,
        sec2itm1: false,
      };
    case "SEC-2c":
      return {
        ...state,
        sec2b: true,
        sec2c: true,
        sec2itm2: true,
        sec3: true,
      };
    case "analyse_model":
      return {
        ...state,
        sec2bani: false,
        sec2cani: false,
        sec2itm2: false,
        sec2itm3: false,
        sec3: false,
        sec4: false,
        sec4itm1: false,
        sec4itm2: false,
        contactUs: false,
        sec1: false,
        sec2: false,
        sect3: false,
        sec2a: false,
        sec2b: true,
        sec2itm1: false,
        sec2itm2exit: false,
        sec2c: true,
        sec5: false,
        navBlack: true,
      };

    case "analyse_model_exit":
      return {
        ...state,
        sec2c: false,
      };
    case "curious_abt_exit":
      return {
        ...state,
        sec2itm2exit: true,
      };
    case "SEC-2-exit":
      return {
        ...state,
        sec2: false,
        sec2a: false,
        sec2b: false,
        sec2c: false,
        sec3: true,
        navBlack: false,
      };

    case "features":
      return {
        ...state,
        sec2: false,
        sec2a: false,
        sec3: true,
        sec4itm1: false,
        sec4itm2: false,
        navBlack: false,
      };

    case "SEC-4":
      return {
        ...state,
        sec1: false,
        sec2: false,
        sec2a: false,
        sec2b: false,
        sec2c: false,
        navBlack: true,
        sec4: true,
        sec4itm1: true,
        sec4itm2: false,
      };

    case "recent_project":
      return {
        ...state,
        sec4: true,
        sec4itm1: true,
        sec4itm2: true,
        sec5: true,
      };

    case "SEC-5":
      return {
        sec2: true,
        sec5: true,
      };
    default:
      return state;
  }
};
