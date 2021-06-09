import React from 'react';

const useNotification = (title, options) => {
    if ( !('Notification' in window) ) {
        return false;
    }
    const fireNotif = () => {
        if ( Notification.permission !== 'granted' ) {
            Notification.requestPermission().then(permission => {
                if ( permission === 'granted' ) {
                    new Notification(title, options);
                } else {
                    return false;
                }
            })
        } else {
            new Notification(title, options);
        }
        return fireNotif;
    }
}

const UseNotification = () => {
    const triggerNotif = useNotification('Can I steal year kimchi?', {body: 'I love kimchi dont u?'});
    return (
        <div className="about__container">
            <button onClick={triggerNotif}>Hi</button>
        </div>
    );
}

export default UseNotification;