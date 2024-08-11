/**
 * @name usePreventLeave
 * @description 어떤 문서 작업이나 작업 시, save가 안된 상태에서 브라우저를 닫으려 할 때 유저에게 정말 닫을거냐고 물어보는 hook. 실제로 hooks는 아님. useEffect와 useState를 사용하지 않기 때문.
 */
export const usePreventLeave = (onLeaving) => {
    const listner = (event) => {
        event.preventDefault();
        event.returnValue = "";
    }
    const enablePrevent = () => window.addEventListener("beforeunload", listner);
    const disablePrevent = () => window.removeEventListener("beforeunload", listner);

    return {enablePrevent, disablePrevent}
}