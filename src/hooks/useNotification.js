/**
 * @name useNotification
 * @param {string} title 알람 제목 
 * @param {string} options 알람 설명
 * @description 알람창을 띄워주는 hook
 * @returns 알람창을 띄워준다.
 */
export const useNotification = (title, options) => {
    // 윈도우에서 웹이 작동하는 게 아니면 알림을 멈춤
    if((!"Nofication" in window)){
        return;
    }
    const fireNotif = () => {
        if(Notification.permission !== "granted"){
            Notification.requestPermission().then((permission) => {
                if(permission === "granted"){
                    new Notification(title, options);
                } else {
                    return;
                }
                
            });
        }
        else{
            new Notification(title, options);
        }
    };
    return fireNotif;
}