import React, { createContext } from "react";

interface contextTypes {
  sec1?: {
    status?: boolean;
    anim?: boolean;
  };
  sec2?: {
    status?: boolean;
    anim1?: boolean;
    anim2?: boolean;
    item1?: {
      status?: boolean;
      anim?: boolean;
    };
    item2?: {
      status?: boolean;
      anim?: boolean;
    };
    item3?: {
      status?: boolean;
      anim?: boolean;
    };
  };
  sec3?: {
    status?: boolean;
    anim?: boolean;
  };
  sec4?: {
    status?: boolean;
    anim1?: boolean;
    anim2?: boolean;
    item1?: {
      status?: boolean;
      anim?: boolean;
    };
    item2?: {
      status?: boolean;
      anim?: boolean;
    };
  };
  sec5?: {
    status?: boolean;
    anim?: boolean;
  };
  navBlack: false;
}

const context = createContext({} as contextTypes);

const StateProvider = () => {
  return <div>index</div>;
};

export default StateProvider;
