import { Action, Dispatch, SectionStatesTypes } from "./Types";

export const initialState = {
  sec1: true,
  sec2: false,
  sec2item1: false,
  sec2item2: false,
  sec2item3: false,
  sec3: false,
  sec4: false,
  sec4item1: false,
  sec4item2: false,
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
        navBlack: false,
        contactUs: true,
        sec5: false,
      };
    case "SEC-2":
      return {
        ...state,
        sec2: true,
        sec1: false,
        navBlack: true,
      };
    case "SEC-3":
      return {
        ...state,
        sec3: true,
        sec2: false,
        contactUs: false,
        navBlack: false,
      };

    case "SEC-4":
      return {
        ...state,
        sec4: true,
        sec4ani1: true,
        contactUs: true,
        navBlack: true,
      };
    case "SEC-5":
      return {
        ...state,
        sec3: false,
        sec4: false,
        sec5: true,
        sec4ani1: false,
        navBlack: false,
      };

    default:
      return state;
  }
};
