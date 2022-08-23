import { TEXT_ANIMATION, SCREEN_DIRECTION } from "./enums";

// variant types
export interface variantTypes {
    show: {
        x: TEXT_ANIMATION;
    };
    hidden: {
        x: TEXT_ANIMATION;
    };
}

// transitions

// container
export const containerSpringTransition = {
    type: "spring",
    stiffness: 50,
    staggerChildren: 0.5,
}
export const textContainerSpringTransition = {
    type: "spring",
    stiffness: 50,
    delayChildren: 0.5
}

export const screenSpringTransition = {
    type: "easeOut",
    stiffness: 50,
    duration:0.8
}


// variant

export const hidden_left = {
    show: { x: TEXT_ANIMATION.VISIBLE },
    hidden: { x: TEXT_ANIMATION.HIDDEN_LEFT },
};

export const visible_left = {
    show: { x: TEXT_ANIMATION.HIDDEN_LEFT },
    hidden: { x: TEXT_ANIMATION.VISIBLE },
};

export const visible_hidden_right = {
    show: { x: TEXT_ANIMATION.VISIBLE },
    hidden: { x: TEXT_ANIMATION.HIDDEN_RIGHT },
};


export const hidden_right = {
    show: { x: TEXT_ANIMATION.VISIBLE },
    hidden: { x: TEXT_ANIMATION.HIDDEN_RIGHT },
};

export const visible_right = {
    show: { x: TEXT_ANIMATION.HIDDEN_RIGHT },
    hidden: { x: TEXT_ANIMATION.VISIBLE },
};

export const visible_hidden_left = {
    show: { x: TEXT_ANIMATION.VISIBLE },
    hidden: { x: TEXT_ANIMATION.HIDDEN_LEFT },
};


export const anim_y = {
    show: { y: TEXT_ANIMATION.VISIBLE },
    hidden: { y: TEXT_ANIMATION.HIDDEN_BOTTOM },
    exit:{y: TEXT_ANIMATION.HIDDEN_TOP}
};

export const anim_x_container = {
    show: { x: TEXT_ANIMATION.VISIBLE },
    hidden: { x: TEXT_ANIMATION.HIDDEN_RIGHT },
    exit:{
        x: TEXT_ANIMATION.HIDDEN_LEFT,
        transition: {
            delayChildren: 0.5
          }
    
    }
};


export const anim_x = {
    show: { x: TEXT_ANIMATION.VISIBLE },
    hidden: { x: TEXT_ANIMATION.HIDDEN_RIGHT },
    exit:{x: TEXT_ANIMATION.HIDDEN_LEFT}
};


export const anim_x1y0 = {
    show: { x: TEXT_ANIMATION.VISIBLE, y:TEXT_ANIMATION.VISIBLE },
    hidden: { x: TEXT_ANIMATION.HIDDEN_RIGHT, y:TEXT_ANIMATION.VISIBLE },
    exit:{x: TEXT_ANIMATION.HIDDEN_LEFT, y:TEXT_ANIMATION.VISIBLE}
};
export const anim_x0y1 = {
    show: { y: TEXT_ANIMATION.VISIBLE, x:TEXT_ANIMATION.VISIBLE },
    hidden: { y: TEXT_ANIMATION.HIDDEN_BOTTOM, x:TEXT_ANIMATION.VISIBLE },
    exit:{y: TEXT_ANIMATION.HIDDEN_TOP, x:TEXT_ANIMATION.VISIBLE}
};







// transitions

export const springTrans = {
    type: "spring",
    delay: 0.1 ,
    stiffness: 50,
}



export const spring = (delay:number = 0.1)=> ({
    
        type: "spring",
        delay: delay ,
        stiffness: 50,
      
})

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
  