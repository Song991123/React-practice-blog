import { useState } from "react";

/** 
 * @name useTabs
 * @description array를 넣고, 요청에 의해 특정 index에 해당되는 data를 반환시켜주는 hook*/
export const useTabs = (initialValue, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialValue);
    // 들어온 데이터가 null이거나 array가 아닐 경우 그냥 반환
    if(!allTabs || !Array.isArray(allTabs)){
        return;
    }
    // 값이 들어온 경우 리턴시킬 값들
    return {
        currentItem : allTabs[currentIndex],
        changeItem : setCurrentIndex
    };
};