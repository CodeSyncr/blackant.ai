import { Action, Dispatch, SectionStatesTypes } from "./Types";

export const initialState = {
  sec1: true,
  sec2a: false,
  sec2b: false,

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
    case "SEC-2a":
      return {
        ...state,
        sec1: false,
        sec2a: true,
        sec2item1: true,
        navBlack: true,
      };
    case "SEC-2item1":
      return {
        ...state,
        sec2item1: false,
        sec2item2: false,
      };

    case "SEC-2item3":
      return {
        ...state,
        sec2a: false,
        sec2b: true,
        sec2item2: true,
        sec2item3: true,
        navBlack: true,
      };
    case "SEC-2b":
      return {
        ...state,
        sec2a: false,
        sec2b: true,
        sec2item2: true,
        sec2item3: false,
        navBlack: true,
      };
    case "SEC-2item3Exit":
      return {
        ...state,
        sec2item3: false,
      };
    case "SEC-2item2Exit":
      return {
        ...state,
        sec2item2: false,
      };
    case "SEC-3":
      return {
        ...state,
        sec2b: false,
        sec3: true,
        contactUs: false,
        navBlack: false,
      };

    case "SEC-4":
      return {
        ...state,
        sec4: true,
        sec4item1: true,
        contactUs: true,
        navBlack: true,
      };
    case "SEC-4item2":
      return {
        ...state,
        sec4item1: false,
        sec4item2: true,
      };
    case "SEC-5":
      return {
        ...state,
        sec3: false,
        sec4: false,
        sec5: true,
        navBlack: false,
      };

    default:
      return state;
  }
};
