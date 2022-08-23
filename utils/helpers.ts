
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

