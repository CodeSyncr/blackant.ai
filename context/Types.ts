import React from "react";



export interface StateProviderProps {
    children: React.ReactNode
}


export interface ActionsTypes {
    type:string;
    payload:any;
}

// new
export interface SectionTypes {
  sec1:     Sec1;
  sec2:     SEC;
  sec3:     Sec1;
  sec4:     SEC;
  sec5:     Sec1;
  navBlack: boolean;
}

export interface Sec1 {
  status: boolean;
  anim:   boolean;
}

export interface SEC {
  status: boolean;
  anim1:  boolean;
  anim2:  boolean;
  item1:  Sec1;
  item2:  Sec1;
  item3: Sec1;
}


export interface SectionStatesTypes{
  sec1: boolean;
  sec2:boolean;
  sec2a: boolean;
  sec2b: boolean;
  sec2c: boolean;
  sec2bani: boolean;
  sec2cani: boolean;
  sec2itm1: boolean;
  sec2itm2: boolean;
  sec2itm2exit:boolean;
  sec2itm3: boolean;
  sec3: boolean;
  sec4:boolean;
  sec4itm1: boolean;
  sec4itm2: boolean;
  sec5: boolean;
  contactUs: boolean;
  navBlack: boolean;
}

export type Action =
  | { type: "SEC-1" }
  | { type: "SEC-2a" }
  | { type: "SEC-2b" }
  | { type: "SEC-2c" }
  | { type: "SEC-2-exit" }
  | { type: "SEC-2itm1" }
  | { type: "analyse_model" }
  | { type: "features" }
  | { type: "recent_project" }
  | { type: "analyse_model_exit" }
  | { type: "curious_abt_exit" }
  | { type: "SEC-2b-exit" }
  | { type: "SEC-2a_curious" }
  | { type: "SEC-2item1Exit" }
  | { type: "SEC-2item2" }
  | { type: "SEC-2item2Exit" }
  | { type: "SEC-2item3" }
  | { type: "SEC-2item3Exit" }
  | { type: "SEC-3" }
  | { type: "SEC-4" }
  | { type: "SEC-4a" }
  | { type: "SEC-4item2" }
  | { type: "SEC-5" };

export type Dispatch = (action: Action) => void;

export interface ContextProviderPropsTypes{
  children:React.ReactNode;
}