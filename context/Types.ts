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
  sec2: boolean;
  sec2item1: boolean;
  sec2item2: boolean;
  sec2item3: boolean;
  sec3: boolean;
  sec4: boolean;
  sec4item1: boolean;
  sec4item2: boolean;
  sec5: boolean;
  contactUs: boolean;
  navBlack: boolean;
}

export type Action =
  | { type: "SEC-1" }
  | { type: "SEC-2" }
  | { type: "SEC-3" }
  | { type: "SEC-4" }
  | { type: "SEC-5" };

export type Dispatch = (action: Action) => void;

export interface ContextProviderPropsTypes{
  children:React.ReactNode;
}