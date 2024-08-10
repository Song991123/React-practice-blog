import { useState } from "react";

/** 
 * @name useInput
 * @description Input에 value를 받을 때마다 update를 하고, 유효성 검사를 할 수 있도록 만든 hook*/
export const useInput = (initialValue, validator) =>{
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        const {
            target: {value}
        } = event;
        let willUpdate = true;
            
        if(typeof validator === "function"){
            willUpdate = validator(value);
        }
        if(willUpdate){
            setValue(value);
        }
    };

    return {value, onChange};
}