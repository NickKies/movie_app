import React, {useEffect} from 'react';

const useBeforeLeave = (onBefore) => {
    const handle = event => {
        const { clientY } = event;
        console.log(clientY)
        if ( clientY <= 0 ) onBefore();
    };
    useEffect(() => {
        document.addEventListener('mouseleave', handle);
        return () => document.removeEventListener('mousemove', handle);
    }, []);
};

const UseBeforeLeave = () => {
    const begForLife = () => console.log('plz dont leave..');
    useBeforeLeave(begForLife);
    return (
        <div className="about__container">
            <h1>Hi</h1>
        </div>
    );
};

export default UseBeforeLeave;