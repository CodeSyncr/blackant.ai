import { TEXT_ANIMATION } from "./enums";

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