import { variantTypes } from "../../utils/animation_variants";

export interface sections {
  sec1: boolean;
  sec2: boolean;
  sec2exit: boolean;
  sec3: boolean;
  sec4: boolean;
  sec4exit: boolean;
  sec5: boolean;
  navBlack: boolean;
};



export interface items {
  item1: boolean;
  item2: boolean;
  item2Exit: boolean;
  item3: boolean;
}
export interface items1 {
  item1: boolean;
  item2: boolean;
}

export type setSections = React.Dispatch<React.SetStateAction<sections>>;
export type setItems = React.Dispatch<React.SetStateAction<items>>;
export type setItems1 = React.Dispatch<React.SetStateAction<items1>>;
export type stateBool = boolean
export type setBoolean = React.Dispatch<React.SetStateAction<boolean>>

export interface SectionProps {
  id?:string;
  setBlack?: React.Dispatch<React.SetStateAction<boolean>>;
  sections?: sections;
  setSections?:setSections;
  items?: items;
  setItems?:setItems

  data?: {
    txt1: string;
    txt2?: string;
    txt3?: string;
    txt4?: string;
    img?: string;
    placeHolderTxt?: string;
  };

  variants?: variantTypes;
  initial?: string;
  animate?: string;
  exit?:string;
}



export interface VerticleCardsCompProps {
  data: {
    txt1: string;
    txt2: string;
    txt3: string;
    img: string;
  }[];
  items?: items;
  setItems?: setItems;
  exit?: boolean,
  setExit?: setBoolean
  sections?: sections;
  setSections?:setSections;
}


export interface Section4Content1Props {
  data: {
    txt1: string;
    txt2: string;
    paratxt1: string;
    linkText: string;
    paratxt2: string;
    paratxt3: string;
  };
  setItems?:React.Dispatch<React.SetStateAction<{
    item1: boolean;
    item2: boolean;
}>>
  items?: {
    item1: boolean;
    item2: boolean;
}
  setBlack?: React.Dispatch<React.SetStateAction<boolean>>;
  sections?: sections;
  setSections?:setSections;
}

export interface Section4Content2Props {
  data: {
    txt1: string;
    txt2: string;
    cards: {
        title: string;
        body: string;
        img: string;
    }[];
  }
  setItems?:React.Dispatch<React.SetStateAction<{
    item1: boolean;
    item2: boolean;
}>>
  items?: {
    item1: boolean;
    item2: boolean;
}
  setBlack?: React.Dispatch<React.SetStateAction<boolean>>;
  sections?: sections;
  setSections?:setSections;
}



export interface Section1 {
  txt1: string;
  txt2: string;
}

export interface Content1 {
  txt1: string;
  txt2: string;
  txt3: string;
  txt4: string;
  placeHolderTxt: string;
}

export interface Content2 {
  txt1: string;
  txt2: string;
  placeHolderTxt: string;
}

export interface Content3 {
  txt1: string;
  txt2: string;
  txt3: string;
  img: string;
}

export interface Section2 {
  content1: Content1;
  content2: Content2;
  content3: Content3[];
}

export interface ProgramCard {
  img: string;
  title: string;
  desc: string;
}

export interface Section3 {
  txt1: string;
  txt2: string;
  txt3: string;
  programCards: ProgramCard[];
}

export interface Content12 {
  txt1: string;
  txt2: string;
  paratxt1: string;
  linkText: string;
  paratxt2: string;
  paratxt3: string;
}

export interface Content22 {
  title: string;
  body: string;
  img: string;
}

export interface Section4 {
  content1: Content12;
  content2: Content22[];
}

export interface Section5 {
  txt1: string;
  txt2: string;
  txt3: string;
  paratxt1: string;
  socialIcons: string[];
  paratxt2: string;
  email: string;
}

export interface RootObject {
  section1?: Section1;
  section2?: Section2;
  section3?: Section3;
  section4?: Section4;
  section5?: Section5;
}

export interface WheelEvent<T = Element> extends React.MouseEvent<T> {
  deltaMode: number;
  deltaX: number;
  deltaY: number;
  deltaZ: number;
}