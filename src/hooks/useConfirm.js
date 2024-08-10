/**
 * @name useConfirm
 * @description 사용자에게 알림창을 띄우는 용도. 실제로 hooks는 아님. useEffect와 useState를 사용하지 않기 때문.
*/
export const useConfirm = (message = "", onConfirm, onCancle) =>{
    // 유효성 검사 ---------------------
    if(!onConfirm && typeof onConfirm !== "function"){
        return;
    }
    if(!onCancle && typeof onCancle !== "function"){
        return;
    }
    // 주요 로직 ----------------------
    const confirmAction = () => {
        if(window.confirm(message)){
            onConfirm();
        }
        else{
            onCancle();
        }
    }
    return confirmAction;
}