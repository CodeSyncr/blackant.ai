import { Action, Dispatch, SectionStatesTypes } from "./Types";

export const initialState = {
  sec1: true,
  sec1ani: true,
  sec2: false,
  sec2ani1: false,
  sec2ani2: false,
  sec3: false,
  sec4: false,
  sec4ani1: false,
  sec4ani2: false,
  sec5: false,
  contactUs: true,
  navBlack: false,
};

export const reducer = (state: SectionStatesTypes, actions: Action) => {
  switch (actions.type) {
    case "SEC-1":
      return {
        ...state,
        sec1: true,
        sec1ani: true,
        navBlack: false,
        sec2: false,
        sec2ani1: false,
        sec3: false,
        sec4: false,
        sec5: false,
        contactUs: true,
      };
    case "SEC-2":
      return {
        ...state,
        sec1ani: false,
        sec2: true,
        sec3: false,
        sec2ani1: true,
        sec2ani2: false,
        navBlack: true,
      };
    case "SEC-3":
      return {
        ...state,
        sec1ani: true,
        sec2ani1: false,
        sec2ani2: true,
        sec3: true,
        navBlack: false,
      };

    case "SEC-4":
      return {
        ...state,
        sec1: false,
        sec2: false,
        sec4: true,
        sec4ani1: true,
        navBlack: true,
      };
    case "SEC-5":
      return {
        ...state,
        sec2: false,
        sec3: false,
        sec5: true,
        contactUs: false,
        sec4ani1: false,
        navBlack: false,
      };

    default:
      return state;
  }
};
