import React, { useEffect, useRef } from 'react';

const useClick = (onClick) => {
    /*if ( typeof onClick !== 'function') {
        return;
    }*/
    const element = useRef();
    useEffect(() => {
       if ( element.current ) {
           element.current.addEventListener('click', onClick);
       }
       return () => {
           if ( element.current) element.current.removeEventListener('click', onClick);
       };
    }, []);
    return element;
}

const UseClick = () => {
    const sayHello = () => console.log('say hello');
    const title = useClick(sayHello);
    return (
        <div className="about__container">
            <h1 ref={title}>Hi</h1>
        </div>
    );
};

export default UseClick;