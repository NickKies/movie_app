import React, {useEffect, useRef} from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();
    useEffect(() => {
        if( element.current ) {
            const { current } = element;
            console.log(element)
            console.log(current)
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, []);
    return { ref: element,style: {opacity: 0} };

}

const UseFadeIn = () => {
    const fadeInH1 = useFadeIn(1, 2);
    const fadeInP = useFadeIn(5, 10);
    return (
        <div className="about__container">
            <h1 {...fadeInH1}>Hi</h1>
            <p {...fadeInP}>lorem ipsum ...</p>
        </div>
    );
};

export default UseFadeIn;