import React, { JSXElementConstructor } from "react";

export const cssClasses = (str1: string, str2: string) => {
    
    const obj: any = {};
    const arr:string[] = []
    const wholeStrArr = str2.concat(" ", str1).split(" ");
    for (let val of wholeStrArr) {
      const [cl, clVal] = val.split("-");
      if(!clVal){
        obj[cl] = cl;
      }else {
        obj[cl] = clVal;
      }
    }
    for(let[key, value] of Object.entries(obj)){
      if(key === value){
        arr.push(key)
      }else{
        arr.push(`${key}-${value}`)
      }
    }
    return arr.join(" ")
  };

  export const delayFunc = (func:any, value:boolean)=>{
    setTimeout(()=>func(value),500)
  }


  export const wheelEventHandler = (func1, func2)=>{
  let scrollingDirection = 0;
  let lastScroll = 9999;
  let scrollIdleTime = 300;
    return (e)=> {
    let delta = e.deltaY;
    let timeNow = performance.now();
    if (
      delta > 0 &&
      (scrollingDirection != 1 || timeNow > lastScroll + scrollIdleTime)
    ) {
      func1();
      scrollingDirection = 1;
    } else if (
      delta < 0 &&
      (scrollingDirection != 2 || timeNow > lastScroll + scrollIdleTime)
    ) {
      func2();
      scrollingDirection = 2;
    }
    lastScroll = timeNow;
    }
  }