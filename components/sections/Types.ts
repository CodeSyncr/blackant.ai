import { variantTypes } from "../../utils/animation_variants";

export interface SectionProps {
  id?:string;
  setBlack?: React.Dispatch<React.SetStateAction<boolean>>;
  sections?: {
    sec1: boolean;
    sec2: boolean;
    sec2exit:boolean,
    sec3: boolean;
    sec4: boolean;
    sec4exit:boolean;
    sec5: boolean;
    footer:boolean
  };
  setSections?: React.Dispatch<React.SetStateAction<{
    sec1: boolean;
    sec2: boolean;
    sec2exit:boolean,
    sec3: boolean;
    sec4: boolean;
    sec4exit:boolean;
    sec5: boolean;
    footer:boolean
  }>>
  items?: {
    item1: boolean;
    item2: boolean;
    item3: boolean;
    item4: boolean;
  };
  setItems?: React.Dispatch<React.SetStateAction<{
    item1: boolean;
    item2: boolean;
    item3: boolean;
    item4: boolean;
  }>>

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
  exit?:boolean
}




export interface VerticleCardsCompProps {
  data: {
    txt1: string;
    txt2: string;
    txt3: string;
    img: string;
  }[];
  items: {
    item1: boolean;
    item2: boolean;
    item3: boolean;
    item4:boolean
  };
  setItems: React.Dispatch<
    React.SetStateAction<{
      item1: boolean;
      item2: boolean;
      item3: boolean;
      item4:boolean
    }>
  >;
  sections: {
    sec1: boolean;
    sec2: boolean;
    sec2exit:boolean,
    sec3: boolean;
    sec4: boolean;
    sec4exit:boolean;
    sec5: boolean;
    footer:boolean
  };
  setSections: React.Dispatch<React.SetStateAction<{
    sec1: boolean;
    sec2: boolean;
    sec2exit:boolean,
    sec3: boolean;
    sec4: boolean;
    sec4exit:boolean;
    sec5: boolean;
    footer:boolean
  }>>
  exit?: boolean,
  setExit?: React.Dispatch<React.SetStateAction<boolean>>
}


export interface AboutBaProps {
  data: {
    txt1: string;
    txt2: string;
    paratxt1: string;
    linkText: string;
    paratxt2: string;
    paratxt3: string;
  };
  setItems: React.Dispatch<
    React.SetStateAction<{
      item1: boolean;
      item2: boolean;
    }>
  >;
  items: {
    item1: boolean;
    item2: boolean;
  };
  sections: {
    sec1: boolean;
    sec2: boolean;
    sec2exit:boolean,
    sec3: boolean;
    sec4: boolean;
    sec4exit:boolean;
    sec5: boolean;
    footer:boolean
  };
  setSections: React.Dispatch<React.SetStateAction<{
    sec1: boolean;
    sec2: boolean;
    sec2exit:boolean,
    sec3: boolean;
    sec4: boolean;
    sec4exit:boolean;
    sec5: boolean;
    footer:boolean
  }>>
}

export interface Section7Props {
  data: {
    title: string;
    body: string;
    img: string;
  }[];
  setItems: React.Dispatch<
    React.SetStateAction<{
      item1: boolean;
      item2: boolean;
    }>
  >;
  items: {
    item1: boolean;
    item2: boolean;
  };
  sections: {
    sec1: boolean;
    sec2: boolean;
    sec2exit:boolean,
    sec3: boolean;
    sec4: boolean;
    sec4exit:boolean;
    sec5: boolean;
    footer:boolean
  };
  setSections: React.Dispatch<React.SetStateAction<{
    sec1: boolean;
    sec2: boolean;
    sec2exit:boolean,
    sec3: boolean;
    sec4: boolean;
    sec4exit:boolean;
    sec5: boolean;
    footer:boolean
  }>>
}