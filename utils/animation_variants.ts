import { TEXT_ANIMATION, SCREEN_DIRECTION } from "./enums";

// variant types
export interface variantTypes {
    show: {
        x: SCREEN_DIRECTION;
        y: SCREEN_DIRECTION;
    };
    hidden: {
        x: SCREEN_DIRECTION;
        y: SCREEN_DIRECTION;
    };
    exit:{
        x: SCREEN_DIRECTION;
        y: SCREEN_DIRECTION;
    }
}

// transitions




// variant

export const anim_x_container = {
  show: { x: SCREEN_DIRECTION.SHOW, y:SCREEN_DIRECTION.SHOW, 
    transition: {
      type: "easeIn",
      duration: 1 ,
      delayChildren: 0.1,
      when: "afterChildren"
  } },
  hidden: { x: SCREEN_DIRECTION.RIGHT, y:SCREEN_DIRECTION.SHOW,
    transition: {
      type: "easeIn",
      duration: 1 ,
      delayChildren: 0.1,
      // when: "afterChildren"
  } },
  exit:{ x: SCREEN_DIRECTION.LEFT, y:SCREEN_DIRECTION.SHOW,
    transition: {
      type: "easeIn",
      duration: 1 ,
      delayChildren: 0.1,
      // when: "afterChildren"
  }}
};

export const anim_x = {
    show: { x: SCREEN_DIRECTION.SHOW, y:SCREEN_DIRECTION.SHOW, },
    hidden: { x: SCREEN_DIRECTION.RIGHT, y:SCREEN_DIRECTION.SHOW },
    exit:{ x: SCREEN_DIRECTION.LEFT, y:SCREEN_DIRECTION.SHOW}
};
export const anim_y = {
    show: { y: SCREEN_DIRECTION.SHOW, x:SCREEN_DIRECTION.SHOW },
    hidden: { y: SCREEN_DIRECTION.BOTTOM, x:SCREEN_DIRECTION.SHOW },
    exit:{y: SCREEN_DIRECTION.TOP, x:SCREEN_DIRECTION.SHOW}
};







// transitions

export const springTransContainer = {
    type: "spring",
    stiffness: 13,
}

export const springTrans = {
  type: "spring",
  stiffness: 13,
  damping:6,
}
export const springTrans_modal = {
  type: "spring",
  stiffness: 100,
  damping:30,
}
export const springTrans_carousel = {
  type: "spring",
  stiffness: 50,
  damping:20,

  // type: "spring",
  // stiffness: 50,
}


export const spring = (delay:number = 0.1)=> ({
    
        type: "spring",
        stiffness: 13,
        damping:6,
        delay: delay ,
      
})



// container

export const screenSpringTransition = {
  type: "easeIn",
  // stiffness: 50,
  duration:1
}



// latest
  
  export const DIRECTION_VARIANT = {
    left: {
      show: { x: SCREEN_DIRECTION.SHOW, y:SCREEN_DIRECTION.SHOW },
      hide: { x: SCREEN_DIRECTION.LEFT, y:SCREEN_DIRECTION.SHOW  }
    },
    right: {
      show: { x: SCREEN_DIRECTION.SHOW, y:SCREEN_DIRECTION.SHOW  },
      hide: { x: SCREEN_DIRECTION.RIGHT, y:SCREEN_DIRECTION.SHOW  }
    },
    top: {
      show: { y: SCREEN_DIRECTION.SHOW, x:SCREEN_DIRECTION.SHOW  },
      hide: { y: SCREEN_DIRECTION.TOP, x:SCREEN_DIRECTION.SHOW   }
    },
    bottom: {
      show: { y: SCREEN_DIRECTION.SHOW, x:SCREEN_DIRECTION.SHOW   },
      hide: { y: SCREEN_DIRECTION.BOTTOM, x:SCREEN_DIRECTION.SHOW   }
    }
  };
  
  export interface variants_type {
    left?: direction;
    right?: direction;
    top?: direction;
    bottom?: direction;
  }
  
  export interface direction {
    show: state;
    hide: state;
  }
  
  export interface state {
    x: SCREEN_DIRECTION;
  }
  